import { MdEast, MdFormatQuote, MdWest } from 'react-icons/md';
import { testimonials } from '../data/testimonials';
import RevealOnScroll from './RevealOnScroll';

function Testimonials() {
  return (
    <section className="py-section-gap bg-light-gray" aria-labelledby="testimonials-heading">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <RevealOnScroll className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="font-label-caps text-label-caps text-primary-blue mb-6 block uppercase tracking-widest">
              Creator Success Stories
            </span>
            <h2 id="testimonials-heading" className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-dark-navy italic">
              Stories of Growth & Connection
            </h2>
          </div>
          <div className="flex gap-4" role="group" aria-label="Testimonial navigation">
            <button
              type="button"
              className="w-16 h-16 border border-border-gray flex items-center justify-center text-dark-navy hover:bg-primary-blue hover:text-white hover:border-primary-blue transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2"
              aria-label="Previous testimonial"
            >
              <MdWest aria-hidden="true" />
            </button>
            <button
              type="button"
              className="w-16 h-16 border border-border-gray flex items-center justify-center text-dark-navy hover:bg-primary-blue hover:text-white hover:border-primary-blue transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2"
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
                <div className="flex justify-between items-start mb-8">
                  <MdFormatQuote
                    className={`${testimonial.quoteIconClass} text-5xl`}
                    aria-hidden="true"
                  />
                  {testimonial.category && (
                    <span className={`font-label-caps text-[10px] tracking-widest px-2.5 py-1 ${testimonial.bgClass.includes('bg-white') ? 'bg-primary-blue/5' : 'bg-white/20'} ${testimonial.roleClass} font-semibold uppercase`}>
                      {testimonial.category}
                    </span>
                  )}
                </div>
                <blockquote className="font-body-lg text-body-lg mb-12">
                  {testimonial.headline && (
                    <strong className="block not-italic font-bold text-dark-navy mb-3">&ldquo;{testimonial.headline}&rdquo;</strong>
                  )}
                  <span className="italic block text-body-text/80">&ldquo;{testimonial.quote}&rdquo;</span>
                </blockquote>
              </div>
              <div>
                {testimonial.rating && (
                  <div className={`flex gap-[2px] mb-3 ${testimonial.roleClass} text-sm`} aria-label={`${testimonial.rating} star rating`}>
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                )}
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
