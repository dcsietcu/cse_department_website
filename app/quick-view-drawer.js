'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function QuickViewDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') setIsOpen(false);
    }
    function onToggle() {
      setIsOpen((prev) => !prev);
    }
    function onOpen() {
      setIsOpen(true);
    }

    window.addEventListener('toggle-quick-view', onToggle);
    window.addEventListener('open-quick-view', onOpen);
    window.addEventListener('keydown', onKeyDown);

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('toggle-quick-view', onToggle);
      window.removeEventListener('open-quick-view', onOpen);
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="quick-view-backdrop"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Side Quick View Drawer sliding from left */}
      <aside
        className={`quick-view-panel ${isOpen ? 'is-open' : ''}`}
        aria-label="Quick View Panel"
        aria-hidden={!isOpen}
      >
        <div className="qv-inner">
          <div className="qv-head">
            <div className="qv-brand">
              <img src="/photo/cse-logo.jpg" alt="CSE Department Logo" className="qv-logo-img" width="36" height="36" />
              <div>
                <p className="qv-title">Computer Science</p>
                <p className="qv-sub">IET Calicut · Quick View</p>
              </div>
            </div>
            <button
              type="button"
              className="qv-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close Quick View"
            >
              ✕
            </button>
          </div>

          <div className="qv-body">
            <div className="qv-section">
              <p className="qv-label">Department</p>
              <p className="qv-address">
                Department of Computer Science<br />
                Institute of Engineering and Technology, University of Calicut,<br />
                Thenhipalam, Kerala, India<br />
                PIN 673636
              </p>
            </div>

            <div className="qv-section">
              <p className="qv-label">Study</p>
              <ul className="qv-links">
                <li><Link href="/academics" onClick={() => setIsOpen(false)}>B.Tech Computer Science and Engineering</Link></li>
                <li><Link href="/academics" onClick={() => setIsOpen(false)}>Academic Calendar</Link></li>
                <li><Link href="/academics" onClick={() => setIsOpen(false)}>Syllabus &amp; Curriculum</Link></li>
                <li><Link href="/academics" onClick={() => setIsOpen(false)}>Admissions</Link></li>
              </ul>
            </div>

            <div className="qv-section">
              <p className="qv-label">Department</p>
              <ul className="qv-links">
                <li><Link href="/research" onClick={() => setIsOpen(false)}>Research groups</Link></li>
                <li><Link href="/faculty" onClick={() => setIsOpen(false)}>Faculty</Link></li>
                <li><Link href="/events" onClick={() => setIsOpen(false)}>News &amp; events</Link></li>
                <li><Link href="/contact" onClick={() => setIsOpen(false)}>Visit us</Link></li>
              </ul>
            </div>

            <div className="qv-section">
              <p className="qv-label">Contact</p>
              <ul className="qv-links">
                <li><a href="mailto:dcs.ietcu@gmail.com">dcs.ietcu@gmail.com</a></li>
                <li><a href="tel:+000000000000">[Official phone number]</a></li>
                <li><Link href="/contact" onClick={() => setIsOpen(false)}>Campus map ↗</Link></li>
              </ul>
            </div>
          </div>

          <div className="qv-foot">
            <p>© {new Date().getFullYear()} CSE, IET Calicut</p>
            <p className="qv-foot-tag">Official Department Website</p>
          </div>
        </div>
      </aside>
    </>
  );
}
