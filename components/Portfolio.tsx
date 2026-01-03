import React from 'react';

const Portfolio: React.FC = () => {
  // Placeholder images - Replace src with actual Instagram image URLs
  const portfolioItems = [
    {
      id: 1,
      src: "https://live.staticflickr.com/65535/55019806338_013342a992_z.jpg",
      alt: "Bridal Makeup Look",
      link: "https://www.instagram.com/mua_tanyabhartiya/"
    },
    {
      id: 2,
      src: "https://live.staticflickr.com/65535/55020892304_c056d4c570.jpg",
      alt: "Briday Makeup Look",
      link: "https://www.instagram.com/mua_tanyabhartiya/"
    },
    {
      id: 3,
      src: "https://live.staticflickr.com/65535/55019846668_7515a2d0af_z.jpg",
      alt: "Bridal Makeup Look",
      link: "https://www.instagram.com/mua_tanyabhartiya/"
    },
    {
      id: 4,
      src: "https://live.staticflickr.com/65535/55019929509_05cc63ef4e.jpg",
      alt: "Bridal Makeup Look",
      link: "https://www.instagram.com/mua_tanyabhartiya/"
    },
    {
      id: 5,
      src: "https://live.staticflickr.com/65535/55019981250_d925a6e77e.jpg",
      alt: "Bridal Makeup Look",
      link: "https://www.instagram.com/mua_tanyabhartiya/"
    },
    {
      id: 6,
      src: "https://live.staticflickr.com/65535/55019846648_f4565ed4db.jpg",
      alt: "Bridal Makeup Look",
      link: "https://www.instagram.com/mua_tanyabhartiya/"
    }
  ];

  return (
    <section id="portfolio" className="bg-white text-jet py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-heading font-light uppercase tracking-[0.2em] mb-4">
              The Portfolio
            </h2>
            <p className="text-sm font-light text-gray-500 tracking-widest">
              LATEST WORKS FROM INSTAGRAM
            </p>
          </div>
          <a 
            href="https://www.instagram.com/mua_tanyabhartiya/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:inline-block text-xs font-bold uppercase tracking-widest border-b border-jet pb-1 hover:text-gray-600 transition-colors"
          >
            Follow @mua_tanyabhartiya
          </a>
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {portfolioItems.map((item) => (
            <a 
              key={item.id} 
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block break-inside-avoid group relative overflow-hidden cursor-pointer"
            >
              {/* NOTE FOR DEVELOPER: Replace 'src' below with actual Instagram CDN links */}
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-between items-end">
                <span className="text-white text-xs font-bold tracking-widest uppercase drop-shadow-lg">
                  View on Instagram
                </span>
                <i className="fab fa-instagram text-white text-xl drop-shadow-lg"></i>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <a 
            href="https://www.instagram.com/mua_tanyabhartiya/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs font-bold uppercase tracking-widest border-b border-jet pb-1"
          >
            Follow on Instagram
          </a>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;