import Link from 'next/link';

export const metadata = {
  "title": "Academics | CSE – IET Calicut",
  "description": "Academic programmes and learning resources for CSE at IET Calicut."
};

export default function AcademicsPage() {
  return (
    <main id="main">
      <section className="section content-page">
        <div className="shell">
          <p className="index">ACADEMICS</p>
          <h1 className="page-title">Learning for a changing world.</h1>
          <p className="page-lede">Explore programme information, curriculum documents, academic resources and learning support for Computer Science and Engineering students.</p>
          <p className="content-copy">Official syllabus, regulations, academic calendars and course materials should be published here after verification by the department.</p>
        </div>
      </section>
      <section className="section" id="programmes">
        <div className="shell">
          <div className="section-head">
            <div>
              <p className="index">01 — Academic Programmes</p>
              <h2 className="kinetic">Academic programmes and learning resources.</h2>
            </div><Link className="link-arrow" href="/about">Open the hub <span aria-hidden="true">↗</span></Link>
          </div>{/* Buttons only for now. Wire up each action when the resources are ready. */}
          <div className="learning-grid">
            <button className="learning-btn" data-learning="notes" type="button">
              <span className="learning-code">01 / Notes</span>{' '}<strong>Course notes</strong>{' '}<span className="learning-hint">Semester-wise notes <span aria-hidden="true">→</span></span>
            </button>
            <button className="learning-btn" data-learning="pyqs" type="button">
              <span className="learning-code">02 / PYQs</span>{' '}<strong>Previous papers</strong>{' '}<span className="learning-hint">Question papers <span aria-hidden="true">→</span></span>
            </button>
            <button className="learning-btn" data-learning="pdfs" type="button">
              <span className="learning-code">03 / PDFs</span>{' '}<strong>Reading list</strong>{' '}<span className="learning-hint">PDF resources <span aria-hidden="true">→</span></span>
            </button>
            <button className="learning-btn" data-learning="roadmap" type="button">
              <span className="learning-code">04 / Roadmap</span>{' '}<strong>Study roadmap</strong>{' '}<span className="learning-hint">Where to start <span aria-hidden="true">→</span></span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
