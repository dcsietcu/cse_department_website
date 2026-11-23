import Link from 'next/link';

export const metadata = {
  "title": "Faculty | CSE – IET Calicut",
  "description": "Faculty members of the Department of Computer Science and Engineering, IET Calicut."
};

export default function FacultyPage() {
  return (
    <main id="main">
      <section className="section content-page">
        <div className="shell">
          <p className="index">PEOPLE · FACULTY</p>
          <h1 className="page-title">Faculty Members.</h1>
          <p className="page-lede">Meet the faculty members who guide teaching, learning, research and academic development in the department.</p>
          <div className="profile-grid">
            <article className="profile-card">
              <img alt="Princy N K" loading="lazy" src="/photo/staff/princy.jpeg" />
              <h3>Head of the Department</h3>
              <p>PRINCY N K · ASSISTANT PROFESSOR</p>
            </article>
            <article className="profile-card">
              <img alt="Jessy K" loading="lazy" src="/photo/staff/jessy.jpeg" />
              <h3>Faculty Member</h3>
              <p>JESSY K · ASSISTANT PROFESSOR</p>
            </article>
            <article className="profile-card">
              <img alt="Arya A Surya" loading="lazy" src="/photo/staff/arya.jpeg" />
              <h3>Faculty Member</h3>
              <p>ARYA A SURYA · ASSISTANT PROFESSOR</p>
            </article>
            <article className="profile-card">
              <img alt="RUBY FATHIMA AC" loading="lazy" src="/photo/staff/ruby.jpeg" />
              <h3>Faculty Member</h3>
              <p>FATHIMA MURSHIDA K · ASSISTANT PROFESSOR</p>
            </article>
            <article className="profile-card">
              <img alt="Fathima Murshida K" loading="lazy" src="/photo/staff/murshida.jpeg" />
              <h3>Faculty Member</h3>
              <p>FATHIMA MURSHIDA K · ASSISTANT PROFESSOR</p>
            </article>
            <article className="profile-card">
              <img alt="Dinulal P" loading="lazy" src="/photo/staff/dinubro.jpeg" />
              <h3>Faculty Member</h3>
              <p>DINULAL P· ASSISTANT PROFESSOR</p>
            </article>
            <article className="profile-card">
              <img alt="Aswani N M" loading="lazy" src="/photo/staff/aswni.jpeg" />
              <h3>Faculty Member</h3>
              <p>ASWANI N M · ASSISTANT PROFESSOR</p>
            </article>
            <article className="profile-card">
              <img alt="Ancy P" loading="lazy" src="/photo/staff/labmain.jpeg" />
              <h3>Faculty Member</h3>
              <p>ANCY P · INSTRUCTOR</p>
            </article>
            <article className="profile-card">
              <img alt="Dhanya P S" loading="lazy" src="/photo/staff/lab1.jpeg" />
              <h3>Faculty Member</h3>
              <p>DHANYA P S · INSTRUCTOR</p>
            </article>
            <article className="profile-card">
              <img alt="Subhashini" loading="lazy" src="/photo/staff/lab2.jpeg" />
              <h3>Faculty Member</h3>
              <p>SUBHASHINI · INSTRUCTOR</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
