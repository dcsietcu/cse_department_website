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

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/">
          <span aria-hidden="true" className="brand-mark"><i /><i /><i /><i /></span>
          <span className="brand-text">Computer Science<span className="brand-sub">IET Calicut</span></span>
        </Link>
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
