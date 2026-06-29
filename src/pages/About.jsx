import { useEffect } from 'react';
import { 
  MdMovie, 
  MdSettingsVoice, 
  MdFace, 
  MdTune, 
  MdEmail, 
  MdArrowForward, 
  MdCheckCircle, 
  MdLanguage,
  MdLayers,
  MdOutlineShield,
  MdFlashOn
} from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import RevealOnScroll from '../components/RevealOnScroll';

// Import images
import aboutHeroPlatform from '../assets/images/about-hero-platform.png';
import avatarTechShowcase from '../assets/images/avatar-tech-showcase.png';
import galleryStudioDashboard from '../assets/images/gallery-studio-dashboard.png';
import galleryAvatarEditor from '../assets/images/gallery-avatar-editor.png';
import galleryVoiceCloning from '../assets/images/gallery-voice-cloning.png';
import founderPortrait from '../assets/images/founder-portrait.png';

function About() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-off-white dark:bg-dark-navy text-body-text dark:text-muted-text overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-36 pb-20 overflow-hidden bg-off-white dark:bg-dark-navy">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full grid md:grid-cols-12 items-center gap-gutter">
          <div className="md:col-span-6 z-10">
            <RevealOnScroll>
              <span className="font-label-caps text-label-caps text-primary-blue mb-6 flex items-center gap-2 uppercase tracking-widest">
                <MdLanguage className="text-lg animate-spin-slow" aria-hidden="true" />
                ABOUT INKAAI
              </span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-headline-lg lg:text-display-lg text-dark-navy dark:text-white mb-8 leading-none">
                Translating the soul of performance.
              </h1>
              <p className="font-body-lg text-body-lg text-body-text dark:text-muted-text mb-10 max-w-xl">
                We bridge linguistic divides across India with emotionally authentic voice cloning, multilingual AI avatars, and state-of-the-art studio editing tools built for cinematic quality.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#mission"
                  className="font-button text-button uppercase tracking-widest bg-primary-blue text-white px-8 py-4 hover:bg-primary-hover-blue transition-all duration-300 hover:scale-[1.02] flex items-center gap-2"
                >
                  Our Mission
                  <MdArrowForward className="text-base" />
                </a>
              </div>
            </RevealOnScroll>
          </div>
          <div className="md:col-span-6 relative z-0 mt-12 md:mt-0">
            <RevealOnScroll delay={200}>
              <div className="relative aspect-[4/3] bg-white dark:bg-slate border border-border-gray/50 dark:border-slate-800/80 rounded-xl overflow-hidden shadow-2xl group">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  src={aboutHeroPlatform}
                  alt="InkaAI Video Translation Workspace Dashboard Mockup"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/20 to-transparent pointer-events-none" />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 2. OUR MISSION */}
      <section id="mission" className="py-28 md:py-36 bg-white dark:bg-slate/20 border-y border-border-gray/20 dark:border-slate-800/50">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid md:grid-cols-12 gap-gutter items-start">
            <div className="md:col-span-5">
              <RevealOnScroll>
                <span className="font-label-caps text-label-caps text-primary-blue mb-4 block uppercase tracking-widest">
                  OUR CONVICTION
                </span>
                <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-dark-navy dark:text-white italic leading-tight">
                  Breaking barriers, keeping identity.
                </h2>
              </RevealOnScroll>
            </div>
            <div className="md:col-span-7 md:pl-12 space-y-8 font-body-lg text-body-text dark:text-muted-text">
              <RevealOnScroll delay={150}>
                <p className="leading-relaxed max-w-2xl">
                  India represents 22 official languages, thousands of unique local dialects, and one of the most vibrant film and creative content hubs globally. Yet, millions of viewers are disconnected from stories because language remains a massive barrier.
                </p>
              </RevealOnScroll>
              <RevealOnScroll delay={300}>
                <p className="leading-relaxed max-w-2xl">
                  At InkaAI, we believe dubbing shouldn't strip performance of its original soul. We construct cutting-edge AI technologies to break language divides while preserving vocal signatures, emotional textures, and cultural identities.
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE BUILD */}
      <section className="py-28 md:py-36 bg-off-white dark:bg-dark-navy">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <RevealOnScroll>
              <span className="font-label-caps text-label-caps text-primary-blue mb-4 block uppercase tracking-widest">
                PRODUCT ECOSYSTEM
              </span>
              <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-dark-navy dark:text-white leading-tight">
                Our core technologies.
              </h2>
            </RevealOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {/* Feature 1 */}
            <RevealOnScroll delay={0}>
              <div className="bg-white dark:bg-slate border border-border-gray/30 dark:border-slate-800/80 p-8 rounded-xl hover:-translate-y-1.5 hover:shadow-xl hover:border-primary-blue/30 dark:hover:border-primary-blue/30 transition-all duration-300 flex flex-col h-full min-h-[280px]">
                <div className="w-12 h-12 bg-soft-blue dark:bg-primary-blue/10 flex items-center justify-center rounded-lg mb-6">
                  <MdMovie className="text-2xl text-primary-blue" />
                </div>
                <h3 className="font-headline-md text-2xl text-dark-navy dark:text-white mb-4">
                  AI Dubbing
                </h3>
                <p className="font-body-md text-body-text dark:text-muted-text leading-relaxed">
                  Automatic, frame-accurate translation and multi-speaker alignment preserving cinematic pacing.
                </p>
              </div>
            </RevealOnScroll>

            {/* Feature 2 */}
            <RevealOnScroll delay={100}>
              <div className="bg-white dark:bg-slate border border-border-gray/30 dark:border-slate-800/80 p-8 rounded-xl hover:-translate-y-1.5 hover:shadow-xl hover:border-primary-blue/30 dark:hover:border-primary-blue/30 transition-all duration-300 flex flex-col h-full min-h-[280px]">
                <div className="w-12 h-12 bg-soft-blue dark:bg-primary-blue/10 flex items-center justify-center rounded-lg mb-6">
                  <MdSettingsVoice className="text-2xl text-primary-blue" />
                </div>
                <h3 className="font-headline-md text-2xl text-dark-navy dark:text-white mb-4">
                  Voice Cloning
                </h3>
                <p className="font-body-md text-body-text dark:text-muted-text leading-relaxed">
                  High-fidelity vocal cloning that retains emotional cadence, pitch variations, and performance details.
                </p>
              </div>
            </RevealOnScroll>

            {/* Feature 3 */}
            <RevealOnScroll delay={200}>
              <div className="bg-white dark:bg-slate border border-border-gray/30 dark:border-slate-800/80 p-8 rounded-xl hover:-translate-y-1.5 hover:shadow-xl hover:border-primary-blue/30 dark:hover:border-primary-blue/30 transition-all duration-300 flex flex-col h-full min-h-[280px]">
                <div className="w-12 h-12 bg-soft-blue dark:bg-primary-blue/10 flex items-center justify-center rounded-lg mb-6">
                  <MdFace className="text-2xl text-primary-blue" />
                </div>
                <h3 className="font-headline-md text-2xl text-dark-navy dark:text-white mb-4">
                  AI Avatars
                </h3>
                <p className="font-body-md text-body-text dark:text-muted-text leading-relaxed">
                  Digital humans with life-like micro-expressions and lip synchronization for regional audiences.
                </p>
              </div>
            </RevealOnScroll>

            {/* Feature 4 */}
            <RevealOnScroll delay={300}>
              <div className="bg-white dark:bg-slate border border-border-gray/30 dark:border-slate-800/80 p-8 rounded-xl hover:-translate-y-1.5 hover:shadow-xl hover:border-primary-blue/30 dark:hover:border-primary-blue/30 transition-all duration-300 flex flex-col h-full min-h-[280px]">
                <div className="w-12 h-12 bg-soft-blue dark:bg-primary-blue/10 flex items-center justify-center rounded-lg mb-6">
                  <MdTune className="text-2xl text-primary-blue" />
                </div>
                <h3 className="font-headline-md text-2xl text-dark-navy dark:text-white mb-4">
                  Studio Tools
                </h3>
                <p className="font-body-md text-body-text dark:text-muted-text leading-relaxed">
                  Granular script timing, segment translation adjustment, and post-production control dashboards.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 4. AI AVATAR TECHNOLOGY */}
      <section className="py-28 md:py-36 bg-white dark:bg-slate/10">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid md:grid-cols-12 gap-gutter items-center mb-20">
            <div className="md:col-span-6">
              <RevealOnScroll>
                <span className="font-label-caps text-label-caps text-primary-blue mb-4 block uppercase tracking-widest">
                  SYNTHETIC PRESENTERS
                </span>
                <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-dark-navy dark:text-white leading-tight mb-8">
                  AI Avatars that speak every language.
                </h2>
                <p className="font-body-lg text-body-text dark:text-muted-text mb-6 leading-relaxed max-w-xl">
                  InkaAI’s avatar generation engine goes beyond simple speech matching. It tracks subtle facial animations, lip movements, and gaze to ensure video outputs look natural across multiple regional languages.
                </p>
                <p className="font-body-md text-body-text dark:text-muted-text leading-relaxed max-w-xl">
                  By mapping natural posture adjustments and mouth shapes, our avatars speak with precise lip-sync while retaining their signature performance style and vocal uniqueness.
                </p>
              </RevealOnScroll>
            </div>
            <div className="md:col-span-6 mt-12 md:mt-0">
              <RevealOnScroll delay={200}>
                <div className="relative rounded-xl overflow-hidden border border-border-gray/40 dark:border-slate-800/80 shadow-2xl">
                  <img 
                    src={avatarTechShowcase} 
                    alt="AI Avatar lip synchronization showcase interface" 
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </RevealOnScroll>
            </div>
          </div>

          {/* Capability Chips */}
          <RevealOnScroll>
            <div className="flex flex-wrap justify-center gap-4 border-t border-border-gray/20 dark:border-slate-800/50 pt-12">
              {[
                'Lip Sync',
                'Voice Matching',
                'Facial Animation',
                'Regional Languages',
                'Studio Editing',
                'Instant Rendering',
              ].map((chip) => (
                <div 
                  key={chip}
                  className="flex items-center gap-2 px-6 py-3.5 bg-soft-blue/40 dark:bg-slate/40 border border-primary-blue/15 rounded-full font-button text-[14px] uppercase tracking-wider text-dark-navy dark:text-white font-medium"
                >
                  <MdCheckCircle className="text-primary-blue text-lg flex-shrink-0" />
                  <span>{chip}</span>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 5. VOICE INTELLIGENCE (Dark themed) */}
      <section className="py-28 md:py-36 bg-dark-navy text-white overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid md:grid-cols-12 gap-gutter mb-20 items-end">
            <div className="md:col-span-6">
              <RevealOnScroll>
                <span className="font-label-caps text-label-caps text-primary-blue mb-4 block uppercase tracking-widest">
                  SYNTHETIC AUDIO ENGINE
                </span>
                <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-white italic leading-none">
                  Vocal Intelligence
                </h2>
              </RevealOnScroll>
            </div>
            <div className="md:col-span-6">
              <RevealOnScroll delay={150}>
                <p className="font-body-lg text-border-gray max-w-xl leading-relaxed">
                  Our neural acoustics model replicates the fine details of human speech, allowing characters and performers to project warmth, urgency, and authentic regional accents.
                </p>
              </RevealOnScroll>
            </div>
          </div>

          {/* Grid of blocks instead of text block */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                title: 'Voice Cloning',
                desc: 'Generate highly realistic clones from short voice clips.',
                icon: <MdSettingsVoice />
              },
              {
                title: 'Emotion Preservation',
                desc: 'Retain the exact dramatic intent, sorrow, or excitement.',
                icon: <MdFace />
              },
              {
                title: 'Accent Adaptation',
                desc: 'Seamlessly shift speaker vowels to suit local dialects.',
                icon: <MdLanguage />
              },
              {
                title: 'Natural Speech',
                desc: 'Recreate breathing intervals, vocal fry, and pauses.',
                icon: <MdTune />
              },
              {
                title: 'Speaker Identity',
                desc: 'Enforce security watermarking to protect voice ownership.',
                icon: <MdOutlineShield />
              }
            ].map((voiceCard, index) => (
              <RevealOnScroll key={voiceCard.title} delay={index * 100}>
                <div className="bg-slate border border-white/5 p-6 rounded-xl flex flex-col justify-between h-full hover:border-primary-blue/30 hover:bg-slate/85 transition-all duration-300 group">
                  <div>
                    <div className="w-10 h-10 bg-primary-blue/10 rounded-lg flex items-center justify-center mb-6 text-primary-blue text-xl group-hover:scale-110 transition-transform">
                      {voiceCard.icon}
                    </div>
                    <h3 className="font-headline-md text-lg text-white mb-2">{voiceCard.title}</h3>
                  </div>
                  <p className="font-body-md text-border-gray text-[14px] leading-relaxed">
                    {voiceCard.desc}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PRODUCT GALLERY */}
      <section className="py-28 md:py-36 bg-off-white dark:bg-dark-navy">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="max-w-2xl mx-auto text-center mb-20">
            <RevealOnScroll>
              <span className="font-label-caps text-label-caps text-primary-blue mb-4 block uppercase tracking-widest">
                INTERFACE PREVIEW
              </span>
              <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-dark-navy dark:text-white leading-tight">
                Crafted for post-production.
              </h2>
            </RevealOnScroll>
          </div>

          {/* Horizontally arranged mockup showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
            {[
              {
                title: 'Studio Dashboard',
                desc: 'A complete timeline of multi-track vocal layers with speech segmentation.',
                img: galleryStudioDashboard
              },
              {
                title: 'AI Avatar Editor',
                desc: 'Fine-tune micro-expressions, posture, and visual rendering presets.',
                img: galleryAvatarEditor
              },
              {
                title: 'Voice Cloning Interface',
                desc: 'Upload reference clips and customize warmth, velocity, and dynamic range.',
                img: galleryVoiceCloning
              }
            ].map((galleryItem, index) => (
              <RevealOnScroll key={galleryItem.title} delay={index * 150}>
                <div className="bg-white dark:bg-slate border border-border-gray/30 dark:border-slate-800/80 p-6 rounded-xl hover:shadow-xl transition-all duration-300 flex flex-col group h-full">
                  <div className="aspect-[16/10] overflow-hidden rounded-lg border border-border-gray/20 dark:border-slate-800/60 mb-6 bg-light-gray dark:bg-dark-navy">
                    <img 
                      src={galleryItem.img} 
                      alt={galleryItem.title} 
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    />
                  </div>
                  <h3 className="font-headline-md text-xl text-dark-navy dark:text-white mb-2">{galleryItem.title}</h3>
                  <p className="font-body-md text-body-text dark:text-muted-text text-[14px] leading-relaxed">
                    {galleryItem.desc}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHY INKAAI */}
      <section className="py-28 md:py-36 bg-white dark:bg-slate/10 border-t border-border-gray/10 dark:border-slate-800/30">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <RevealOnScroll>
              <span className="font-label-caps text-label-caps text-primary-blue mb-4 block uppercase tracking-widest">
                OUR ADVANTAGE
              </span>
              <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-dark-navy dark:text-white leading-tight">
                Designed for speed and fidelity.
              </h2>
            </RevealOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {[
              {
                title: 'Human-sounding AI',
                desc: 'Advanced breath models and vocal frequency replication for cinema-quality output.',
                icon: <MdSettingsVoice />
              },
              {
                title: 'Built for Indian Languages',
                desc: 'Detailed phonetic mappings for major regional languages and localized dialects.',
                icon: <MdLanguage />
              },
              {
                title: 'Enterprise Ready',
                desc: 'Built to support studio pipelines with dedicated secure API integrations.',
                icon: <MdLayers />
              },
              {
                title: 'Real-time Editing',
                desc: 'Review scripts, adjust timings, and preview changes instantly in the editor.',
                icon: <MdTune />
              },
              {
                title: 'Secure Infrastructure',
                desc: 'Protect original vocal assets with deep-level encryption and custom security watermarking.',
                icon: <MdOutlineShield />
              },
              {
                title: 'Fast Deployment',
                desc: 'Speed up dubbing processes by rendering high-fidelity localized audio tracks in minutes.',
                icon: <MdFlashOn />
              }
            ].map((benefit, index) => (
              <RevealOnScroll key={benefit.title} delay={index * 100}>
                <div className="bg-off-white dark:bg-slate/40 border border-border-gray/30 dark:border-slate-800/60 p-8 rounded-xl flex items-start gap-4 hover:border-primary-blue/35 dark:hover:border-primary-blue/35 hover:bg-white dark:hover:bg-slate transition-all duration-300 h-full">
                  <div className="w-10 h-10 bg-soft-blue dark:bg-primary-blue/15 rounded-lg flex items-center justify-center text-primary-blue text-xl flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-button text-[16px] font-bold text-dark-navy dark:text-white mb-2 uppercase tracking-wide">
                      {benefit.title}
                    </h3>
                    <p className="font-body-md text-body-text dark:text-muted-text text-[14px] leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 8. MEET THE FOUNDER */}
      <section className="py-28 md:py-36 bg-off-white dark:bg-dark-navy border-t border-border-gray/10 dark:border-slate-800/30">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid md:grid-cols-12 gap-gutter items-center">
            {/* Left Col: Portrait */}
            <div className="md:col-span-5 flex justify-center">
              <RevealOnScroll>
                <div className="relative w-full max-w-sm aspect-[4/5] overflow-hidden rounded-xl border border-border-gray/50 dark:border-slate-800/80 shadow-2xl group bg-white dark:bg-slate">
                  <img 
                    src={founderPortrait} 
                    alt="Arun Viswanathan, Founder of InkaAI" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/40 to-transparent pointer-events-none" />
                </div>
              </RevealOnScroll>
            </div>

            {/* Right Col: Details */}
            <div className="md:col-span-7 mt-12 md:mt-0 md:pl-12">
              <RevealOnScroll delay={150}>
                <span className="font-label-caps text-label-caps text-primary-blue mb-4 block uppercase tracking-widest">
                  LEADERSHIP
                </span>
                <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-dark-navy dark:text-white mb-1.5 leading-none">
                  Arun Viswanathan
                </h2>
                <p className="font-button text-sm uppercase tracking-widest text-muted-text dark:text-border-gray mb-8">
                  Founder & CEO, InkaAI
                </p>
                
                <p className="font-body-md text-body-text dark:text-muted-text mb-8 leading-relaxed max-w-xl">
                  Arun Viswanathan founded InkaAI to break language barriers without losing the human behind every performance. A lifelong mimicry artist since the age of five, he has dedicated his career to understanding how people sound, speak, and express emotion. He combines this passion with over 16 years of engineering experience, a Master's degree from Carnegie Mellon University, and his most recent role as a Staff Engineer at Twitter/X. Today, he is building InkaAI to help creators and businesses reach audiences across India's languages while preserving authentic voice, emotion, and identity through AI-powered dubbing and multilingual communication.
                </p>

                {/* Social Buttons */}
                <div className="flex flex-wrap gap-4 mb-10">
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3.5 bg-white dark:bg-slate border border-border-gray/40 dark:border-slate-800/80 text-dark-navy dark:text-white font-button text-[13px] tracking-wider uppercase hover:border-primary-blue hover:text-primary-blue dark:hover:text-primary-blue transition-colors rounded-xl"
                  >
                    <FaLinkedin className="text-lg" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="mailto:adithya@inkaai.com"
                    className="flex items-center gap-2 px-6 py-3.5 bg-white dark:bg-slate border border-border-gray/40 dark:border-slate-800/80 text-dark-navy dark:text-white font-button text-[13px] tracking-wider uppercase hover:border-primary-blue hover:text-primary-blue dark:hover:text-primary-blue transition-colors rounded-xl"
                  >
                    <MdEmail className="text-lg" />
                    <span>Email</span>
                  </a>
                </div>
              </RevealOnScroll>

              {/* Quote beneath bio */}
              <RevealOnScroll delay={300}>
                <div className="border-t border-border-gray/20 dark:border-slate-800/50 pt-8 max-w-xl">
                  <blockquote className="font-display-lg text-headline-md italic text-primary-blue leading-tight mb-4">
                    &ldquo;A performance isn't just words; it's a voice print of a human soul. AI shouldn't replace the performer, it should set them free to speak to everyone.&rdquo;
                  </blockquote>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-28 md:py-36 bg-soft-blue dark:bg-slate/10 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-blue/5 via-transparent to-transparent pointer-events-none" />
        <RevealOnScroll className="max-w-4xl mx-auto px-margin-mobile relative z-10">
          <span className="font-label-caps text-label-caps text-primary-blue mb-6 block uppercase tracking-widest">
            GET STARTED
          </span>
          <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-dark-navy dark:text-white mb-12 italic leading-tight max-w-3xl mx-auto">
            Ready to speak to 1.2 billion hearts?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://inkaai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-primary-blue text-white px-12 py-6 font-button text-button uppercase tracking-widest transition-all hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2 w-full sm:w-auto block text-center"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Claim Your Voice Demo
                <MdArrowForward className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-primary-hover-blue translate-y-full group-hover:translate-y-0 transition-transform duration-500 cubic-bezier(0.2, 1, 0.3, 1)" />
            </a>
          </div>
        </RevealOnScroll>
      </section>

    </div>
  );
}

export default About;
