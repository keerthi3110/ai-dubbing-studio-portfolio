import { MdArrowForward } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import NavLink from './NavLink';
import ToolsDropdown from './ToolsDropdown';
import { navLinks } from '../data/navigation';

function Navbar() {
  const location = useLocation();

  return (
    <nav
      className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md dark:bg-dark-navy/80 nav-blur"
      aria-label="Main navigation"
    >
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-6 max-w-container-max mx-auto">
        <div className="font-display-lg text-display-lg-mobile md:text-headline-md text-dark-navy dark:text-white italic">
          InkaAI
        </div>
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            if (link.label === 'TOOLS') {
              return <ToolsDropdown key={link.label} />;
            }

            const isActive = link.isRoute && location.pathname === link.href;

            if (link.isRoute) {
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`font-button text-button uppercase tracking-widest transition-colors duration-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2 ${
                    isActive
                      ? 'text-primary-blue dark:text-primary-blue'
                      : 'text-body-text dark:text-muted-text hover:text-primary-blue'
                  }`}
                >
                  {link.label}
                </Link>
              );
            }

            return (
              <NavLink key={link.label} href={link.href}>
                {link.label}
              </NavLink>
            );
          })}
        </div>
        <button
          type="button"
          className="group/nav-btn font-button text-button uppercase tracking-widest bg-primary-blue text-white px-8 py-3 hover:bg-primary-hover-blue transition-colors duration-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2 flex items-center gap-2"
          aria-label="Get started with InkaAI"
        >
          <span>Get Started</span>
          <MdArrowForward className="text-base group-hover/nav-btn:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
