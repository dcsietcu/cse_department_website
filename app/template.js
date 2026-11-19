import SiteFooter from './site-footer';
import SiteHeader from './site-header';
import SiteInteractions from './site-interactions';
import QuickViewDrawer from './quick-view-drawer';

export default function SiteTemplate({ children }) {
  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <div className="site">
        <a className="skip-link" href="#main">Skip to content</a>
        <div className="scroll-grid" aria-hidden="true" />
        <div className="theme-wipe" id="theme-wipe" aria-hidden="true">
          <div className="theme-wipe-layer" />
          <div className="theme-wipe-slider" />
        </div>
        <SiteHeader />
        {children}
        <SiteFooter />
      </div>
      <QuickViewDrawer />
      <SiteInteractions />
    </>
  );
}
