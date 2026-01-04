import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white text-jet py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 md:order-1 space-y-8">
            <h2 className="text-3xl md:text-4xl font-heading font-light uppercase tracking-widest border-l-4 border-jet pl-6">
              The Artist
            </h2>
            <div className="space-y-6 text-darkgrey font-light leading-relaxed text-sm md:text-base text-justify">
              <p>
                Makeup is not just about color; it is about revealing the architecture of the face. 
                I am Tanya Bhartiya, a professional makeup artist driven by the philosophy that 
                beauty lies in the details.
              </p>
              <p>
                Transitioning from a corporate background into the world of artistry, I found my 
                true calling in the transformative power of makeup. My approach is minimal yet 
                impactful, focusing on flawless skin and features that speak for themselves. 
                Whether it is a bridal glow or an editorial masterpiece, I strive for perfection 
                in every stroke.
              </p>
            </div>
            <div className="pt-4">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Sig_tanya.png" 
                alt="Signature" 
                className="h-12 opacity-80"
                // Using a placeholder signature if real one isn't available, or just text
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <p className="font-heading font-bold uppercase tracking-widest text-sm mt-2">Tanya Bhartiya</p>
            </div>
          </div>

          {/* Image Content */}
          <div className="order-1 md:order-2 relative group">
            <div className="absolute -inset-4 bg-gray-100 border border-gray-200 z-0 transform translate-x-2 translate-y-2 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4"></div>
            <div className="relative z-10 overflow-hidden">
               {/* 
                  NOTE: The previous Flickr link was a webpage URL, not a direct image file. 
                  Images must end in .jpg, .png, etc. 
                  I have placed a placeholder here. To use your Flickr image:
                  1. Go to your Flickr photo.
                  2. Click the 'Download' arrow icon -> 'View all sizes'.
                  3. Right-click the image you want and select "Copy Image Address".
                  4. Paste that link here.
               */}
               <img 
                src="https://live.staticflickr.com/65535/55019664376_6b1386ebf1.jpg" 
                alt="Tanya Bhartiya Portrait" 
                className="w-full h-[500px] object-cover transition-all duration-700 ease-in-out"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;