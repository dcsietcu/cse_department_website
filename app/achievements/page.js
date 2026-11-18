import Link from 'next/link';

export const metadata = {
  "title": "Achievements | CSE – IET Calicut",
  "description": "Student, faculty and department achievements."
};

export default function AchievementsPage() {
  return (
    <main id="main">
      <section className="section content-page">
        <div className="shell">
          <p className="index">ACHIEVEMENTS</p>
          <h1 className="page-title">Recognising dedication and excellence.</h1>
          <p className="page-lede">A record of verified student, faculty and departmental achievements across academics, research, innovation and technical competitions.</p>
        </div>
      </section>
      <section className="section section-alt" id="terminal">
        <div className="shell">
          <div className="section-head">
            <div>
              <p className="index">01 — Department Achievements</p>
              <h2 className="kinetic">Celebrating achievement and excellence.</h2>
            </div><a className="link-arrow" href="#terminal">All achievements <span aria-hidden="true">↗</span></a>
          </div>
          <div className="achievement-grid">
            <article className="achievement-card">
              <img alt="Students celebrating" loading="lazy" src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&amp;fit=crop&amp;w=600&amp;q=70" />
              <p className="card-code">National Level · 2026</p>
              <h3>Smart India Hackathon finalists</h3>
              <p className="achievement-student">Aarav Mehta, Riya Nair, Dev Patel</p>
              <p className="achievement-desc">Reached the national finals with an affordable air-quality monitor built for city schools.</p><a className="link-arrow" href="#">Read story <span aria-hidden="true">↗</span></a>
            </article>
            <article className="achievement-card">
              <img alt="Graduation ceremony" loading="lazy" src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&amp;fit=crop&amp;w=600&amp;q=70" />
              <p className="card-code">Research · 2026</p>
              <h3>Paper published at SOSP</h3>
              <p className="achievement-student">Meera Iyer, Kenji Watanabe</p>
              <p className="achievement-desc">Work on scheduling for heterogeneous cores was accepted at the ACM symposium.</p><a className="link-arrow" href="#">Read paper <span aria-hidden="true">↗</span></a>
            </article>
            <article className="achievement-card">
              <img alt="Team with a trophy" loading="lazy" src="https://images.unsplash.com/photo-1559223607-a43c990c692c?auto=format&amp;fit=crop&amp;w=600&amp;q=70" />
              <p className="card-code">Inter-college · 2026</p>
              <h3>Regional CTF champions</h3>
              <p className="achievement-student">Sara Khan, Arjun Verma, Eli George</p>
              <p className="achievement-desc">Won the regional capture-the-flag competition with a focus on web and binary exploitation.</p><a className="link-arrow" href="#">Read story <span aria-hidden="true">↗</span></a>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
