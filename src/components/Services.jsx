import { MdArrowForward } from 'react-icons/md';
import { services } from '../data/services';
import RevealOnScroll from './RevealOnScroll';

function Services() {
  return (
    <section className="py-section-gap bg-ink-black text-warm-white" aria-labelledby="services-heading">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid md:grid-cols-12 gap-gutter items-center mb-32">
          <RevealOnScroll className="md:col-span-7">
            <span className="font-label-caps text-label-caps text-matcha-bg mb-6 block uppercase tracking-widest">
              Our Ecosystem
            </span>
            <h2 id="services-heading" className="font-display-lg text-headline-lg-mobile md:text-headline-lg leading-tight">
              Elevating the Medium of Global Expression
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={200} className="md:col-span-5 md:pl-12">
            <p className="font-body-lg text-surface-variant">
              Beyond dubbing, we orchestrate the entire sensory experience of your IP. Precision, scale, and
              soul—delivered through three core pillars of studio excellence.
            </p>
          </RevealOnScroll>
        </div>
        <div className="space-y-0">
          {services.map((service) => (
            <RevealOnScroll
              key={service.title}
              delay={service.delay}
              className={`group border-t border-warm-white/10 py-12 hover:bg-deep-cabernet/20 transition-colors duration-500${service.hasBottomBorder ? ' border-b' : ''}`}
            >
              <div className="grid md:grid-cols-12 items-center gap-gutter">
                <div className="md:col-span-1 font-display-lg text-headline-md text-warm-white/20 italic group-hover:text-matcha-bg transition-colors">
                  {service.numeral}
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-headline-md text-headline-md">{service.title}</h3>
                </div>
                <div className="md:col-span-5">
                  <p className="font-body-md text-surface-variant">{service.description}</p>
                </div>
                <div className="md:col-span-2 text-right hidden md:block">
                  <MdArrowForward
                    className="inline text-4xl text-warm-white/20 group-hover:text-warm-white transition-all transform group-hover:translate-x-2"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
