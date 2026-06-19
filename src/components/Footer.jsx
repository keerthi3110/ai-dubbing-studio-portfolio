import {
  footerCompanyLinks,
  footerConnectLinks,
  footerNavigationLinks,
} from '../data/navigation';

function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-border-gray hover:text-primary-blue transition-colors duration-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2 focus-visible:ring-offset-dark-navy"
    >
      {children}
    </a>
  );
}

function FooterLinkList({ links }) {
  return (
    <ul className="space-y-4">
      {links.map((link) => (
        <li key={link.label}>
          <FooterLink href={link.href}>{link.label}</FooterLink>
        </li>
      ))}
    </ul>
  );
}

function Footer() {
  return (
    <footer className="w-full pt-section-gap pb-12 bg-dark-navy border-t border-slate-800">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="md:col-span-5">
          <div className="font-display-lg text-headline-md text-primary-blue italic mb-8">Inkaai</div>
          <p className="text-border-gray font-body-md max-w-xs mb-8">
            Precision Dubbing for Global Cinema. Where technology meets the soul of the screen.
          </p>
        </div>
        <div className="md:col-span-2">
          <h4 className="font-label-caps text-label-caps text-white mb-6 uppercase tracking-widest">Navigation</h4>
          <FooterLinkList links={footerNavigationLinks} />
        </div>
        <div className="md:col-span-2">
          <h4 className="font-label-caps text-label-caps text-white mb-6 uppercase tracking-widest">Company</h4>
          <FooterLinkList links={footerCompanyLinks} />
        </div>
        <div className="md:col-span-3">
          <h4 className="font-label-caps text-label-caps text-white mb-6 uppercase tracking-widest">Connect</h4>
          <ul className="space-y-4 mb-12">
            {footerConnectLinks.map((link) => (
              <li key={link.label}>
                <FooterLink href={link.href}>{link.label}</FooterLink>
              </li>
            ))}
          </ul>
          <div className="text-muted-text font-body-md">
            &copy; 2024 Inkaai. Precision Dubbing for Global Cinema.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
