import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="shell">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link className="brand" href="/">
              <img src="/photo/cse-logo.jpg" alt="CSE Department Logo" className="brand-logo-img" width="38" height="38" /><span className="brand-text">Computer Science<span className="brand-sub">Institute of Engineering and Technology, University of Calicut</span></span>
            </Link>
            <p>Department of Computer Science<br />Institute of Engineering and Technology, University of Calicut, Thenhipalam, Kerala, India<br />PIN 673636</p>
          </div>
          <div className="footer-col">
            <h4>Study</h4><Link href="/academics">B.Tech Computer Science and Engineering</Link><Link href="/academics">Academic Calendar</Link><Link href="/academics">Syllabus &amp; Curriculum</Link><Link href="/academics">Admissions</Link>
          </div>
          <div className="footer-col">
            <h4>Department</h4><Link href="/research">Research groups</Link><Link href="/faculty">Faculty</Link><Link href="/events">News &amp; events</Link><Link href="/contact">Visit us</Link>
          </div>
          <div className="footer-col">
            <h4>Contact</h4><a href="mailto:dcs.ietcu@gmail.com">dcs.ietcu@gmail.com</a><a href="tel:+000000000000">[Official phone number]</a><Link href="/contact">Campus map ↗</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© <span id="year">{new Date().getFullYear()}</span> Department of Computer Science, Institute of Engineering and Technology, University of Calicut</span><span>Official Department Website</span>
        </div>
      </div>
    </footer>
  );
}
