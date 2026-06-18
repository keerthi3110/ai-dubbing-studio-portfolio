import { images } from '../constants/images';
import { features, narrativeStats } from '../data/features';
import RevealOnScroll from './RevealOnScroll';

function Narrative() {
  return (
    <section className="py-section-gap bg-background overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid md:grid-cols-12 gap-gutter mb-24 items-start">
          <RevealOnScroll className="md:col-span-5">
            <h2 className="font-display-lg text-headline-lg text-charcoal-text italic leading-none mb-12">
              Architects of Narrative
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
              We don&apos;t just replace voices; we re-sculpt the auditory landscape of cinema. Our team blends
              linguistic mastery with algorithmic precision to ensure your story feels native in every language.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={200} className="md:col-span-7 flex justify-end">
            <div className="relative w-full max-w-xl">
              <div className="aspect-video bg-surface-container-highest border border-deep-forest/5 mb-8">
                <img
                  className="w-full h-full object-cover"
                  src={images.narrativeStudio.src}
                  alt={images.narrativeStudio.alt}
                  loading="lazy"
                />
              </div>
              <div className="flex gap-12 border-t border-deep-forest/10 pt-8">
                {narrativeStats.map((stat) => (
                  <div key={stat.label}>
                    <span className="font-label-caps text-label-caps text-cherry-accent block mb-2">{stat.label}</span>
                    <span className="font-body-md text-body-md">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
        <div className="grid md:grid-cols-3 gap-16 md:gap-gutter">
          {features.map((feature) => (
            <RevealOnScroll key={feature.number} delay={feature.delay} className="asymmetric-item">
              <div className="font-display-lg text-headline-md italic mb-6">{feature.number}</div>
              <h3 className="font-headline-md text-headline-md mb-4">{feature.title}</h3>
              <p className="font-body-md text-on-surface-variant">{feature.description}</p>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Narrative;
