import { useState } from 'react';
import { MdMovie, MdSettingsVoice, MdFace, MdLanguage } from 'react-icons/md';
import { servicesData } from '../data/services';
import RevealOnScroll from './RevealOnScroll';
import avatarTechShowcase from '../assets/images/avatar-tech-showcase.png';

const serviceIcons = {
  'I.': <MdMovie className="text-3xl text-primary-blue mr-4 flex-shrink-0" aria-hidden="true" />,
  'II.': <MdSettingsVoice className="text-3xl text-primary-blue mr-4 flex-shrink-0" aria-hidden="true" />,
  'III.': <MdFace className="text-3xl text-primary-blue mr-4 flex-shrink-0" aria-hidden="true" />,
  'IV.': <MdLanguage className="text-3xl text-primary-blue mr-4 flex-shrink-0" aria-hidden="true" />,
};

function PreviewPanel() {
  return (
    <div className="bg-white border border-border-gray/50 rounded-[20px] shadow-lg overflow-hidden p-6 md:p-8 flex flex-col h-full">
      <div className="aspect-video w-full rounded-xl overflow-hidden bg-slate-50 border border-border-gray/20 mb-6 relative">
        <img
          src={avatarTechShowcase}
          alt="AI Avatar Preview Showcase"
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          loading="lazy"
        />
      </div>
      <span className="font-label-caps text-[10px] md:text-[11px] text-primary-blue tracking-widest uppercase font-bold mb-3 block">
        AI AVATARS
      </span>
      <h4 className="font-headline-md text-lg md:text-xl text-dark-navy mb-3 font-bold leading-tight">
        Create multilingual AI presenters
      </h4>
      <p className="font-body-sm text-sm text-body-text mb-6 leading-relaxed">
        Generate lifelike AI avatars that speak naturally in multiple Indian languages using your cloned voice while preserving identity, expression, and authenticity.
      </p>
      <a
        href="https://inkaai.com/studio"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 font-button text-xs font-bold uppercase tracking-wider text-primary-blue hover:text-primary-hover-blue transition-colors mt-auto"
      >
        Learn More <span className="text-sm leading-none">&#8594;</span>
      </a>
    </div>
  );
}

function Services() {
  const [isAvatarHovered, setIsAvatarHovered] = useState(false);
  const [isAvatarClicked, setIsAvatarClicked] = useState(false);
  return (
    <section className="py-section-gap bg-white text-dark-navy" aria-labelledby="services-heading">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid md:grid-cols-12 gap-gutter items-center mb-32">
          <RevealOnScroll className="md:col-span-7">
            <span className="font-label-caps text-label-caps text-primary-blue mb-6 block uppercase tracking-widest">
              Our Capabilities
            </span>
            <h2 id="services-heading" className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-dark-navy leading-tight">
              Expand Your Audience, Preserve Your Identity
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={200} className="md:col-span-5 md:pl-12">
            <p className="font-body-lg text-body-text">
              Connect with millions of new viewers across India&apos;s language spectrum. Scale your content natively with our specialized creator ecosystem.
            </p>
          </RevealOnScroll>
        </div>
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Capabilities List */}
          <div className="lg:col-span-8 space-y-16">
            {/* Voice AI Category */}
            <div>
              <div className="border-t border-border-gray/30 pt-6 pb-6">
                <span className="font-label-caps text-[12px] font-bold text-muted-text/60 tracking-widest uppercase">
                  Voice AI
                </span>
              </div>
              <div className="space-y-0">
                {servicesData.voiceAI.map((service) => (
                  <RevealOnScroll
                    key={service.title}
                    delay={service.delay}
                    className="group border-t border-border-gray py-12 hover:bg-soft-blue/30 transition-colors duration-500"
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
                      <div className="md:col-span-2 text-right hidden md:block" />
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>

            {/* Creator AI Category */}
            <div>
              <div className="border-t border-border-gray/30 pt-6 pb-6">
                <span className="font-label-caps text-[12px] font-bold text-muted-text/60 tracking-widest uppercase">
                  Creator AI
                </span>
              </div>
              <div className="space-y-0">
                {servicesData.creatorAI.map((service) => (
                  <RevealOnScroll
                    key={service.title}
                    delay={service.delay}
                    onMouseEnter={service.title === 'AI Avatars' ? () => setIsAvatarHovered(true) : undefined}
                    onMouseLeave={service.title === 'AI Avatars' ? () => setIsAvatarHovered(false) : undefined}
                    onClick={service.title === 'AI Avatars' ? () => setIsAvatarClicked(!isAvatarClicked) : undefined}
                    className={`group border-t border-border-gray py-12 hover:bg-soft-blue/30 transition-colors duration-500 ${
                      service.title === 'AI Avatars' ? 'cursor-pointer select-none' : ''
                    }${service.hasBottomBorder ? ' border-b border-border-gray' : ''}`}
                  >
                    <div className="grid md:grid-cols-12 items-center gap-gutter">
                      <div className="md:col-span-1 font-display-lg text-headline-md text-muted-text/30 italic group-hover:text-primary-blue transition-colors">
                        {service.numeral}
                      </div>
                      <div className="md:col-span-4 flex items-center">
                        {serviceIcons[service.numeral]}
                        <div className="flex items-center gap-3">
                          <h3 className="font-headline-md text-headline-md text-dark-navy">{service.title}</h3>
                          {service.title === 'AI Avatars' && (
                            <span className="bg-[#EEF4FF] text-primary-blue text-[10px] font-semibold uppercase tracking-wider px-[10px] py-[4px] rounded-full inline-block leading-none flex-shrink-0">
                              FLAGSHIP
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="md:col-span-5">
                        <p className="font-body-md text-body-text">{service.description}</p>
                      </div>
                      <div className="md:col-span-2 flex justify-end hidden md:flex">
                        {service.title === 'AI Avatars' ? (
                          <div className="w-[160px] h-[100px] rounded-2xl overflow-hidden border border-border-gray/50 shadow-sm transition-transform duration-300 group-hover:-translate-y-[2px]">
                            <img
                              src={avatarTechShowcase}
                              alt="AI Avatar Interface Thumbnail"
                              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                          </div>
                        ) : (
                          <div className="text-right hidden md:block" />
                        )}
                      </div>
                    </div>
                    {/* Mobile/Tablet Preview Panel (Expands beneath the row) */}
                    {service.title === 'AI Avatars' && (
                      <div
                        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                          isAvatarClicked ? 'max-h-[600px] opacity-100 mt-6' : 'max-h-0 opacity-0'
                        }`}
                        onClick={(e) => e.stopPropagation()} // Prevent clicking within card from toggling it closed
                      >
                        <PreviewPanel />
                      </div>
                    )}
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Preview Panel Column */}
          <div className="hidden lg:block lg:col-span-4 sticky top-32 z-10">
            <div
              className={`transition-all duration-300 transform ${
                isAvatarHovered
                  ? 'opacity-100 translate-y-0 scale-100 visible'
                  : 'opacity-0 -translate-y-2 scale-95 invisible'
              }`}
              onMouseEnter={() => setIsAvatarHovered(true)}
              onMouseLeave={() => setIsAvatarHovered(false)}
            >
              <PreviewPanel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
