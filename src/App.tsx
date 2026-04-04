import { Routes, Route } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import { lazy, Suspense } from 'react';

const About = lazy(() => import('./pages/AboutPage'));
const Contact = lazy(() => import('./pages/ContactPage'));
const Home = lazy(() => import('./pages/HomePage'));
const NotFound = lazy(() => import('./pages/404Page'));
const Reserve = lazy(() => import('./pages/ReservePage'));

function App() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}></Suspense>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/reserve" element={<Reserve />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
