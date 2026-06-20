import { MdTranslate, MdAutoAwesome, MdLanguage } from 'react-icons/md';
import { images } from '../constants/images';
import { features, narrativeStats } from '../data/features';
import RevealOnScroll from './RevealOnScroll';

const featureIcons = {
  '01.': <MdTranslate className="text-primary-blue text-3xl mb-4" aria-hidden="true" />,
  '02.': <MdAutoAwesome className="text-primary-blue text-3xl mb-4" aria-hidden="true" />,
  '03.': <MdLanguage className="text-primary-blue text-3xl mb-4" aria-hidden="true" />,
};

function Narrative() {
  return (
    <section id="philosophy" className="py-section-gap bg-dark-navy text-white overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid md:grid-cols-12 gap-gutter mb-24 items-start">
          <RevealOnScroll className="md:col-span-5">
            <h2 className="font-display-lg text-headline-lg text-white italic leading-none mb-12">
              The Soul of Your Performance
            </h2>
            <p className="font-body-lg text-body-lg text-border-gray max-w-md">
              We believe translation shouldn&apos;t strip your personality. InkaAI preserves your emotional nuance, vocal cadence, and unique identity so you always sound like yourself in every regional language.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={200} className="md:col-span-7 flex justify-end">
            <div className="relative w-full max-w-xl">
              <div className="aspect-video bg-slate border border-white/5 mb-8">
                <img
                  className="w-full h-full object-cover"
                  src={images.narrativeStudio.src}
                  alt={images.narrativeStudio.alt}
                  loading="lazy"
                />
              </div>
              <div className="flex gap-12 border-t border-white/10 pt-8">
                {narrativeStats.map((stat) => (
                  <div key={stat.label}>
                    <span className="font-label-caps text-label-caps text-primary-blue block mb-2">{stat.label}</span>
                    <span className="font-body-md text-body-md text-white">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
        <div className="grid md:grid-cols-3 gap-16 md:gap-gutter">
          {features.map((feature) => (
            <RevealOnScroll key={feature.number} delay={feature.delay} className="asymmetric-item">
              <div className="flex flex-col items-start">
                {featureIcons[feature.number]}
                <div className="font-display-lg text-headline-md text-primary-blue italic mb-6">{feature.number}</div>
                <h3 className="font-headline-md text-headline-md text-white mb-4">{feature.title}</h3>
                <p className="font-body-md text-border-gray">{feature.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Narrative;
