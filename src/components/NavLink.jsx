function NavLink({ href, children, className = '' }) {
  return (
    <a
      href={href}
      className={`font-button text-button uppercase tracking-widest text-on-surface-variant hover:text-cherry-accent transition-colors duration-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cherry-accent focus-visible:ring-offset-2 ${className}`}
    >
      {children}
    </a>
  );
}

export default NavLink;
