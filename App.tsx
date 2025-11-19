import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';
import Home from './pages/Home';
import About from './pages/About';
import Purpose from './pages/Purpose';
import HowItWorks from './pages/HowItWorks';
import Participate from './pages/Participate';
import Contact from './pages/Contact';
import Transparency from './pages/Transparency';
import Gallery from './pages/Gallery';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-gray-800 relative">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quem-somos" element={<About />} />
            <Route path="/proposito" element={<Purpose />} />
            <Route path="/como-funciona" element={<HowItWorks />} />
            <Route path="/transparencia" element={<Transparency />} />
            <Route path="/galeria" element={<Gallery />} />
            <Route path="/participe" element={<Participate />} />
            <Route path="/contato" element={<Contact />} />
            {/* Fallback to Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <ChatAssistant />
      </div>
    </HashRouter>
  );
};

export default App;