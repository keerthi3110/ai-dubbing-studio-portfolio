import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SignInModal from './components/SignInModal';
import Footer from './components/Footer';

function App() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const openSignIn = () => setIsSignInOpen(true);

  return (
    <>
      <Navbar openSignIn={openSignIn} />
      <Routes>
        <Route path="/" element={<Home openSignIn={openSignIn} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <SignInModal isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)} />
    </>
  );
}

export default App;