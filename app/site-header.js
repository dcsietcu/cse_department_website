'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/research', 'Research & Projects'],
  ['/contact', 'Contact'],
  ['/contact#join', 'Join Now'],
];

export default function SiteHeader() {
  const pathname = usePathname();
  const activePath = ['/', '/research', '/contact'].includes(pathname) ? pathname : '/about';

  const handleQuickView = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('toggle-quick-view'));
    }
  };

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <div className="header-left">
          <button
            type="button"
            className="quick-view-hamburger"
            onClick={handleQuickView}
            aria-label="Open Quick View"
            title="Quick View"
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
          <Link className="brand" href="/">
            <img src="/photo/cse-logo.jpg" alt="CSE Department Logo" className="brand-logo-img" width="38" height="38" />
            <span className="brand-text">Computer Science<span className="brand-sub">IET Calicut</span></span>
          </Link>
        </div>
        <nav aria-label="Primary" className="nav" id="primary-nav">
          {links.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? 'page' : undefined}
              className={activePath === href ? 'is-active' : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <button aria-controls="primary-nav" aria-expanded="false" className="nav-toggle" type="button">Menu</button>
        </div>
      </div>
    </header>
  );
}
