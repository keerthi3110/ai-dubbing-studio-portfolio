function NavLink({ href, children, className = '' }) {
  return (
    <a
      href={href}
      className={`font-button text-button uppercase tracking-widest text-body-text dark:text-muted-text hover:text-primary-blue transition-colors duration-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2 ${className}`}
    >
      {children}
    </a>
  );
}

export default NavLink;
