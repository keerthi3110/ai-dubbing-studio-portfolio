import Hero from "../components/Hero";
import Narrative from "../components/Narrative";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import CTA from "../components/CTA";
import SiteVoice from "../components/SiteVoice";

function Home() {
    return (
        <main>
            <Hero />
            <Narrative />
            <Services />
            <Testimonials />
            <Pricing />
            <CTA />
            <SiteVoice />
        </main>
    );
}

export default Home;