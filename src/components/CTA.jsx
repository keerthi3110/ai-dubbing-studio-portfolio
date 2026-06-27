import { MdArrowForward } from 'react-icons/md';
import RevealOnScroll from './RevealOnScroll';

function CTA() {
  return (
    <section id="tools" className="py-section-gap bg-soft-blue text-center" aria-labelledby="cta-heading">
      <RevealOnScroll className="max-w-3xl mx-auto px-margin-mobile">
        <h2 id="cta-heading" className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-dark-navy mb-12 italic leading-tight">
          Ready to speak to 1.2 billion hearts?
        </h2>
        <a
          href="https://inkaai.com/studio"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block group relative overflow-hidden bg-primary-blue text-white px-12 py-6 font-button text-button uppercase tracking-widest transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2"
          aria-label="Visit the official InkaAI website to claim your voice demo"
        >
          <span className="relative z-10 flex items-center justify-center gap-2 mx-auto">
            Claim Your Voice Demo
            <MdArrowForward className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
          </span>
          <div className="absolute inset-0 bg-primary-hover-blue translate-y-full group-hover:translate-y-0 transition-transform duration-500 cubic-bezier(0.2, 1, 0.3, 1)" />
        </a>
      </RevealOnScroll>
    </section>
  );
}

export default CTA;
