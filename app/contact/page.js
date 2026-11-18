import Link from 'next/link';

export const metadata = {
  "title": "Contact | CSE – IET Calicut",
  "description": "Contact the Department of Computer Science and Engineering, IET Calicut."
};

export default function ContactPage() {
  return (
    <main id="main">
      <section className="section content-page">
        <div className="shell">
          <p className="index">CONTACT</p>
          <h1 className="page-title">Connect with the department.</h1>
          <p className="page-lede">For academic enquiries, institutional communication and collaboration, contact the Department of Computer Science and Engineering, IET Calicut.</p>
          <div className="simple-grid">
            <article className="simple-card">
              <h2>Address</h2>
              <p>Institute of Engineering and Technology<br />University of Calicut<br />Thenhipalam, Kerala, India</p>
            </article>
            <article className="simple-card">
              <h2>Department contact</h2>
              <p>dcs.ietcu@gmail.com<br />iethodcs@uoc.ac.in</p>
            </article>
          </div>
        </div>
      </section>
      <section className="section section-alt" id="join">
        <div className="shell">
          <p className="index">CONNECT WITH CSE</p>
          <h2 className="section-title">Join our academic community.</h2>
          <p className="page-lede">Students, prospective applicants, alumni and industry partners can connect with the department through the appropriate official channels.</p>
          <div className="simple-grid">
            <article className="simple-card">
              <h2>Prospective students</h2>
              <p>Explore the academic programme, admission information and facilities of the department.</p><Link className="link-arrow" href="/academics">Explore academics ↗</Link>
            </article>
            <article className="simple-card">
              <h2>Alumni &amp; collaborators</h2>
              <p>For alumni engagement, academic collaboration and institutional enquiries, contact the department.</p><a className="link-arrow" href="mailto:dcs.ietcu@gmail.com">Contact the department ↗</a>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
