import React from 'react';

const Hero: React.FC = () => {
  const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('about');
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      // Update URL without page reload
      window.history.pushState(null, "", '#about');
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop" 
          alt="Editorial Makeup Background" 
          className="w-full h-full object-cover grayscale opacity-60"
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-jet via-transparent to-jet/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-white/80 text-xs md:text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in-up">
          Professional Makeup Artist based in Bengaluru
        </h2>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-light tracking-tight text-white mb-6 leading-tight">
          ARTISTRY IN <br/> <span className="font-bold">EVERY STROKE</span>
        </h1>
        <p className="text-gray-300 font-light text-sm md:text-base tracking-widest uppercase mt-8 border-t border-white/20 pt-8 inline-block">
          Enhancing Natural Beauty
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about" 
          onClick={scrollToAbout}
          className="text-white opacity-50 hover:opacity-100 transition-opacity"
        >
          <i className="fas fa-chevron-down text-xl"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;