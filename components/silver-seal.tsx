import { LOGO_PATH } from '@/lib/logo';

/*
 * Silbernes, geprägtes LL-Siegel (angelehnt an das Instagram-Profilbild):
 * gebürstetes Metall, das Logo und „COLLECTIVE STUDIO“ sind per SVG-Licht
 * eingeprägt. Ein Lichtreflex wandert beim Scrollen über die Oberfläche.
 */
export function SilverSeal() {
  return <div className="seal-bridge reveal" aria-hidden="true">
    <div className="seal">
      <svg viewBox="0 0 200 200">
        <defs>
          <radialGradient id="seal-metal" cx="38%" cy="30%" r="80%">
            <stop offset="0" stopColor="#f3f3f1"/>
            <stop offset=".35" stopColor="#cfcfcc"/>
            <stop offset=".7" stopColor="#9b9b98"/>
            <stop offset="1" stopColor="#6e6e6b"/>
          </radialGradient>
          <linearGradient id="seal-rim" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity=".9"/>
            <stop offset=".5" stopColor="#8c8c89" stopOpacity=".6"/>
            <stop offset="1" stopColor="#4d4d4b" stopOpacity=".9"/>
          </linearGradient>
          <filter id="seal-brushed" x="0" y="0" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.9 0.9" numOctaves="2" seed="7" result="n"/>
            <feColorMatrix in="n" type="saturate" values="0" result="g"/>
            <feComposite in="g" in2="SourceGraphic" operator="in"/>
          </filter>
          <filter id="seal-emboss" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur in="SourceAlpha" stdDeviation=".9" result="blur"/>
            <feSpecularLighting in="blur" surfaceScale="4.5" specularConstant="1.15" specularExponent="14" lightingColor="#ffffff" result="spec">
              <feDistantLight azimuth="235" elevation="42"/>
            </feSpecularLighting>
            <feComposite in="spec" in2="SourceAlpha" operator="in" result="specIn"/>
            <feOffset in="SourceAlpha" dx=".9" dy="1.4" result="off"/>
            <feGaussianBlur in="off" stdDeviation=".9" result="offBlur"/>
            <feFlood floodColor="#2a2a28" floodOpacity=".7"/>
            <feComposite in2="offBlur" operator="in" result="shadow"/>
            <feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/><feMergeNode in="specIn"/></feMerge>
          </filter>
        </defs>
        <circle cx="100" cy="100" r="98" fill="url(#seal-metal)"/>
        <circle cx="100" cy="100" r="98" fill="#888" opacity=".16" filter="url(#seal-brushed)"/>
        <circle cx="100" cy="100" r="97.2" fill="none" stroke="url(#seal-rim)" strokeWidth="1.6"/>
        <circle cx="100" cy="100" r="88" fill="none" stroke="#ffffff" strokeOpacity=".28" strokeWidth=".6"/>
        <g filter="url(#seal-emboss)" fill="#8f8f8c">
          <path d={LOGO_PATH} fillRule="evenodd" transform="translate(64 58) scale(.088)"/>
          <text x="100" y="137" textAnchor="middle" fontFamily="'Jost Variable', Jost, sans-serif" fontSize="10" fontWeight="550" letterSpacing="2.4">COLLECTIVE STUDIO</text>
        </g>
      </svg>
      <span className="seal-sheen"/>
    </div>
  </div>;
}
