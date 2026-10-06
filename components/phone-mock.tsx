import Image from 'next/image';

const s = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;

const LinkIcon = () => <svg viewBox="0 0 24 24"><path d="M10 14a4.5 4.5 0 0 0 6.4 0l3-3a4.5 4.5 0 0 0-6.4-6.4l-1 1M14 10a4.5 4.5 0 0 0-6.4 0l-3 3a4.5 4.5 0 0 0 6.4 6.4l1-1" {...s} strokeWidth={2.4}/></svg>;
const Pin = () => <svg viewBox="0 0 24 24"><path d="M12 21s-7-6.1-7-11.5a7 7 0 0 1 14 0C19 14.9 12 21 12 21Z" fill="currentColor"/><circle cx="12" cy="9.5" r="2.6" fill="#fff"/></svg>;

/* Drei Beispiel-Stories aus unseren Konzept-Demos (fiktive Marken) – je eine Branche. */
const stories = [
  { handle: 'cafe.still', time: '2 Std.', img: '/showcase/cafe-still/assets/coffee.webp', pos: '50% 40%', avatar: '/showcase/cafe-still/assets/interior.webp' },
  { handle: 'casa.oliva', time: '5 Std.', img: '/showcase/casa-oliva/assets/pasta.webp', pos: '42% 50%', avatar: '/showcase/casa-oliva/assets/interior.webp' },
  { handle: 'villa.serena', time: '1 Tag', img: '/showcase/architektur/assets/villa.webp', pos: '38% 50%', avatar: '/showcase/architektur/assets/house.webp' },
];

export function PhoneMock() {
  return <div className="ph" aria-hidden="true">
    <i className="ph-btn ph-btn-a"/><i className="ph-btn ph-btn-b"/><i className="ph-btn ph-btn-c"/>
    <div className="ph-screen">
      {stories.map((story, i) => <div className="st" key={story.handle}>
        <div className="st-img"><Image src={story.img} alt="" fill priority={i === 0} unoptimized sizes="260px" style={{ objectPosition: story.pos }}/></div>
        <div className="st-head"><i className="st-av" style={{ backgroundImage: `url(${story.avatar})` }}/><b>{story.handle}</b><small>{story.time}</small><em>···</em></div>
        {i === 0 && <>
          <p className="st-title" style={{ top: '118cqw' }}>Neue Karte</p>
          <span className="st-link" style={{ top: '146cqw' }}><LinkIcon/>KARTE ANSEHEN</span>
        </>}
        {i === 1 && <div className="st-poll" style={{ top: '104cqw' }}>
          <b>Pasta heute Abend?</b><span>JA, BITTE!</span><span>MORGEN</span>
        </div>}
        {i === 2 && <>
          <span className="st-loc" style={{ top: '40cqw' }}><Pin/><span>MÜNCHEN</span></span>
          <p className="st-title" style={{ top: '122cqw' }}>Neues Projekt</p>
          <span className="st-link" style={{ top: '147cqw' }}><LinkIcon/>PROJEKT ANSEHEN</span>
        </>}
      </div>)}
      <div className="ph-bars"><i/><i/><i/></div>
      <div className="ph-island"/>
      <div className="ph-status">
        <b>9:41</b>
        <span>
          <svg viewBox="0 0 18 12"><rect x="0" y="8" width="3" height="4" rx=".8" fill="currentColor"/><rect x="5" y="5.5" width="3" height="6.5" rx=".8" fill="currentColor"/><rect x="10" y="3" width="3" height="9" rx=".8" fill="currentColor"/><rect x="15" y="0" width="3" height="12" rx=".8" fill="currentColor"/></svg>
          <svg viewBox="0 0 16 12"><path d="M8 11.2 5.6 8.6a3.4 3.4 0 0 1 4.8 0Z" fill="currentColor"/><path d="M3.3 6.3a6.6 6.6 0 0 1 9.4 0M1 3.9a9.9 9.9 0 0 1 14 0" {...s} strokeWidth={1.7}/></svg>
          <svg viewBox="0 0 26 12"><rect x=".6" y=".6" width="22" height="10.8" rx="3.2" fill="none" stroke="currentColor" strokeOpacity=".45" strokeWidth="1.1"/><rect x="2.3" y="2.3" width="15" height="7.4" rx="1.8" fill="currentColor"/><path d="M24.3 4v4a2 2 0 0 0 0-4Z" fill="currentColor" fillOpacity=".45"/></svg>
        </span>
      </div>
      <div className="st-reply">
        <span>Nachricht senden …</span>
        <svg viewBox="0 0 24 24"><path d="M12 20.3S3.5 15.2 3.5 9.2A4.6 4.6 0 0 1 12 6.8a4.6 4.6 0 0 1 8.5 2.4c0 6-8.5 11.1-8.5 11.1Z" {...s}/></svg>
        <svg viewBox="0 0 24 24"><path d="M21 3.5 10.3 13.7M21 3.5l-6.6 17-4.1-6.8-6.8-4.1Z" {...s}/></svg>
      </div>
      <div className="ph-home"/>
    </div>
  </div>;
}
