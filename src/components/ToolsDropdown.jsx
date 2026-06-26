import { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";

function ToolsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);
  const menuRef = useRef(null);
  const closeTimeoutRef = useRef(null);
  const isTouchRef = useRef(false);

  const dropdownItems = [
    { label: 'SiteVoice', href: 'https://inkaai.com/sitevoice' },
    { label: 'Comment Analyzer', href: 'https://inkaai.com/comment-analyzer' },
    { label: 'Reach Calculator', href: 'https://inkaai.com/reach-calculator' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  // Keyboard accessibility
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
      triggerRef.current?.focus();
      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
        setTimeout(() => {
          const items = menuRef.current?.querySelectorAll('a');
          items?.[0]?.focus();
        }, 50);
      } else {
        const items = Array.from(menuRef.current?.querySelectorAll('a') || []);
        const currentIndex = items.indexOf(document.activeElement);
        const nextIndex = (currentIndex + 1) % items.length;
        items[nextIndex]?.focus();
      }
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (isOpen) {
        const items = Array.from(menuRef.current?.querySelectorAll('a') || []);
        const currentIndex = items.indexOf(document.activeElement);
        const prevIndex = currentIndex <= 0 ? items.length - 1 : currentIndex - 1;
        items[prevIndex]?.focus();
      }
    }
  };

  const handleMouseEnter = () => {
    if (isTouchRef.current) return;
    if (window.matchMedia('(hover: hover)').matches) {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (isTouchRef.current) return;
    if (window.matchMedia('(hover: hover)').matches) {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
      closeTimeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 150); // 150ms close delay
    }
  };

  const handleTouchStart = () => {
    isTouchRef.current = true;
    setTimeout(() => {
      isTouchRef.current = false;
    }, 1000);
  };

  const handleToggle = (e) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
    >
      <button
        ref={triggerRef}
        type="button"
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className="font-button text-button uppercase tracking-widest text-body-text dark:text-muted-text hover:text-primary-blue transition-colors duration-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2 flex items-center gap-1"
      >
        <span>Tools</span>
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 text-body-text dark:text-muted-text hover:text-primary-blue ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        ref={menuRef}
        role="menu"
        className={`absolute left-0 top-full w-64 pt-2 transition-all duration-[250ms] ease-out origin-top-left ${
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto visible'
            : 'opacity-0 -translate-y-2 pointer-events-none invisible'
        }`}
      >
        <div className="rounded-xl bg-white dark:bg-dark-navy border border-slate-100 dark:border-slate-800/80 shadow-lg py-1">
          {dropdownItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              role="menuitem"
              onClick={() => setIsOpen(false)}
              className="block px-6 py-3.5 font-button text-button uppercase tracking-widest text-body-text dark:text-muted-text hover:text-primary-blue hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ToolsDropdown;
