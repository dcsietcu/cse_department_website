import Link from 'next/link';

export const metadata = {
  "title": "Home | CSE – IET Calicut",
  "description": "Official website of the Department of Computer Science and Engineering, IET Calicut."
};

export default function HomePage() {
  return (
    <main id="main">
      <section className="hero" id="top">
        <div className="hero-wrap">
          <div className="hero-grid shell">
            <div className="hero-copy">
              <p className="eyebrow">Department of Computer Science &amp; Engineering · IET Calicut</p>
              <h1 className="hero-title"><span className="word">Engineering</span>{' '}<span className="word">the</span>{' '}<span className="word">future</span>{' '}<span className="word">through</span>{' '}<span className="word">computing.</span></h1>
              <p className="lede">Committed to quality technical education, practical learning, research and the development of competent engineering professionals.</p>
              <div className="hero-actions">
                <Link className="btn" href="/about">Explore <span aria-hidden="true">→</span></Link><Link className="link-arrow" href="/contact">Visit the department <span aria-hidden="true">↗</span></Link>
              </div>
            </div>
            <aside className="factsheet" aria-label="Department at a glance">
              <div className="factsheet-head">
                <span className="mono">At a glance</span><span className="mono muted">2026 — 27</span>
              </div>
              <dl>
                <div>
                  <dt>Established</dt>
                  <dd>2001</dd>
                </div>
                <div>
                  <dt>Students</dt>
                  <dd>270</dd>
                </div>
                <div>
                  <dt>Faculty</dt>
                  <dd>10</dd>
                </div>
                <div>
                  <dt>Labs</dt>
                  <dd>2+</dd>
                </div>
                <div>
                  <dt>Degrees</dt>
                  <dd>04</dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>
      <section className="section section-alt" id="news">
        <div className="shell">
          <div className="section-head">
            <div>
              <p className="index">01 — Event</p>
              <h2 className="kinetic">
                <span className="k-word">Upcoming</span>{' '}<span className="k-word">events.</span>
              </h2>
            </div><Link className="link-arrow" href="/events">All events <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="event-grid">
            <article className="event-card" data-disclosure="">
              <div className="event-card-media">
                <img alt="2027 CS Tech Event" loading="lazy" src="/photo/events/tech.png" />
              </div>
              <div className="event-card-panel">
                <button aria-expanded="false" className="event-card-trigger" type="button">
                  <span>2027 CS Tech Event</span>{' '}<span aria-hidden="true" className="event-plus">+</span>
                </button>
                <div className="event-card-content" inert>
                  <p className="event-card-date">12 April 2027 · 09:00 - 17:00</p>
                  <p className="event-card-desc">The annual technical fest: coding contest, hackathon, robotics demos and a keynote on systems research. Open to all departments.</p><a className="event-card-cta" href="#">Learn More</a>
                </div>
              </div>
            </article>
            <article className="event-card" data-disclosure="">
              <div className="event-card-media">
                <img alt="AI and Data Science Workshop" loading="lazy" src="/photo/events/workshop.png" />
              </div>
              <div className="event-card-panel">
                <button aria-expanded="false" className="event-card-trigger" type="button">
                  <span>AI and Data Science Workshop</span>{' '}<span aria-hidden="true" className="event-plus">+</span>
                </button>
                <div className="event-card-content" inert>
                  <p className="event-card-date">08 januvary 2027 · 10:00 - 16:00</p>
                  <p className="event-card-desc">A hands-on session on training small models, cleaning datasets and deploying a simple classifier with Python.</p><a className="event-card-cta" href="#">Learn More</a>
                </div>
              </div>
            </article>
            <article className="event-card" data-disclosure="">
              <div className="event-card-media">
                <img className="winter-code-photo" alt="Winter of Code 2027" loading="lazy" src="/photo/events/wintercode.jpeg" />
              </div>
              <div className="event-card-panel">
                <button aria-expanded="false" className="event-card-trigger" type="button">
                  <span>Winter of Code 2027</span>{' '}<span aria-hidden="true" className="event-plus">+</span>
                </button>
                <div className="event-card-content" inert>
                  <p className="event-card-date">21 December 2027 · 09:30 - 13:30</p>
                  <p className="event-card-desc">A four-hour team contest in algorithms and debugging, with prizes for the fastest correct solutions.</p><a className="event-card-cta" href="#">Learn More</a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="section home-hod-section" id="hod">
        <div className="shell home-hod-grid">
          <div className="home-hod-photo">
            <img alt="Head of Department" loading="lazy" src="/photo/staff/princy.jpeg" />
          </div>
          <div className="home-hod-message">
            <p className="index">A MESSAGE FROM THE HOD</p>
            <h2 className="section-title">A note from the Head of Department.</h2>
            <blockquote>Welcome to the Department of Computer Science and Engineering!
              We believe that every student has the ability to learn, grow and achieve great things. Our department is committed to guiding students, building their confidence and helping them develop the knowledge and skills needed for a successful future.
              Together, let us create a place where learning inspires, ideas grow and success begins!</blockquote>
            <p className="hod-sign">Head of the Department · CSE</p><Link className="link-arrow" href="/about#hod">About the department <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
      <section className="section section-alt" id="research">
        <div className="shell">
          <div className="section-head">
            <div>
              <p className="index">03 — Project</p>
              <h2 className="kinetic">
                <span className="k-word">Best</span>{' '}<span className="k-word">student</span>{' '}<span className="k-word">projects.</span>
              </h2>
            </div><Link className="link-arrow" href="/research">All projects <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="project-grid">
            <article className="project-card">
              <div className="project-media" data-project-media="">
                <img alt="Circuit board close up" loading="lazy" src="/photo/project/kku.png" />
                <div aria-hidden="true" className="project-cursor">
                  <svg fill="none" height="31" viewBox="0 0 26 31" width="26" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" d="M21.993 14.425 2.549 2.935l4.444 23.108 4.653-10.002z" fill="#22c55e" fillRule="evenodd" stroke="#fff" strokeLinecap="square" strokeWidth="2"></path>
                  </svg><span>Campus Grid</span>
                </div>
              </div>
              <div className="project-info">
                <p className="card-code">Best Useless project · 2026</p>
                <h3>KKU — Kothuk Kudumba Unit</h3>
                <p className="project-desc">What if mosquitoes had Aadhaar cards, jobs, hospitals, blood banks and pensions? Sounds useless. That was exactly the point.</p>
                <p className="project-team">
                  <span>Team</span> Eswal Narayanan , Sreerag A S
                </p><a className="link-arrow" href="https://kothukkudumbaunit.vercel.app/">View project <span aria-hidden="true">↗</span></a>
              </div>
            </article>
            <article className="project-card">
              <div className="project-media" data-project-media="">
                <img alt="Campus Grid" loading="lazy" src="/photo/project/iedc.png" />
                <div aria-hidden="true" className="project-cursor">
                  <svg fill="none" height="31" viewBox="0 0 26 31" width="26" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" d="M21.993 14.425 2.549 2.935l4.444 23.108 4.653-10.002z" fill="#22c55e" fillRule="evenodd" stroke="#fff" strokeLinecap="square" strokeWidth="2"></path>
                  </svg><span>Pathfinder</span>
                </div>
              </div>
              <div className="project-info">
                <p className="card-code">Best project · 2026</p>
                <h3>IEDC Website</h3>
                <p className="project-desc">Management portal for my college's IEDC club, in day-to-day use by the team.</p>
                <p className="project-team">
                  <span>Team</span> Ajay Daniel trevor
                </p><a className="link-arrow" href="https://ietiedc.vercel.app/">View project <span aria-hidden="true">↗</span></a>
              </div>
            </article>
            <article className="project-card">
              <div className="project-media" data-project-media="">
                <img alt="Team working at desks" loading="lazy" src="/photo/project/janthu.png" />
                <div aria-hidden="true" className="project-cursor">
                  <svg fill="none" height="31" viewBox="0 0 26 31" width="26" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" d="M21.993 14.425 2.549 2.935l4.444 23.108 4.653-10.002z" fill="#22c55e" fillRule="evenodd" stroke="#fff" strokeLinecap="square" strokeWidth="2"></path>
                  </svg><span>Open Ledger</span>
                </div>
              </div>
              <div className="project-info">
                <p className="card-code">Top Useless Project · 2026</p>
                <h3>Janthusree</h3>
                <p className="project-desc">Jathusreee is a fun, imaginative concept for an AI-powered web app that translates human speech into authentic animal sounds while preserving the distinct tone, emotion, and cadence of the original voice..</p>
                <p className="project-team">
                  <span>Team</span> Nithya , Diya
                </p><a className="link-arrow" href="https://aanimal-communicator.netlify.app/">View project <span aria-hidden="true">↗</span></a>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="section section-alt" id="terminal">
        <div className="shell">
          <div className="section-head">
            <div>
              <p className="index">05 — Achievement</p>
              <h2 className="kinetic">
                <span className="k-word">Student</span>{' '}<span className="k-word">achievements.</span>
              </h2>
            </div><Link className="link-arrow" href="/achievements">All achievements <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="achievement-grid">
            <article className="achievement-card">
              <img alt="Students celebrating" loading="lazy" src="/photo/events/neurobots26.jpeg" />
              <p className="card-code">National Level · 2026</p>
              <h3>Neurobots '26 </h3>
              <p className="achievement-student">Ajay Danial · ESWAL NARAYANAN · Sreerag A s</p>
              <p className="achievement-desc">Basically an AI system that plants fake credentials and documents around a network, and the moment an attacker touches one, it knows.</p><a className="link-arrow" href="https://watchtower-hackathon.vercel.app"> Live Site <span aria-hidden="true">↗</span></a>
            </article>
            <article className="achievement-card">
              <img alt="Graduation ceremony" loading="lazy" src="/photo/achivement/2025IEE.jpeg" />
              <p className="card-code">Research · 2026</p>
              <h3>Paper published at AICTE</h3>
              <p className="achievement-student">Team of three</p>
              <p className="achievement-desc">There are three team submitted the paper in ICOTL 2026</p><a className="link-arrow" href="https://drive.google.com/file/d/1RfPQSZTzdY-o9We7MzTzNLYpr3h8Wy34/view?usp=drivesdk">Read paper <span aria-hidden="true">↗</span></a>
            </article>
            <article className="achievement-card">
              <img alt="Team with a trophy" loading="lazy" src="/photo/events/tech2026.jpeg" />
              <p className="card-code">Inter-college · 2026</p>
              <h3>Tech Festa 2026</h3>
              <p className="achievement-student">CS/IT students</p>
              <p className="achievement-desc">It where a compation take place internal in college with many games and events</p><a className="link-arrow" href="https://drive.google.com/file/d/101qnQMarvBf9_uIaZcpu58T1bOv3noiq/view?usp=drivesdk">Read story <span aria-hidden="true">↗</span></a>
            </article>
          </div>
        </div>
      </section>

    </main>
  );
}
