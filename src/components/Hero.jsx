import { useEffect, useRef, useState } from 'react';
import { MdSettingsVoice } from 'react-icons/md';
import { images } from '../constants/images';
import { transcriptionLines } from '../data/transcription';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

function Hero() {
  const heroImageRef = useRef(null);
  const lineRefs = useRef([]);
  const [activeLines, setActiveLines] = useState(() =>
    transcriptionLines.map((line) => line.initialActive)
  );

  const labelReveal = useRevealOnScroll();
  const headlineReveal = useRevealOnScroll(100);
  const transcriptionBoxReveal = useRevealOnScroll(200);
  const imageReveal = useRevealOnScroll(300);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.8;

      transcriptionLines.forEach((line, index) => {
        const element = lineRefs.current[index];
        if (!element) return;

        const rect = element.getBoundingClientRect();
        if (rect.top < triggerPoint) {
          setTimeout(() => {
            setActiveLines((prev) => {
              if (prev[index]) return prev;
              const next = [...prev];
              next[index] = true;
              return next;
            });
          }, index * 400);
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleParallax = () => {
      const heroImage = heroImageRef.current;
      if (!heroImage) return;

      const scrolled = window.pageYOffset;
      heroImage.style.transform = `translateY(${scrolled * 0.1}px)`;
    };

    handleParallax();
    window.addEventListener('scroll', handleParallax, { passive: true });

    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-32 overflow-hidden bg-off-white">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full grid md:grid-cols-12 items-end gap-gutter">
        <div className="md:col-span-8 z-10">
          <span
            ref={labelReveal.ref}
            className={`font-label-caps text-label-caps text-primary-blue mb-6 block uppercase tracking-widest ${labelReveal.className}`}
            style={labelReveal.style}
          >
            The Art of Localization
          </span>
          <h1
            ref={headlineReveal.ref}
            className={`font-display-lg text-display-lg-mobile md:text-display-lg text-dark-navy mb-12 ${headlineReveal.className}`}
            style={headlineReveal.style}
          >
            Stories Without Borders
          </h1>
          <div
            ref={transcriptionBoxReveal.ref}
            className={`bg-dark-navy p-8 md:p-12 w-full max-w-3xl ${transcriptionBoxReveal.className}`}
            style={transcriptionBoxReveal.style}
          >
            <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
              <MdSettingsVoice className="text-primary-blue text-2xl" aria-hidden="true" />
              <span className="font-label-caps text-label-caps text-white/40 uppercase tracking-widest">
                Active Neural Dubbing Engine
              </span>
            </div>
            <div className="space-y-4 font-display-lg text-headline-md italic leading-tight">
              {transcriptionLines.map((line, index) => (
                <span
                  key={line.text}
                  ref={(el) => {
                    lineRefs.current[index] = el;
                  }}
                  className={`transcription-line px-2 text-white/20${activeLines[index] ? ' active' : ''}`}
                  style={{ transitionDelay: `${line.delay}ms` }}
                >
                  {line.text}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div
          ref={imageReveal.ref}
          className={`md:col-span-4 relative hidden md:block ${imageReveal.className}`}
          style={imageReveal.style}
        >
          <div className="aspect-[3/4] bg-white border border-border-gray/50 overflow-hidden">
            <img
              ref={heroImageRef}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              src={images.heroMicrophone.src}
              alt={images.heroMicrophone.alt}
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-12 -left-12 p-8 bg-soft-blue w-48 h-48 flex items-center justify-center">
            <span className="font-display-lg text-headline-md text-primary-blue italic">24fps</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
