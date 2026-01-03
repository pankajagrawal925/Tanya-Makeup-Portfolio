import React from 'react';

const servicesList = [
  "Beauty Makeovers",
  "Bridal Make-up",
  "Clean Makeup",
  "Eye Make-up",
  "Photography Make-up",
  "Private Makeup Lessons",
  "Television Make-up",
  "Theatre & Costume",
  "Party Makeups"
];

const Services: React.FC = () => {
  const handleInquireClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('footer');
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      window.history.pushState(null, "", '#footer');
    }
  };

  return (
    <section id="services" className="bg-jet text-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-light uppercase tracking-[0.2em]">
            Curated Services
          </h2>
          <div className="w-24 h-px bg-white mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className="bg-jet p-10 group hover:bg-neutral-900 transition-colors duration-300 flex flex-col items-center justify-center text-center border border-transparent"
            >
              <div className="mb-4 text-white/30 group-hover:text-white transition-colors duration-300">
                <i className="fas fa-star text-xs"></i>
              </div>
              <h3 className="text-lg font-heading uppercase tracking-widest font-light group-hover:font-normal transition-all duration-300">
                {service}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 font-light text-sm tracking-wide mb-8">
            Custom packages available for destination weddings and large events.
          </p>
          <a 
            href="#footer"
            onClick={handleInquireClick}
            className="inline-block border border-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-jet transition-colors"
          >
            Inquire Rates
          </a>
        </div>

      </div>
    </section>
  );
};

export default Services;