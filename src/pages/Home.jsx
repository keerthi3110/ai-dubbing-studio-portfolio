import Hero from "../components/Hero";
import Narrative from "../components/Narrative";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import CTA from "../components/CTA";
import SiteVoice from "../components/SiteVoice";

function Home({ openSignIn }) {
    return (
        <main>
            <Hero />
            <Narrative />
            <Services />
            <Testimonials />
            <Pricing openSignIn={openSignIn} />
            <CTA />
            <SiteVoice />
        </main>
    );
}

export default Home;