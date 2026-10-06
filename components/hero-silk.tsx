'use client';

import { useEffect, useRef } from 'react';

// Fließender Seiden-Hintergrund für den Hero, übernommen aus der LeMatcha-Demo
// und auf die Studio-Farben (Anthrazit, Taupe, Creme) umgestellt.
const vertex = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
const fragment = [
  'precision mediump float;uniform vec2 r;uniform float t;uniform vec2 m;',
  'float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}',
  'float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}',
  'float fbm(vec2 p){float v=0.,a=.5;mat2 R=mat2(.8,.6,-.6,.8);for(int i=0;i<5;i++){v+=a*n(p);p=R*p*2.03;a*=.5;}return v;}',
  'void main(){vec2 uv=gl_FragCoord.xy/r;vec2 p=(gl_FragCoord.xy-.5*r)/r.y;p+=m*.12;float T=t*.035;',
  'vec2 q=vec2(fbm(p*1.3+T),fbm(p*1.3+vec2(5.2,1.3)-T));',
  'vec2 w=vec2(fbm(p*1.3+2.6*q+vec2(1.7,9.2)+T*1.4),fbm(p*1.3+2.6*q+vec2(8.3,2.8)-T));',
  'float f=fbm(p*1.3+2.8*w);',
  'vec3 deep=vec3(.063,.059,.055),umber=vec3(.17,.145,.12),taupe=vec3(.50,.43,.35),cream=vec3(.93,.89,.82);',
  'vec3 c=mix(deep,umber,smoothstep(.25,.65,f));',
  'c=mix(c,taupe,smoothstep(.5,.95,f*length(w)*1.25));',
  'float sheen=pow(smoothstep(.55,1.,f*1.12),3.);c=mix(c,cream,sheen*.36);',
  // Links (Text) dunkler halten, rechts darf die Seide mehr leuchten.
  'c*=mix(.62,1.,smoothstep(.0,.75,uv.x));',
  'c*=1.-.55*pow(length(uv-vec2(.62,.5)),1.6);',
  'c+=(h(gl_FragCoord.xy+fract(t))-.5)*.025;',
  'gl_FragColor=vec4(c,1.);}',
].join('\n');

export function HeroSilk() {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = canvas.current;
    if (!cv) return;
    let gl: WebGLRenderingContext | null = null;
    try { gl = cv.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'low-power' }); } catch {}
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const s = gl!.createShader(type);
      if (!s) return null;
      gl!.shaderSource(s, src); gl!.compileShader(s);
      return gl!.getShaderParameter(s, gl!.COMPILE_STATUS) ? s : null;
    };
    const vs = compile(gl.VERTEX_SHADER, vertex), fs = compile(gl.FRAGMENT_SHADER, fragment);
    const program = gl.createProgram();
    if (!vs || !fs || !program) return;
    gl.attachShader(program, vs); gl.attachShader(program, fs); gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(program, 'p');
    gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const uRes = gl.getUniformLocation(program, 'r'), uT = gl.getUniformLocation(program, 't'), uM = gl.getUniformLocation(program, 'm');

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fine = window.matchMedia('(pointer: fine)').matches;
    // Auf dem Handy mit niedriger Auflösung und ~30 fps rendern, das Bild ist ohnehin weich.
    const scale = fine ? .75 : .5;
    const minFrame = fine ? 0 : 1000 / 30;

    let mx = 0, my = 0, smx = 0, smy = 0, raf = 0, last = 0, onScreen = true;
    const draw = (now: number) => {
      smx += (mx - smx) * .04; smy += (my - smy) * .04;
      gl!.uniform2f(uRes, cv.width, cv.height);
      gl!.uniform1f(uT, reduce ? 12 : 8 + now / 1000);
      gl!.uniform2f(uM, smx, -smy);
      gl!.drawArrays(gl!.TRIANGLES, 0, 3);
    };
    const size = () => {
      const s = Math.min(window.devicePixelRatio || 1, 1.25) * scale;
      cv.width = Math.max(1, Math.round(cv.clientWidth * s));
      cv.height = Math.max(1, Math.round(cv.clientHeight * s));
      gl!.viewport(0, 0, cv.width, cv.height);
      if (reduce) draw(0);
    };
    const frame = (now: number) => {
      raf = 0;
      if (!onScreen || document.hidden) return;
      if (now - last >= minFrame) { last = now; draw(now); }
      raf = requestAnimationFrame(frame);
    };
    const start = () => { if (!reduce && !raf && onScreen && !document.hidden) raf = requestAnimationFrame(frame); };
    const onPointer = (e: PointerEvent) => { mx = e.clientX / window.innerWidth - .5; my = e.clientY / window.innerHeight - .5; };
    const io = new IntersectionObserver(([entry]) => { onScreen = entry.isIntersecting; start(); });

    size();
    io.observe(cv);
    window.addEventListener('resize', size);
    document.addEventListener('visibilitychange', start);
    if (fine && !reduce) window.addEventListener('pointermove', onPointer, { passive: true });
    cv.classList.add('is-live');
    start();

    return () => {
      if (raf) cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener('resize', size);
      document.removeEventListener('visibilitychange', start);
      window.removeEventListener('pointermove', onPointer);
    };
  }, []);

  return <canvas ref={canvas} className="hx-silk" aria-hidden="true"/>;
}
