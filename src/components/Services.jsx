import { MdArrowForward, MdMovie, MdSportsEsports, MdSettingsVoice } from 'react-icons/md';
import { services } from '../data/services';
import RevealOnScroll from './RevealOnScroll';

const serviceIcons = {
  'I.': <MdMovie className="text-3xl text-primary-blue mr-4 flex-shrink-0" aria-hidden="true" />,
  'II.': <MdSportsEsports className="text-3xl text-primary-blue mr-4 flex-shrink-0" aria-hidden="true" />,
  'III.': <MdSettingsVoice className="text-3xl text-primary-blue mr-4 flex-shrink-0" aria-hidden="true" />,
};

function Services() {
  return (
    <section className="py-section-gap bg-white text-dark-navy" aria-labelledby="services-heading">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid md:grid-cols-12 gap-gutter items-center mb-32">
          <RevealOnScroll className="md:col-span-7">
            <span className="font-label-caps text-label-caps text-primary-blue mb-6 block uppercase tracking-widest">
              Our Ecosystem
            </span>
            <h2 id="services-heading" className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-dark-navy leading-tight">
              Elevating the Medium of Global Expression
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={200} className="md:col-span-5 md:pl-12">
            <p className="font-body-lg text-body-text">
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
              className={`group border-t border-border-gray py-12 hover:bg-soft-blue/30 transition-colors duration-500${service.hasBottomBorder ? ' border-b border-border-gray' : ''}`}
            >
              <div className="grid md:grid-cols-12 items-center gap-gutter">
                <div className="md:col-span-1 font-display-lg text-headline-md text-muted-text/30 italic group-hover:text-primary-blue transition-colors">
                  {service.numeral}
                </div>
                <div className="md:col-span-4 flex items-center">
                  {serviceIcons[service.numeral]}
                  <h3 className="font-headline-md text-headline-md text-dark-navy">{service.title}</h3>
                </div>
                <div className="md:col-span-5">
                  <p className="font-body-md text-body-text">{service.description}</p>
                </div>
                <div className="md:col-span-2 text-right hidden md:block">
                  <MdArrowForward
                    className="inline text-4xl text-muted-text/30 group-hover:text-primary-blue transition-all transform group-hover:translate-x-2"
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
