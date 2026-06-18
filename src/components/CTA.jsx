import RevealOnScroll from './RevealOnScroll';

function CTA() {
  return (
    <section className="py-section-gap bg-background text-center" aria-labelledby="cta-heading">
      <RevealOnScroll className="max-w-3xl mx-auto px-margin-mobile">
        <h2 id="cta-heading" className="font-display-lg text-headline-lg-mobile md:text-headline-lg mb-12 italic leading-tight">
          Ready to transcend the linguistic frame?
        </h2>
        <button
          type="button"
          className="group relative overflow-hidden bg-cherry-accent text-warm-white px-12 py-6 font-button text-button uppercase tracking-widest transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cherry-accent focus-visible:ring-offset-2"
          aria-label="Start your production with Vox and Vision"
        >
          <span className="relative z-10">Start Your Production</span>
          <div className="absolute inset-0 bg-deep-forest translate-y-full group-hover:translate-y-0 transition-transform duration-500 cubic-bezier(0.2, 1, 0.3, 1)" />
        </button>
      </RevealOnScroll>
    </section>
  );
}

export default CTA;
