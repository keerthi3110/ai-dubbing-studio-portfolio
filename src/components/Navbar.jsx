import NavLink from './NavLink';
import { navLinks } from '../data/navigation';

function Navbar() {
  return (
    <nav
      className="fixed top-0 w-full z-50 bg-matcha-bg/80 backdrop-blur-md dark:bg-deep-forest/80 nav-blur"
      aria-label="Main navigation"
    >
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-6 max-w-container-max mx-auto">
        <div className="font-display-lg text-display-lg-mobile md:text-headline-md text-charcoal-text dark:text-warm-white italic">
          Inkaai
        </div>
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>
        <button
          type="button"
          className="font-button text-button uppercase tracking-widest bg-cherry-accent text-warm-white px-8 py-3 hover:opacity-70 transition-opacity duration-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-cherry-accent focus-visible:ring-offset-2"
          aria-label="Get started with Inkaai"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
