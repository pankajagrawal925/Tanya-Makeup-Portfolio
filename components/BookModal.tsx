import React, { useEffect, useState } from 'react';

interface BookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookModal: React.FC<BookModalProps> = ({ isOpen, onClose }) => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Bridal Make-up'
  });

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Destination Phone Number (from footer)
    // format: CountryCode + Number (e.g., 916300913379)
    const phoneNumber = "916300913379"; 

    // Construct the message
    const message = encodeURIComponent(
      `Hello, I would like to book an appointment.\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Service:* ${formData.service}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone}`
    );

    // Open WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    
    // Close modal and reset form
    onClose();
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'Bridal Make-up'
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-jet/90 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white text-jet w-full max-w-lg p-10 md:p-14 shadow-2xl animate-fade-in-up">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-jet transition-colors"
        >
          <i className="fas fa-times text-xl"></i>
        </button>

        <h3 className="text-2xl font-heading uppercase tracking-widest mb-2 text-center">
          Book Appointment
        </h3>
        <p className="text-center text-gray-500 text-xs tracking-wide mb-10">
          BEGIN YOUR TRANSFORMATION
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-xs uppercase tracking-widest font-bold mb-2">Name</label>
            <input 
              type="text" 
              id="name" 
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-jet transition-colors text-sm font-light"
              placeholder="JANE DOE"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs uppercase tracking-widest font-bold mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-jet transition-colors text-sm font-light"
              placeholder="JANE@EXAMPLE.COM"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs uppercase tracking-widest font-bold mb-2">Phone</label>
            <input 
              type="tel" 
              id="phone" 
              value={formData.phone}
              onChange={handleChange}
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-jet transition-colors text-sm font-light"
              placeholder="+91 00000 00000"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-xs uppercase tracking-widest font-bold mb-2">Preferred Service</label>
            <select 
              id="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-jet transition-colors text-sm font-light bg-transparent"
            >
              <option>Bridal Make-up</option>
              <option>Party Makeups</option>
              <option>Editorial / Shoot</option>
              <option>Private Lesson</option>
              <option>Other</option>
            </select>
          </div>

          <div className="pt-6">
            <button 
              type="submit" 
              className="w-full bg-jet text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors"
            >
              Submit via WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookModal;