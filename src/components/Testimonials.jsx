import { MdEast, MdFormatQuote, MdWest } from 'react-icons/md';
import { testimonials } from '../data/testimonials';
import RevealOnScroll from './RevealOnScroll';

function Testimonials() {
  return (
    <section className="py-section-gap bg-champagne-silk" aria-labelledby="testimonials-heading">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <RevealOnScroll className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="font-label-caps text-label-caps text-cherry-accent mb-6 block uppercase tracking-widest">
              Client Testimonials
            </span>
            <h2 id="testimonials-heading" className="font-display-lg text-headline-lg-mobile md:text-headline-lg italic">
              Perspectives from The Room
            </h2>
          </div>
          <div className="flex gap-4" role="group" aria-label="Testimonial navigation">
            <button
              type="button"
              className="w-16 h-16 border border-deep-forest/20 flex items-center justify-center hover:bg-deep-forest hover:text-warm-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cherry-accent focus-visible:ring-offset-2"
              aria-label="Previous testimonial"
            >
              <MdWest aria-hidden="true" />
            </button>
            <button
              type="button"
              className="w-16 h-16 border border-deep-forest/20 flex items-center justify-center hover:bg-deep-forest hover:text-warm-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cherry-accent focus-visible:ring-offset-2"
              aria-label="Next testimonial"
            >
              <MdEast aria-hidden="true" />
            </button>
          </div>
        </RevealOnScroll>
        <div className="grid md:grid-cols-3 gap-gutter">
          {testimonials.map((testimonial) => (
            <RevealOnScroll
              key={testimonial.name}
              delay={testimonial.delay}
              className={`${testimonial.bgClass} p-10 md:p-14 flex flex-col justify-between`}
            >
              <div>
                <MdFormatQuote
                  className={`${testimonial.quoteIconClass} text-5xl mb-8`}
                  aria-hidden="true"
                />
                <blockquote className="font-body-lg text-body-lg italic mb-12">&ldquo;{testimonial.quote}&rdquo;</blockquote>
              </div>
              <div>
                <div className={`font-label-caps text-label-caps ${testimonial.roleClass} uppercase mb-1`}>
                  {testimonial.role}
                </div>
                <div className="font-display-lg text-headline-md italic">{testimonial.name}</div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
