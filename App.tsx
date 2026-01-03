import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import BookModal from './components/BookModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-jet min-h-screen text-white">
      <Navbar onBookNow={openModal} />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
      </main>

      <Footer />
      
      <BookModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;