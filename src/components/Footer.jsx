import {
  footerCompanyLinks,
  footerConnectLinks,
  footerNavigationLinks,
} from '../data/navigation';

function FooterLink({ href, children }) {
  const formattedChildren = typeof children === 'string' && children === children.toUpperCase()
    ? children.charAt(0).toUpperCase() + children.slice(1).toLowerCase()
    : children;

  return (
    <a
      href={href}
      className="font-body-md text-[16px] font-medium leading-[1.5] text-border-gray hover:text-primary-blue transition-colors duration-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2 focus-visible:ring-offset-dark-navy"
    >
      {formattedChildren}
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
    <footer id="contact" className="w-full pt-section-gap pb-12 bg-dark-navy border-t border-slate-800">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="md:col-span-5">
          <div className="font-display-lg text-headline-md text-primary-blue italic mb-8">InkaAI</div>
          <p className="text-border-gray font-body-md max-w-xs mb-8">
            Scale your stories across India&apos;s local languages. Preserving emotional resonance, vocal signatures, and human connection.
          </p>
        </div>
        <div className="md:col-span-2">
          <h4 className="font-label-caps text-[18px] font-semibold text-white mb-6 tracking-wide">Navigation</h4>
          <FooterLinkList links={footerNavigationLinks} />
        </div>
        <div className="md:col-span-2">
          <h4 className="font-label-caps text-[18px] font-semibold text-white mb-6 tracking-wide">Company</h4>
          <FooterLinkList links={footerCompanyLinks} />
        </div>
        <div className="md:col-span-3">
          <h4 className="font-label-caps text-[18px] font-semibold text-white mb-6 tracking-wide">Connect</h4>
          <ul className="space-y-4 mb-12">
            {footerConnectLinks.map((link) => (
              <li key={link.label}>
                <FooterLink href={link.href}>{link.label}</FooterLink>
              </li>
            ))}
          </ul>
          <div className="text-muted-text font-body-md text-[13px] leading-[1.4]">
            &copy; 2026 InkaAI. Voices without borders.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
