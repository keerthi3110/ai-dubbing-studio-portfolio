import RevealOnScroll from './RevealOnScroll';

function SiteVoice({ openSignIn }) {
  return (
    <section id="sitevoice" className="py-24 md:py-[120px] bg-white text-dark-navy border-t border-border-gray/20 scroll-mt-24" aria-labelledby="sitevoice-heading">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
        
        {/* Eyebrow & Hero Grid */}
        <div className="grid md:grid-cols-12 gap-gutter items-start mb-12">
          <RevealOnScroll className="md:col-span-7">
            <span className="font-label-caps text-label-caps text-primary-blue mb-6 block uppercase tracking-widest">
              SITEVOICE
            </span>
            <h2 id="sitevoice-heading" className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-dark-navy mb-8 font-bold leading-[1.1]">
              Let your readers<br /> listen in any language.
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={200} className="md:col-span-5 md:pl-12 flex flex-col items-start justify-between h-full pt-10">
            <p className="font-body-lg text-body-lg text-body-text mb-8">
              One line of code. Your blog posts become multilingual audio — instantly. Works on WordPress, Shopify, or any website.
            </p>
            {/* <a
              href="https://inkaai.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-button text-button uppercase tracking-widest text-primary-blue hover:text-primary-hover-blue transition-colors duration-200"
              aria-label="Go to My Dashboard"
            >
              <span>My Dashboard ll→</span>
            </a> */}
          </RevealOnScroll>
        </div>

        {/* Thin Divider */}
        <RevealOnScroll delay={100}>
          <hr className="border-border-gray/30 mb-16" />
        </RevealOnScroll>

        {/* How It Works (Three-column Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-28">
          {/* Step 1 */}
          <RevealOnScroll delay={0} className="flex flex-col">
            <span className="font-display-lg text-5xl md:text-6xl text-muted-text/30 font-semibold mb-6 block">
              1
            </span>
            <h3 className="font-headline-md text-xl md:text-2xl text-dark-navy mb-4 font-bold">
              Subscribe & get your key
            </h3>
            <p className="font-body-md text-body-text">
              Pick a plan below. You'll get an API key tied to your domain.
            </p>
          </RevealOnScroll>
          
          {/* Step 2 */}
          <RevealOnScroll delay={100} className="flex flex-col">
            <span className="font-display-lg text-5xl md:text-6xl text-muted-text/30 font-semibold mb-6 block">
              2
            </span>
            <h3 className="font-headline-md text-xl md:text-2xl text-dark-navy mb-4 font-bold">
              Add one line of code
            </h3>
            <p className="font-body-md text-body-text">
              Paste the embed snippet into your site's &lt;head&gt;. That's it.
            </p>
          </RevealOnScroll>
          
          {/* Step 3 */}
          <RevealOnScroll delay={200} className="flex flex-col">
            <span className="font-display-lg text-5xl md:text-6xl text-muted-text/30 font-semibold mb-6 block">
              3
            </span>
            <h3 className="font-headline-md text-xl md:text-2xl text-dark-navy mb-4 font-bold">
              Readers click & listen
            </h3>
            <p className="font-body-md text-body-text">
              Language buttons appear on every article. Click → translated audio streams instantly.
            </p>
          </RevealOnScroll>
        </div>

        {/* Pricing Area Header */}
        <RevealOnScroll className="mb-12 text-center md:text-left">
          <span className="font-label-caps text-label-caps text-muted-text mb-4 block uppercase tracking-widest">
            PRICING PLANS
          </span>
          <h3 className="font-headline-md text-headline-md text-dark-navy mb-12">
            Simple, usage-based rates.
          </h3>
        </RevealOnScroll>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-28">
          {/* Card 1: Free Trial */}
          <RevealOnScroll delay={0} className="bg-white border border-border-gray/30 p-8 flex flex-col justify-between min-h-[440px] rounded-xl hover:-translate-y-1 hover:shadow-lg transition-all duration-[250ms] ease-in-out">
            <div>
              <span className="font-label-caps text-label-caps text-muted-text uppercase tracking-widest block mb-4">
                FREE TRIAL
              </span>
              <div className="font-display-lg text-headline-lg text-dark-navy mb-6 font-bold">
                $0
              </div>
              <ul className="space-y-3 font-body-sm text-sm text-body-text mb-6">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary-blue rounded-full flex-shrink-0" />
                  <span>30 minutes included</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary-blue rounded-full flex-shrink-0" />
                  <span>2 languages supported</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary-blue rounded-full flex-shrink-0" />
                  <span>10 requests/day</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary-blue rounded-full flex-shrink-0" />
                  <span>Includes InkaAI branding</span>
                </li>
              </ul>
            </div>
            <button
              onClick={openSignIn}
              type="button"
              className="w-full text-center py-4 font-button text-button uppercase tracking-widest border border-primary-blue text-primary-blue bg-white hover:bg-primary-blue hover:text-white transition-all duration-[250ms] ease-in-out hover:scale-[1.02] block"
              aria-label="Start Free Trial"
            >
              START FREE TRIAL
            </button>
          </RevealOnScroll>

          {/* Card 2: Starter */}
          <RevealOnScroll delay={100} className="relative bg-white border-2 border-primary-blue p-8 flex flex-col justify-between min-h-[440px] rounded-xl hover:-translate-y-1 hover:shadow-lg transition-all duration-[250ms] ease-in-out">
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-primary-blue text-white text-[10px] font-semibold tracking-widest px-3.5 py-1 uppercase rounded-full">
              POPULAR
            </div>
            <div>
              <span className="font-label-caps text-label-caps text-primary-blue uppercase tracking-widest block mb-4">
                STARTER
              </span>
              <div className="font-display-lg text-headline-lg text-dark-navy mb-6 font-bold">
                $19<span className="text-lg font-normal text-muted-text">/mo</span>
              </div>
              <ul className="space-y-3 font-body-sm text-sm text-body-text mb-6">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary-blue rounded-full flex-shrink-0" />
                  <span>For blogs & small sites</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary-blue rounded-full flex-shrink-0" />
                  <span>300 minutes/mo (~70 posts)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary-blue rounded-full flex-shrink-0" />
                  <span>All languages included</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary-blue rounded-full flex-shrink-0" />
                  <span>200 requests/day</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary-blue rounded-full flex-shrink-0" />
                  <span>Streaming playback & branding</span>
                </li>
              </ul>
            </div>
            <button
              onClick={openSignIn}
              type="button"
              className="w-full text-center py-4 font-button text-button uppercase tracking-widest bg-primary-blue text-white hover:bg-primary-hover-blue transition-all duration-[250ms] ease-in-out hover:scale-[1.02] block"
              aria-label="Choose Starter Plan"
            >
              CHOOSE STARTER
            </button>
          </RevealOnScroll>

          {/* Card 3: Pro */}
          <RevealOnScroll delay={200} className="bg-white border border-border-gray/30 p-8 flex flex-col justify-between min-h-[440px] rounded-xl hover:-translate-y-1 hover:shadow-lg transition-all duration-[250ms] ease-in-out">
            <div>
              <span className="font-label-caps text-label-caps text-muted-text uppercase tracking-widest block mb-4">
                PRO
              </span>
              <div className="font-display-lg text-headline-lg text-dark-navy mb-6 font-bold">
                $49<span className="text-lg font-normal text-muted-text">/mo</span>
              </div>
              <ul className="space-y-3 font-body-sm text-sm text-body-text mb-6">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary-blue rounded-full flex-shrink-0" />
                  <span>For media & high-traffic sites</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary-blue rounded-full flex-shrink-0" />
                  <span>1,500 minutes/mo (~350 posts)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary-blue rounded-full flex-shrink-0" />
                  <span>All languages included</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary-blue rounded-full flex-shrink-0" />
                  <span>1,000 requests/day</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-primary-blue rounded-full flex-shrink-0" />
                  <span>No InkaAI branding</span>
                </li>
              </ul>
            </div>
            <button
              onClick={openSignIn}
              type="button"
              className="w-full text-center py-4 font-button text-button uppercase tracking-widest border border-primary-blue text-primary-blue bg-white hover:bg-primary-blue hover:text-white transition-all duration-[250ms] ease-in-out hover:scale-[1.02] block"
              aria-label="Choose Pro Plan"
            >
              CHOOSE PRO
            </button>
          </RevealOnScroll>
        </div>

        {/* Embed Snippet Area */}
        <div className="max-w-4xl mx-auto mb-28">
          <RevealOnScroll className="text-center mb-8">
            <span className="font-label-caps text-label-caps text-primary-blue mb-3 block uppercase tracking-widest">
              INSTALLATION
            </span>
            <h3 className="font-headline-md text-2xl text-dark-navy mb-4 font-bold">
              Embed snippet
            </h3>
            <p className="font-body-md text-body-text max-w-xl mx-auto">
              Activate SiteVoice on your website instantly by adding this script tag to your header code injection or template files.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div className="bg-dark-navy rounded-xl p-6 md:p-8 overflow-x-auto shadow-inner relative group border border-slate-800">
              <div className="absolute top-4 right-4 flex items-center gap-2 text-[10px] text-white/40 uppercase tracking-widest font-sans select-none">
                HTML
              </div>
              <pre className="bg-transparent text-slate-300 p-0 m-0 leading-relaxed font-mono text-[13px] md:text-sm">
                <code className="bg-transparent p-0 m-0 border-0">
                  <span className="text-slate-400">{"<!-- InkaAI SiteVoice widget script -->"}</span>
                  {"\n"}
                  <span className="text-sky-400">&lt;</span>
                  <span className="text-sky-400">script</span>
                  {"\n  "}
                  <span className="text-emerald-400">src</span>
                  <span className="text-slate-300">=</span>
                  <span className="text-amber-300">"https://inkaai.com/sitevoice/widget.js"</span>
                  {"\n  "}
                  <span className="text-emerald-400">data-key</span>
                  <span className="text-slate-300">=</span>
                  <span className="text-amber-300">"sv_pub_a8f9c2d7e3b1a8c9"</span>
                  {"\n  "}
                  <span className="text-emerald-400">async</span>
                  {"\n"}
                  <span className="text-sky-400">&gt;&lt;/</span>
                  <span className="text-sky-400">script</span>
                  <span className="text-sky-400">&gt;</span>
                </code>
              </pre>
            </div>
          </RevealOnScroll>
        </div>

        {/* Platform Guides Header */}
        <div className="mb-12">
          <RevealOnScroll className="text-center md:text-left mb-8">
            <span className="font-label-caps text-label-caps text-muted-text mb-4 block uppercase tracking-widest">
              INTEGRATIONS
            </span>
            <h3 className="font-headline-md text-headline-md text-dark-navy">
              Setup guides for any platform.
            </h3>
          </RevealOnScroll>
        </div>

        {/* Guide Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* WordPress */}
          <RevealOnScroll delay={0} className="bg-white border border-border-gray/30 p-6 rounded-xl hover:-translate-y-1 hover:shadow-md transition-all duration-200">
            <h4 className="font-headline-md text-[18px] text-dark-navy mb-3 font-bold">WordPress</h4>
            <p className="font-body-sm text-sm text-body-text leading-relaxed">
              Install the WPCode plugin, then add the snippet into the "Header" injection field.
            </p>
          </RevealOnScroll>
          
          {/* Shopify */}
          <RevealOnScroll delay={100} className="bg-white border border-border-gray/30 p-6 rounded-xl hover:-translate-y-1 hover:shadow-md transition-all duration-200">
            <h4 className="font-headline-md text-[18px] text-dark-navy mb-3 font-bold">Shopify</h4>
            <p className="font-body-sm text-sm text-body-text leading-relaxed">
              Edit your theme's theme.liquid file, and paste the code snippet immediately before the &lt;/head&gt; tag.
            </p>
          </RevealOnScroll>
          
          {/* Webflow */}
          <RevealOnScroll delay={200} className="bg-white border border-border-gray/30 p-6 rounded-xl hover:-translate-y-1 hover:shadow-md transition-all duration-200">
            <h4 className="font-headline-md text-[18px] text-dark-navy mb-3 font-bold">Webflow</h4>
            <p className="font-body-sm text-sm text-body-text leading-relaxed">
              Go to Site Settings &rarr; Custom Code, paste the script into the Header Code input field, and publish.
            </p>
          </RevealOnScroll>
          
          {/* Custom HTML */}
          <RevealOnScroll delay={300} className="bg-white border border-border-gray/30 p-6 rounded-xl hover:-translate-y-1 hover:shadow-md transition-all duration-200">
            <h4 className="font-headline-md text-[18px] text-dark-navy mb-3 font-bold">Custom HTML</h4>
            <p className="font-body-sm text-sm text-body-text leading-relaxed">
              Manually paste the script tag directly into your HTML document inside the &lt;head&gt; element of your pages.
            </p>
          </RevealOnScroll>
        </div>

      </div>
    </section>
  );
}

export default SiteVoice;
