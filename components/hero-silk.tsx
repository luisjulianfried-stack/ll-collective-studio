'use client';

import { useEffect, useRef } from 'react';

// Fließender Seiden-Hintergrund für den Hero, übernommen aus der LeMatcha-Demo
// und auf die Studio-Farben (Burgunder, Braun, ein Hauch Olive, Creme) umgestellt.
const vertex = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
const fragmentFor = (light: boolean) => [
  'precision mediump float;uniform vec2 r;uniform float t;uniform vec2 m;',
  'float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}',
  'float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}',
  'float fbm(vec2 p){float v=0.,a=.5;mat2 R=mat2(.8,.6,-.6,.8);for(int i=0;i<5;i++){v+=a*n(p);p=R*p*2.03;a*=.5;}return v;}',
  'void main(){vec2 uv=gl_FragCoord.xy/r;vec2 p=(gl_FragCoord.xy-.5*r)/r.y;p+=m*'+(light?'.05':'.12')+';p*='+(light?'.8':'1.')+';float T=t*'+(light?'.014':'.035')+';',
  'vec2 q=vec2(fbm(p*1.3+T),fbm(p*1.3+vec2(5.2,1.3)-T));',
  'vec2 w=vec2(fbm(p*1.3+2.6*q+vec2(1.7,9.2)+T*1.4),fbm(p*1.3+2.6*q+vec2(8.3,2.8)-T));',
  'float f=fbm(p*1.3+2.8*w);',
  ...(light ? [
    // Helle Variante: Creme- und Sandtöne mit einem Hauch Rosé und Olive.
    'vec3 base=vec3(.925,.89,.84),sand=vec3(.84,.77,.69),rose=vec3(.74,.58,.55),olive=vec3(.70,.69,.58),pearl=vec3(.985,.97,.945);',
    'vec3 c=mix(base,sand,smoothstep(.3,.8,f)*.85);',
    'c=mix(c,olive,smoothstep(.55,.95,q.x)*.22);',
    'c=mix(c,rose,smoothstep(.6,1.,f*length(w)*1.2)*.35);',
    'float sheen=pow(smoothstep(.5,1.,f*1.1),2.);c=mix(c,pearl,sheen*.45);',
    'c*=1.-.08*pow(length(uv-vec2(.5,.5)),1.6);',
  ] : [
    'vec3 deep=vec3(.12,.04,.05),wine=vec3(.31,.09,.12),olive=vec3(.26,.26,.15),umber=vec3(.47,.31,.22),cream=vec3(.96,.89,.80);',
    'vec3 c=mix(deep,wine,smoothstep(.25,.68,f));',
    'c=mix(c,olive,smoothstep(.55,.95,q.x)*.35);',
    'c=mix(c,umber,smoothstep(.5,.95,f*length(w)*1.25));',
    'float sheen=pow(smoothstep(.55,1.,f*1.12),3.);c=mix(c,cream,sheen*.34);',
    // Links (Text) dunkler halten, rechts darf die Seide mehr leuchten.
    'c*=mix(.7,1.,smoothstep(.0,.75,uv.x));',
    'c*=1.-.55*pow(length(uv-vec2(.62,.5)),1.6);',
  ]),
  'c+=(h(gl_FragCoord.xy+fract(t))-.5)*.025;',
  'gl_FragColor=vec4(c,1.);}',
].join('\n');

export function HeroSilk({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
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
    const vs = compile(gl.VERTEX_SHADER, vertex), fs = compile(gl.FRAGMENT_SHADER, fragmentFor(tone === 'light'));
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
  }, [tone]);

  return <canvas ref={canvas} className="hx-silk" aria-hidden="true"/>;
}
