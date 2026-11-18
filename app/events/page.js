import Link from 'next/link';

export const metadata = {
  "title": "Events | CSE – IET Calicut",
  "description": "Department events, workshops and activities at IET Calicut."
};

export default function EventsPage() {
  return (
    <main id="main">
      <section className="section content-page">
        <div className="shell">
          <p className="index">NEWS &amp; EVENTS</p>
          <h1 className="page-title">Learning beyond the classroom.</h1>
          <p className="page-lede">Find departmental seminars, workshops, conferences, technical activities and student development programmes.</p>
        </div>
      </section>
      <section className="section section-alt" id="news">
        <div className="shell">
          <div className="section-head">
            <div>
              <p className="index">01 — Department Events</p>
              <h2 className="kinetic">Events, workshops and activities.</h2>
            </div><a className="link-arrow" href="#news">All events <span aria-hidden="true">↗</span></a>
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
                  <p className="event-card-desc">The annual technical fest: coding contest, hackathon, robotics demos and a keynote on systems research. Open to all departments.</p><Link className="event-card-cta" href="/contact">Learn More</Link>
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
                  <p className="event-card-date">08 March 2027 · 10:00 - 16:00</p>
                  <p className="event-card-desc">A hands-on session on training small models, cleaning datasets and deploying a simple classifier with Python.</p><Link className="event-card-cta" href="/contact">Learn More</Link>
                </div>
              </div>
            </article>
            <article className="event-card" data-disclosure="">
              <div className="event-card-media">
                <img alt="Winter of Code 2027" loading="lazy" src="/photo/events/wintercode.jpeg" />
              </div>
              <div className="event-card-panel">
                <button aria-expanded="false" className="event-card-trigger" type="button">
                  <span>Winter of Code 2027</span>{' '}<span aria-hidden="true" className="event-plus">+</span>
                </button>
                <div className="event-card-content" inert>
                  <p className="event-card-date">21 December 2027 · 09:30 - 13:30</p>
                  <p className="event-card-desc">A four-hour team contest in algorithms and debugging, with prizes for the fastest correct solutions.</p><Link className="event-card-cta" href="/contact">Learn More</Link>
                </div>
              </div>
            </article>
            <article className="event-card" data-disclosure="">
              <div className="event-card-media">
                <img alt="Code sprint teams" loading="lazy" src="/photo/events/tech2026.jpeg" />
              </div>
              <div className="event-card-panel">
                <button aria-expanded="false" className="event-card-trigger" type="button">
                  <span>Tech Fiesta 2026</span>{' '}<span aria-hidden="true" className="event-plus">+</span>
                </button>
                <div className="event-card-content" inert>
                  <p className="event-card-date">26 March 2025 · 09:30 - 13:30</p>
                  <p className="event-card-desc">Its is the 6ll department team work to make play type</p>.
<Link className="event-card-cta" href="/contact">Learn More</Link>
                </div>
              </div>
            </article>
            <article className="event-card" data-disclosure="">
              <div className="event-card-media">
                <img alt="Code sprint teams" loading="lazy" src="/photo/events/Aipowercs.jpeg" />
              </div>
              <div className="event-card-panel">
                <button aria-expanded="false" className="event-card-trigger" type="button">
                  <span>Build carrer in AI powered cyber Secrity</span>{' '}<span aria-hidden="true" className="event-plus">+</span>
                </button>
                <div className="event-card-content" inert>
                  <p className="event-card-date">05 MARCH 2026 · 10:30 - 12:30</p>
                  <p className="event-card-desc">Indroduction about the AI and CYber secrity and other details.</p><Link className="event-card-cta" href="/contact">Learn More</Link>
                </div>
              </div>
            </article>
            <article className="event-card" data-disclosure="">
              <div className="event-card-media">
                <img alt="Code sprint teams" loading="lazy" src="/photo/events/dSwork.jpeg" />
              </div>
              <div className="event-card-panel">
                <button aria-expanded="false" className="event-card-trigger" type="button">
                  <span>DATA SCIENCE WITH AI TOOLS</span>{' '}<span aria-hidden="true" className="event-plus">+</span>
                </button>
                <div className="event-card-content" inert>
                  <p className="event-card-date">12 March 2026 · 10:00 - 12:30</p>
                  <p className="event-card-desc">Basic fromat and working of each libraries and how they use.</p><Link className="event-card-cta" href="/contact">Learn More</Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
