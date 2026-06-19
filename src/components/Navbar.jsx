import NavLink from './NavLink';
import { navLinks } from '../data/navigation';

function Navbar() {
  return (
    <nav
      className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md dark:bg-dark-navy/80 nav-blur"
      aria-label="Main navigation"
    >
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-6 max-w-container-max mx-auto">
        <div className="font-display-lg text-display-lg-mobile md:text-headline-md text-dark-navy dark:text-white italic">
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
          className="font-button text-button uppercase tracking-widest bg-primary-blue text-white px-8 py-3 hover:bg-primary-hover-blue transition-colors duration-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2"
          aria-label="Get started with Inkaai"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
