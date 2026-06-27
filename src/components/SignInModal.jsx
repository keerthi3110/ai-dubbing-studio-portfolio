import { useEffect, useState, useRef } from 'react';
import { MdClose } from 'react-icons/md';

function SignInModal({ isOpen, onClose }) {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [animate, setAnimate] = useState(false);
  const modalRef = useRef(null);

  // Synchronize render lifecycle and transition triggers
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      // Small timeout to allow element to render before trigger animation
      const timer = setTimeout(() => setAnimate(true), 10);
      return () => clearTimeout(timer);
    } else {
      setAnimate(false);
      // Wait for transitions to finish before unmounting (300ms)
      const timer = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Disable background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle closing on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Handle clicking outside modal card
  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  if (!shouldRender) return null;

  return (
    <div
      onClick={handleBackdropClick}
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-dark-navy/60 backdrop-blur-sm transition-opacity duration-300 ease-out ${
        animate ? 'opacity-100' : 'opacity-0'
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className={`bg-white dark:bg-slate border border-border-gray/30 dark:border-slate-800/80 rounded-xl shadow-2xl p-8 max-w-sm w-full mx-margin-mobile relative transform transition-all duration-300 ease-out ${
          animate ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 text-body-text dark:text-muted-text hover:text-dark-navy dark:hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue rounded-full p-1"
          aria-label="Close dialog"
        >
          <MdClose className="text-2xl" />
        </button>

        {/* Title */}
        <h2 
          id="modal-title"
          className="font-headline-md text-3xl text-dark-navy dark:text-white font-semibold mb-8 text-center"
        >
          Sign In
        </h2>

        {/* Sign In with Google Button */}
        <a
          href="https://inkaai.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center py-4 px-6 border border-border-gray/50 dark:border-slate-700 bg-white hover:bg-slate-50 dark:bg-white dark:hover:bg-slate-50 text-slate-800 transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2 rounded-xl mb-5 font-button text-[14px] font-semibold uppercase tracking-wider"
        >
          <svg className="w-5 h-5 mr-3 flex-shrink-0" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          <span>Sign in with Google</span>
        </a>

        {/* Helper Text */}
        <p className="font-body-md text-xs text-muted-text text-center leading-relaxed max-w-xs mx-auto">
          Sign in with Google to start translating.
        </p>
      </div>
    </div>
  );
}

export default SignInModal;
