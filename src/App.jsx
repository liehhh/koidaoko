import { Routes, Route } from 'react-router-dom';
import { CONFIG } from './config.js';
import { TransitionProvider } from './components/PageTransition.jsx';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Cursor from './components/Cursor.jsx';
import Particles from './components/Particles.jsx';
import Home from './pages/Home.jsx';
import Works from './pages/Works.jsx';
import Work from './pages/Work.jsx';
import About from './pages/About.jsx';

export default function App() {
  return (
    <TransitionProvider enabled={CONFIG.pageTransition}>
      <div className="app">
        {CONFIG.ambientParticles && <Particles />}
        {CONFIG.filmGrain && <div className="grain" aria-hidden="true" />}
        <Nav />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/work/:slug" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
        </main>
        {CONFIG.customCursor && <Cursor />}
      </div>
    </TransitionProvider>
  );
}
