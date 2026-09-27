import Image from 'next/image';

const s = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;

/* Dekoratives Handy mit einem Reel im Instagram-Stil (fiktive Marke aus unseren Konzept-Demos). */
export function PhoneMock() {
  return <div className="ph" aria-hidden="true">
    <i className="ph-btn ph-btn-a"/><i className="ph-btn ph-btn-b"/><i className="ph-btn ph-btn-c"/>
    <div className="ph-screen">
      <Image className="ph-media" src="/showcase/atelier-strand/assets/blonde.webp" alt="" fill unoptimized sizes="240px"/>
      <div className="ph-shade"/>
      <div className="ph-island"/>
      <div className="ph-status">
        <b>9:41</b>
        <span>
          <svg viewBox="0 0 18 12"><rect x="0" y="8" width="3" height="4" rx=".8" fill="currentColor"/><rect x="5" y="5.5" width="3" height="6.5" rx=".8" fill="currentColor"/><rect x="10" y="3" width="3" height="9" rx=".8" fill="currentColor"/><rect x="15" y="0" width="3" height="12" rx=".8" fill="currentColor"/></svg>
          <svg viewBox="0 0 16 12"><path d="M8 11.2 5.6 8.6a3.4 3.4 0 0 1 4.8 0Z" fill="currentColor"/><path d="M3.3 6.3a6.6 6.6 0 0 1 9.4 0M1 3.9a9.9 9.9 0 0 1 14 0" {...s} strokeWidth={1.7}/></svg>
          <svg viewBox="0 0 26 12"><rect x=".6" y=".6" width="22" height="10.8" rx="3.2" fill="none" stroke="currentColor" strokeOpacity=".45" strokeWidth="1.1"/><rect x="2.3" y="2.3" width="15" height="7.4" rx="1.8" fill="currentColor"/><path d="M24.3 4v4a2 2 0 0 0 0-4Z" fill="currentColor" fillOpacity=".45"/></svg>
        </span>
      </div>
      <div className="ph-top"><b>Reels</b><svg viewBox="0 0 24 24"><path d="M3 8.5A2.5 2.5 0 0 1 5.5 6h2l1.5-2h6l1.5 2h2A2.5 2.5 0 0 1 21 8.5v9a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5Z" {...s}/><circle cx="12" cy="13" r="3.6" {...s}/></svg></div>
      <div className="ph-side">
        <span><svg viewBox="0 0 24 24"><path d="M12 20.3S3.5 15.2 3.5 9.2A4.6 4.6 0 0 1 12 6.8a4.6 4.6 0 0 1 8.5 2.4c0 6-8.5 11.1-8.5 11.1Z" fill="#ff3b5c" stroke="#ff3b5c" strokeWidth="1.6" strokeLinejoin="round"/></svg></span>
        <span><svg viewBox="0 0 24 24"><path d="M20.5 11.6a8.4 8.4 0 0 1-12.3 7.5L3.5 20.5l1.4-4.6A8.4 8.4 0 1 1 20.5 11.6Z" {...s}/></svg></span>
        <span><svg viewBox="0 0 24 24"><path d="M21 3.5 10.3 13.7M21 3.5l-6.6 17-4.1-6.8-6.8-4.1Z" {...s}/></svg></span>
        <span><svg viewBox="0 0 24 24"><circle cx="5.5" cy="12" r="1.6" fill="currentColor"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/><circle cx="18.5" cy="12" r="1.6" fill="currentColor"/></svg></span>
        <i className="ph-disc"/>
      </div>
      <div className="ph-meta">
        <div className="ph-user"><i className="ph-avatar"><i/></i><b>atelier.strand</b><em>Folgen</em></div>
        <p>Soft Dimension – weiche Übergänge, natürliche Wellen. Termin über den Link in der Bio.</p>
        <div className="ph-audio"><svg viewBox="0 0 24 24"><path d="M9 18V5l11-2v13" {...s}/><circle cx="6.5" cy="18" r="2.5" {...s}/><circle cx="17.5" cy="16" r="2.5" {...s}/></svg><span>Originalton · atelier.strand</span></div>
      </div>
      <div className="ph-progress"><i/></div>
      <div className="ph-home"/>
    </div>
  </div>;
}
