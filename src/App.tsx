import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Legal } from './components/Legal';
import { Privacy } from './components/Privacy';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function MainContent() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <footer className="bg-gray-50">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center space-x-6">
              <a href="/legal" className="text-base text-gray-500 hover:text-gray-900">
                Mentions légales
              </a>
              <a href="/privacy" className="text-base text-gray-500 hover:text-gray-900">
                Politique de confidentialité
              </a>
            </div>
            <p className="mt-8 text-center text-base text-gray-500">
              © {new Date().getFullYear()} Cabinet Julie Zagula. Tous droits réservés.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;