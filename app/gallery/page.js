import Link from 'next/link';

export const metadata = {
  "title": "Gallery | CSE – IET Calicut",
  "description": "Department gallery of academic and student activities."
};

export default function GalleryPage() {
  return (
    <main id="main">
      <section className="section content-page">
        <div className="shell">
          <p className="index">GALLERY</p>
          <h1 className="page-title">A visual record of our journey.</h1>
          <p className="page-lede">Explore photographs from academic activities, workshops, seminars, student projects and departmental events.</p>
        </div>
      </section>
      <section className="section" id="faculty">
        <div className="shell">
          <div className="section-head">
            <div>
              <p className="index">01 — Department Gallery</p>
              <h2 className="kinetic">Moments from the department.</h2>
            </div><a className="link-arrow" href="#faculty">View gallery <span aria-hidden="true">↗</span></a>
          </div>
          <p className="mono muted faculty-marquee-label">Now playing — selected records from the department</p>
          <div aria-label="Selected records" className="faculty-marquee">
            <div className="faculty-marquee-track">
              <div className="faculty-marquee-group">
                <img alt="Dean blunt - Black Metal 2" height="120" loading="lazy" src="https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677" width="120" />
                <img alt="Jungle Jack - JUNGLE DES ILLUSIONS VOL 2" height="120" loading="lazy" src="https://i.scdn.co/image/ab67616d00001e02af73f776b92d4614152fb141" width="120" />
                <img alt="Yung Lean - Stardust" height="120" loading="lazy" src="https://i.scdn.co/image/ab67616d00001e02ecdb8f824367a53468100faf" width="120" />
                <img alt="Lana Del Rey - Ultraviolence" height="120" loading="lazy" src="https://i.scdn.co/image/ab67616d00001e021624590458126fc8b8c64c2f" width="120" />
                <img alt="A$AP Rocky - Tailor Swif" height="120" loading="lazy" src="https://i.scdn.co/image/ab67616d00001e020dcf0f3680cff56fe5ff2288" width="120" />
                <img alt="Midnight Miami (feat Konvy) - Nino Paid, Konvy" height="120" loading="lazy" src="https://i.scdn.co/image/ab67616d00001e02bc1028b7e9cd2b17c770a520" width="120" />
              </div>
              <div aria-hidden="true" className="faculty-marquee-group">
                <img alt="" height="120" loading="lazy" src="https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677" width="120" />
                <img alt="" height="120" loading="lazy" src="https://i.scdn.co/image/ab67616d00001e02af73f776b92d4614152fb141" width="120" />
                <img alt="" height="120" loading="lazy" src="https://i.scdn.co/image/ab67616d00001e02ecdb8f824367a53468100faf" width="120" />
                <img alt="" height="120" loading="lazy" src="https://i.scdn.co/image/ab67616d00001e021624590458126fc8b8c64c2f" width="120" />
                <img alt="" height="120" loading="lazy" src="https://i.scdn.co/image/ab67616d00001e020dcf0f3680cff56fe5ff2288" width="120" />
                <img alt="" height="120" loading="lazy" src="https://i.scdn.co/image/ab67616d00001e02bc1028b7e9cd2b17c770a520" width="120" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
