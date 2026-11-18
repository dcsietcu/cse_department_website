import Link from 'next/link';

export const metadata = {
  "title": "Placements & Alumni | CSE – IET Calicut",
  "description": "Career development, placements and alumni of CSE, IET Calicut."
};

export default function PlacementsAlumniPage() {
  return (
    <main id="main">
      <section className="section content-page">
        <div className="shell">
          <p className="index">CAREERS &amp; ALUMNI</p>
          <h1 className="page-title">From academic foundations to professional journeys.</h1>
          <p className="page-lede">Explore career development, placement information and the journeys of our graduates.</p>
          <div className="simple-grid">
            <article className="simple-card">
              <p className="index">01 — Placements</p>
              <h2>Career pathways.</h2>
              <p>Publish verified placement highlights, internship experiences, recruiting organizations and career preparation resources.</p>
            </article>
            <article className="simple-card">
              <p className="index">02 — Alumni</p>
              <h2>Our graduates.</h2>
              <p>Reconnect with alumni and share their professional journeys, contributions and experiences with current students.</p>
            </article>
          </div>
          <p className="content-copy">Placement statistics, recruiter names, alumni profiles and testimonials should be published only with departmental approval and appropriate consent.</p>
        </div>
      </section>
    </main>
  );
}
