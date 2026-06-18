import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

function RevealOnScroll({ children, delay = 0, as: Component = 'div', className = '' }) {
  const { ref, className: revealClassName, style } = useRevealOnScroll(delay);

  return (
    <Component ref={ref} className={`${revealClassName} ${className}`.trim()} style={style}>
      {children}
    </Component>
  );
}

export default RevealOnScroll;
