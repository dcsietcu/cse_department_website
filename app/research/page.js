import Link from 'next/link';

export const metadata = {
  "title": "Research & Projects | CSE – IET Calicut",
  "description": "Research and student projects from the CSE Department, IET Calicut."
};

export default function ResearchPage() {
  return (
    <main id="main">
      <section className="section content-page">
        <div className="shell">
          <p className="index">RESEARCH &amp; INNOVATION</p>
          <h1 className="page-title">Ideas developed into solutions.</h1>
          <p className="page-lede">Explore selected student projects, research interests and technical work emerging from the department.</p>
          <p className="content-copy">Project entries, team details, faculty guides, abstracts and repository links must be verified before publication.</p>
        </div>
      </section>
      <section className="section section-alt" id="research">
        <div className="shell">
          <div className="section-head">
            <div>
              <p className="index">01 — Student Projects</p>
              <h2 className="kinetic">Student projects and innovation.</h2>
            </div><a className="link-arrow" href="#research">All projects <span aria-hidden="true">↗</span></a>
          </div>
          <div className="project-grid">
            <article className="project-card">
              <div className="project-media" data-project-media="">
                <img alt="Circuit board close up" loading="lazy" src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&amp;fit=crop&amp;w=600&amp;q=70" />
                <div aria-hidden="true" className="project-cursor">
                  <svg fill="none" height="31" viewBox="0 0 26 31" width="26" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" d="M21.993 14.425 2.549 2.935l4.444 23.108 4.653-10.002z" fill="#22c55e" fillRule="evenodd" stroke="#fff" strokeLinecap="square" strokeWidth="2"></path>
                  </svg><span>Campus Grid</span>
                </div>
              </div>
              <div className="project-info">
                <p className="card-code">Best project · 2026</p>
                <h3>Campus Grid</h3>
                <p className="project-desc">A live microgrid dashboard for the college hostel, built with ESP32 sensors and a real-time web interface.</p>
                <p className="project-team">
                  <span>Team</span> Aarav Mehta, Riya Nair, Dev Patel
                </p><Link className="link-arrow" href="/contact">View project <span aria-hidden="true">↗</span></Link>
              </div>
            </article>
            <article className="project-card">
              <div className="project-media" data-project-media="">
                <img alt="Code on a screen" loading="lazy" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&amp;fit=crop&amp;w=600&amp;q=70" />
                <div aria-hidden="true" className="project-cursor">
                  <svg fill="none" height="31" viewBox="0 0 26 31" width="26" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" d="M21.993 14.425 2.549 2.935l4.444 23.108 4.653-10.002z" fill="#22c55e" fillRule="evenodd" stroke="#fff" strokeLinecap="square" strokeWidth="2"></path>
                  </svg><span>Pathfinder</span>
                </div>
              </div>
              <div className="project-info">
                <p className="card-code">Best project · 2026</p>
                <h3>Pathfinder</h3>
                <p className="project-desc">An accessibility-first indoor navigation app that guides students between labs using Bluetooth beacons.</p>
                <p className="project-team">
                  <span>Team</span> Sara Khan, Mikal Das, Joy Thomas
                </p><Link className="link-arrow" href="/contact">View project <span aria-hidden="true">↗</span></Link>
              </div>
            </article>
            <article className="project-card">
              <div className="project-media" data-project-media="">
                <img alt="Team working at desks" loading="lazy" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&amp;fit=crop&amp;w=600&amp;q=70" />
                <div aria-hidden="true" className="project-cursor">
                  <svg fill="none" height="31" viewBox="0 0 26 31" width="26" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" d="M21.993 14.425 2.549 2.935l4.444 23.108 4.653-10.002z" fill="#22c55e" fillRule="evenodd" stroke="#fff" strokeLinecap="square" strokeWidth="2"></path>
                  </svg><span>Open Ledger</span>
                </div>
              </div>
              <div className="project-info">
                <p className="card-code">Best project · 2026</p>
                <h3>Open Ledger</h3>
                <p className="project-desc">A transparent club-funds tracker with role-based access, receipts and a simple audit trail for student groups.</p>
                <p className="project-team">
                  <span>Team</span> Nisha Rao, Arjun Verma, Eli George
                </p><Link className="link-arrow" href="/contact">View project <span aria-hidden="true">↗</span></Link>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="section section-alt">
        <div className="shell">
          <p className="index">DEPARTMENT DIRECTORY</p>
          <h2 className="section-title">Explore related areas.</h2>
          <div className="simple-grid">
            <article className="simple-card">
              <h2>Faculty research</h2>
              <p>Explore faculty profiles and research interests.</p><Link className="link-arrow" href="/faculty">Faculty directory ↗</Link>
            </article>
            <article className="simple-card">
              <h2>Student achievements</h2>
              <p>Discover recognitions and competition results.</p><Link className="link-arrow" href="/achievements">View achievements ↗</Link>
            </article>
            <article className="simple-card">
              <h2>Academic resources</h2>
              <p>Find programme, curriculum and laboratory information.</p><Link className="link-arrow" href="/academics">Explore academics ↗</Link>
            </article>
            <article className="simple-card">
              <h2>Events &amp; workshops</h2>
              <p>See technical activities and department events.</p><Link className="link-arrow" href="/events">View events ↗</Link>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
