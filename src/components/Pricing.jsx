import RevealOnScroll from './RevealOnScroll';

function Pricing({ openSignIn }) {
  return (
    <section id="pricing" className="py-24 md:py-[100px] md:pt-[120px] md:pb-[100px] bg-[#F7F7F7] scroll-mt-24" aria-labelledby="pricing-heading">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
        {/* Header */}
        <RevealOnScroll className="mb-16">
          <span className="font-label-caps text-label-caps text-primary-blue mb-6 block uppercase tracking-widest">
            PRICING
          </span>
          <h2 id="pricing-heading" className="font-display-lg text-display-lg-mobile md:text-display-lg text-dark-navy mb-8 font-bold leading-none">
            One currency:<br />credits.
          </h2>
          <p className="font-body-lg text-body-text max-w-xl">
            Everything — dubbing, lip sync, voice cloning — is priced in credits.
            Buy as you go or subscribe for a better rate.
          </p>
          <hr className="border-border-gray/30 mt-12" />
        </RevealOnScroll>

        {/* Subscriptions Area */}
        <RevealOnScroll className="mb-8">
          <span className="font-label-caps text-label-caps text-muted-text mb-4 block uppercase tracking-widest">
            SUBSCRIPTIONS
          </span>
          <h3 className="font-headline-md text-headline-md text-dark-navy mb-12">
            Better credit rates, monthly.
          </h3>
        </RevealOnScroll>

        {/* Subscription 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-16">
          {/* Card 1: STANDARD */}
          <RevealOnScroll delay={0} className="bg-white border border-border-gray/30 p-8 flex flex-col justify-between min-h-[440px] rounded-xl hover:-translate-y-1 hover:shadow-lg transition-all duration-[250ms] ease-in-out">
            <div>
              <span className="font-label-caps text-label-caps text-muted-text uppercase tracking-widest block mb-4">
                STANDARD
              </span>
              <div className="font-display-lg text-headline-lg text-dark-navy mb-4 font-bold">
                Free
              </div>
              <p className="font-body-md text-body-text">
                No monthly fee.<br />Pay as you go.
              </p>
            </div>
            <div>
              <div className="border-t border-border-gray/20 pt-6 mb-6">
                <span className="font-label-caps text-[11px] text-muted-text tracking-widest uppercase block mb-1">
                  Credit rate
                </span>
                <span className="font-headline-md text-xl text-dark-navy font-semibold">
                  ₹25 per credit
                </span>
              </div>
              <button
                onClick={openSignIn}
                type="button"
                className="w-full text-center py-4 font-button text-button uppercase tracking-widest border border-primary-blue text-primary-blue bg-white hover:bg-primary-blue hover:text-white transition-all duration-[250ms] ease-in-out hover:scale-[1.02] block"
                aria-label="Start standard free plan"
              >
                START FREE
              </button>
            </div>
          </RevealOnScroll>

          {/* Card 2: CREATOR (Featured) */}
          <RevealOnScroll delay={100} className="relative bg-white border-2 border-primary-blue p-8 flex flex-col justify-between min-h-[440px] rounded-xl hover:-translate-y-1 hover:shadow-lg transition-all duration-[250ms] ease-in-out">
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-primary-blue text-white text-[10px] font-semibold tracking-widest px-3.5 py-1 uppercase rounded-full">
              POPULAR
            </div>
            <div>
              <span className="font-label-caps text-label-caps text-primary-blue uppercase tracking-widest block mb-4">
                CREATOR
              </span>
              <div className="font-display-lg text-headline-lg text-dark-navy mb-4 font-bold">
                ₹1,200<span className="text-lg font-normal text-muted-text">/mo</span>
              </div>
              <p className="font-body-md text-body-text">
                55 credits/mo included.
              </p>
            </div>
            <div>
              <div className="border-t border-border-gray/20 pt-6 mb-6">
                <span className="font-label-caps text-[11px] text-muted-text tracking-widest uppercase block mb-1">
                  Top-up rate
                </span>
                <span className="font-headline-md text-xl text-dark-navy font-semibold">
                  ₹22 per credit
                </span>
              </div>
              <button
                onClick={openSignIn}
                type="button"
                className="w-full text-center py-4 font-button text-button uppercase tracking-widest bg-primary-blue text-white hover:bg-primary-hover-blue transition-all duration-[250ms] ease-in-out hover:scale-[1.02] block"
                aria-label="Choose creator subscription plan"
              >
                CHOOSE CREATOR
              </button>
            </div>
          </RevealOnScroll>

          {/* Card 3: PRO */}
          <RevealOnScroll delay={200} className="bg-white border border-border-gray/30 p-8 flex flex-col justify-between min-h-[440px] rounded-xl hover:-translate-y-1 hover:shadow-lg transition-all duration-[250ms] ease-in-out">
            <div>
              <span className="font-label-caps text-label-caps text-muted-text uppercase tracking-widest block mb-4">
                PRO
              </span>
              <div className="font-display-lg text-headline-lg text-dark-navy mb-4 font-bold">
                ₹4,900<span className="text-lg font-normal text-muted-text">/mo</span>
              </div>
              <p className="font-body-md text-body-text">
                245 credits/mo included.
              </p>
            </div>
            <div>
              <div className="border-t border-border-gray/20 pt-6 mb-6">
                <span className="font-label-caps text-[11px] text-muted-text tracking-widest uppercase block mb-1">
                  Top-up rate
                </span>
                <span className="font-headline-md text-xl text-dark-navy font-semibold">
                  ₹20 per credit
                </span>
              </div>
              <button
                onClick={openSignIn}
                type="button"
                className="w-full text-center py-4 font-button text-button uppercase tracking-widest border border-primary-blue text-primary-blue bg-white hover:bg-primary-blue hover:text-white transition-all duration-[250ms] ease-in-out hover:scale-[1.02] block"
                aria-label="Choose pro subscription plan"
              >
                CHOOSE PRO
              </button>
            </div>
          </RevealOnScroll>

          {/* Card 4: SCALE */}
          <RevealOnScroll delay={300} className="bg-white border border-border-gray/30 p-8 flex flex-col justify-between min-h-[440px] rounded-xl hover:-translate-y-1 hover:shadow-lg transition-all duration-[250ms] ease-in-out">
            <div>
              <span className="font-label-caps text-label-caps text-muted-text uppercase tracking-widest block mb-4">
                SCALE
              </span>
              <div className="font-display-lg text-headline-lg text-dark-navy mb-4 font-bold leading-tight">
                Reach out
              </div>
              <p className="font-body-md text-body-text">
                Adithya Balasubramanium
              </p>
            </div>
            <div>
              <div className="border-t border-border-gray/20 pt-6 mb-6">
                <span className="font-label-caps text-[11px] text-muted-text tracking-widest uppercase block mb-1">
                  Reach out
                </span>
                <a
                  href="mailto:adithya@inkaai.com"
                  className="font-headline-md text-base md:text-lg text-primary-blue hover:underline font-semibold block break-all"
                >
                  adithya@inkaai.com
                </a>
              </div>
              <a
                href="mailto:adithya@inkaai.com"
                className="w-full text-center py-4 font-button text-button uppercase tracking-widest border border-primary-blue text-primary-blue bg-white hover:bg-primary-blue hover:text-white transition-all duration-[250ms] ease-in-out hover:scale-[1.02] block"
                aria-label="Email Adithya Balasubramanium for enterprise scale plan"
              >
                EMAIL ADITHYA
              </a>
            </div>
          </RevealOnScroll>
        </div>

        {/* Editor Access Strip */}
        <RevealOnScroll delay={100} className="bg-white border border-border-gray/30 p-8 md:p-12 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-[250ms] ease-in-out">
          <div className="max-w-2xl">
            <span className="font-label-caps text-label-caps text-primary-blue mb-3 block uppercase tracking-widest">
              EDITOR ACCESS
            </span>
            <h4 className="font-headline-md text-headline-md text-dark-navy mb-4">
              Unlimited audio editing — ₹15,000/mo.
            </h4>
            <p className="font-body-md text-body-text mb-4">
              Edit anything — per-segment translate, voice tweaks, manual timing, regenerate any chunk. Unlimited re-renders included.
            </p>
            <p className="font-body-md text-muted-text text-sm italic">
              Additional rendering may consume credits depending on plan.
            </p>
          </div>
          <a
            href="https://buy.stripe.com/4gM7sM7Fp5kJ17m7kJ2cg0d"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-5 font-button text-button uppercase tracking-widest bg-primary-blue text-white hover:bg-primary-hover-blue transition-all duration-[250ms] ease-in-out hover:scale-[1.02] whitespace-nowrap w-full md:w-auto text-center block"
            aria-label="Buy unlimited audio editor access"
          >
            BUY EDITOR ACCESS
          </a>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export default Pricing;
