import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const Hero = () => {
  // useInView hook remains unchanged
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    // min-h-screen ensures it takes full height, flex items-center for vertical centering
    <section className="relative min-h-screen flex items-center overflow-hidden"> {/* Added overflow-hidden */}

      {/* Background Image & Overlay remain unchanged */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg)',
        }}
        // Add subtle parallax effect (optional, requires more JS for true parallax)
        // Could add a very slight scale on scroll if desired with more complex logic
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a237e]/55 to-[#1a237e]/85" /> {/* Slightly increased opacity for potentially better contrast */}
      </div>

      {/* Content Area */}
      {/* Increased bottom padding to ensure space for the stats bar, especially on mobile */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-56 md:pb-48 pt-16 md:pt-0"> {/* Added padding bottom/top */}

        {/* Animation block remains unchanged */}
        <div
          ref={ref}
          className={`max-w-3xl transform transition-all duration-1000 ease-out ${ // Added ease-out
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0' // Slightly reduced initial translate
          }`}
        >
          {/* Responsive Heading Size */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Expert Financial Guidance for Your{' '}
            <span className="text-yellow-400">Investment Journey</span>
          </h1>
          {/* Responsive Paragraph Size */}
          <p className="text-lg sm:text-lg text-gray-100 mb-10 max-w-2xl"> {/* Increased bottom margin */}
          We provide expert financial services and market research to help you make informed investment decisions, guiding you every step of the way.
          </p>
          {/* Button Group */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4"> {/* Stack buttons vertically on smallest screens */}
            {/* Primary Button with refined responsive styles and hover effect */}
            <Link
              to="/services"
              className="bg-white text-[#1a237e] px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center sm:justify-start space-x-2 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1a237e]/50 focus:ring-white shadow-lg hover:shadow-xl"
            >
              <span>Our Services</span>
              <svg
                className="w-5 h-5 hidden sm:inline-block" // Hide icon on very small screens if needed
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
            {/* Secondary Button with refined responsive styles and hover effect */}
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center sm:justify-start transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section - Adjusted for better positioning */}
      {/* Using absolute positioning but ensuring enough padding was added to the container above */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md py-6 sm:py-8 z-20"> {/* Increased blur and z-index */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Grid layout remains responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {/* Added subtle hover effect to stat items */}
            <div className="text-center transition-transform duration-300 transform hover:scale-105">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">10+</div>
              <div className="text-sm sm:text-base text-gray-200">Years Experience</div>
            </div>
            <div className="text-center transition-transform duration-300 transform hover:scale-105">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">5000+</div>
              <div className="text-sm sm:text-base text-gray-200">Happy Clients</div>
            </div>
            <div className="text-center transition-transform duration-300 transform hover:scale-105">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">24/7</div>
              <div className="text-sm sm:text-base text-gray-200">Customer Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Positioned above the stats bar, hidden on larger screens */}
      {/* Adjusted bottom positioning to reliably sit above the stats bar */}
      <div className="absolute bottom-40 md:bottom-48 left-1/2 transform -translate-x-1/2 z-10 sm:hidden"> {/* Hide on sm screens and up */}
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white opacity-75" // Slightly reduced opacity
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;