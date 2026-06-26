import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Narrative from './components/Narrative';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import SiteVoice from './components/SiteVoice';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Narrative />
        <Services />
        <Testimonials />
        <Pricing />
        <CTA />
        <SiteVoice />
      </main>
      <Footer />
    </>
  );
}

export default App;