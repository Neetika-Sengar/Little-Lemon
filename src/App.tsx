import { Routes, Route } from 'react-router-dom';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import { lazy, Suspense } from 'react';
import { useState } from 'react';
import Confetti from 'react-confetti';
import './App.scss';

const About = lazy(() => import('./pages/AboutPage'));
const Contact = lazy(() => import('./pages/ContactPage'));
const Home = lazy(() => import('./pages/HomePage'));
const NotFound = lazy(() => import('./pages/404Page'));
const Reserve = lazy(() => import('./pages/ReservePage'));

function App() {
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [slayMode, setSlayMode] = useState(false);

  const handleChaosTrigger = (msg: string) => {
    if (!slayMode) {
      return;
    }
    setMessage(msg);
    setShowMessage(true);
    const appRoot = document.getElementById('app-root');
    if (appRoot && Math.random() > 0.1) {
      appRoot.classList.add('shake');

      setTimeout(() => {
        appRoot.classList.remove('shake');
      }, 3000);
    }

    setTimeout(() => {
      setShowMessage(false);
    }, 4000);
  };
  return (
    <>
      {showMessage && (
        <>
          <div className="chaos-text">{message}</div>
          <Confetti />
        </>
      )}
      <div id="app-root">
        <Header
          onChaosTrigger={handleChaosTrigger}
          slayMode={slayMode}
          setSlayMode={setSlayMode}
        />

        <main className="container">
          <Suspense fallback={<div>Loading...</div>}></Suspense>
          <Routes>
            <Route path="/" element={<Home slayMode={slayMode} />}></Route>
            <Route path="/reserve" element={<Reserve />}></Route>
            <Route path="/aboutus" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
