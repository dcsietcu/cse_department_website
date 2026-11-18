import Link from 'next/link';

export const metadata = {
  "title": "About the Department | CSE – IET Calicut",
  "description": "About the Department of Computer Science and Engineering, IET Calicut."
};

export default function AboutPage() {
  return (
    <main id="main">
      <section className="section content-page">
        <div className="shell">
          <p className="index">01 — Department Profile</p>
          <h1 className="page-title">About the Department.</h1>
          <p className="page-lede">The Department of Computer Science and Engineering at the Institute of Engineering and Technology, University of Calicut, is committed to quality technical education and the development of competent engineering professionals.</p>
          <div className="content-copy">
            <p>The department brings together dedicated faculty members, well-established laboratories with internet facilities and an enthusiastic student community. Its academic programmes prepare students for effective participation in computer- and systems-related professions.</p>
            <p>Through theoretical foundations, practical learning, projects and technical activities, students are encouraged to develop current skills, problem-solving abilities and the adaptability required throughout their careers.</p>
          </div>
        </div>
      </section>
      <section className="section section-alt mission-vision-section" id="vision">
        <div className="shell">
          <p className="index">02 — Our direction</p>
          <h2 className="section-title">Mission &amp; Vision.</h2>
          <div className="mission-vision-grid">
            <article className="mission-vision-card">
              <p className="index">MISSION</p>
              <h3>What we strive to do</h3>
              <p>To impart high quality education and spawn eminent graduates to carry out leading edge research in the discipline of CS.</p>
            </article>
            <article className="mission-vision-card">
              <p className="index">VISION</p>
              <h3>What we aspire to become</h3>
              <p>To become a leading centre of excellence for quality education, advance research and development in the field of Information Technology for self-reliant professionals.</p>
            </article>
          </div>
        </div>
      </section>
      <section className="section hod-section" id="hod">
        <div className="shell hod-grid">
          <div className="hod-photo">
            <img alt="Head of Department" loading="lazy" src="/photo/staff/princy.jpeg" />
          </div>
          <div className="hod-message">
            <p className="index">From the HOD</p>
            <h2 className="kinetic">
              <span className="k-word">A</span>{' '}<span className="k-word">note</span>{' '}<span className="k-word">from</span>{' '}<span className="k-word">the</span>{' '}<span className="k-word">head</span>{' '}<span className="k-word">of</span>{' '}<span className="k-word">department.</span>
            </h2>
            <blockquote>Welcome to the Department of Computer Science and Engineering!
We believe that every student has the ability to learn, grow and achieve great things. Our department is committed to guiding students, building their confidence and helping them develop the knowledge and skills needed for a successful future.
Together, let us create a place where learning inspires, ideas grow and success begins!</blockquote>
            <p className="hod-sign">Head of the Department · CSE</p>
          </div>
        </div>
      </section>
      <section className="section section-alt">
        <div className="shell">
          <p className="index">EXPLORE THE DEPARTMENT</p>
          <h2 className="section-title">Discover more about CSE.</h2>
          <div className="simple-grid">
            <article className="simple-card">
              <h2>Academics &amp; facilities</h2>
              <p>Programme information, curriculum, laboratories and learning resources.</p><Link className="link-arrow" href="/academics">Explore academics ↗</Link>
            </article>
            <article className="simple-card">
              <h2>Faculty &amp; staff</h2>
              <p>Meet the academic team supporting teaching, research and student development.</p><Link className="link-arrow" href="/faculty">Meet the faculty ↗</Link>
            </article>
            <article className="simple-card">
              <h2>Events &amp; achievements</h2>
              <p>Department activities, recognitions and student accomplishments.</p><Link className="link-arrow" href="/events">Explore activities ↗</Link>
            </article>
            <article className="simple-card">
              <h2>Placements &amp; alumni</h2>
              <p>Career outcomes, alumni stories and professional connections.</p><Link className="link-arrow" href="/placements-alumni">Explore careers ↗</Link>
            </article>
            <article className="simple-card">
              <h2>Department gallery</h2>
              <p>Photographs from academic, technical and departmental activities.</p><Link className="link-arrow" href="/gallery">View gallery ↗</Link>
            </article>
            <article className="simple-card">
              <h2>Achievements</h2>
              <p>Recognising the accomplishments of students and faculty.</p><Link className="link-arrow" href="/achievements">View achievements ↗</Link>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
