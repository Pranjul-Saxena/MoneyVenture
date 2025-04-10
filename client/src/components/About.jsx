import React from 'react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div
            ref={ref1}
            className={`transform transition-all duration-1000 ${
              inView1 ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}
          >
            <div
              className="h-[350px] bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: 'url(/assets/img/about/about-1.jpg)',
              }}
            >
              <div className="absolute bottom-0 left-0 right-0 bg-primary bg-opacity-90 text-white p-4">
                <h4 className="text-xl font-semibold">We Have Experience Team</h4>
              </div>
            </div>
          </div>
          <div
            className={`transform transition-all duration-1000 ${
              inView1 ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
          >
            <div className="max-w-lg">
              <h6 className="text-primary font-semibold mb-2">About Company</h6>
              <h2 className="text-3xl font-bold mb-6">Outstanding Stock Experience</h2>
              <p className="text-gray-600 leading-relaxed">
                At Venture Fincorp, we offer a unique and outstanding stock experience. Our team of
                experienced analysts provides in-depth research and analysis, and exceptional customer
                service. We use advanced technologies and tools to identify high-potential stocks and
                provide our clients with timely and accurate information. We prioritize the best interests
                of our clients with proper depth research.
              </p>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className={`transform transition-all duration-1000 ${
              inView2 ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}
          >
            <div className="max-w-lg">
              <h6 className="text-primary font-semibold mb-2">Who We Are</h6>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                Successful implementation of our strategy to gain medium return with less time
              </p>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-600">
                We want to make venture fincorp the most transparent and reliable Research Firm in India.
              </p>
            </div>
          </div>
          <div
            ref={ref2}
            className={`transform transition-all duration-1000 ${
              inView2 ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
          >
            <div
              className="h-[350px] bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: 'url(/assets/img/about/about-2.jpg)',
              }}
            >
              <div className="absolute bottom-0 left-0 right-0 bg-primary bg-opacity-90 text-white p-4">
                <h4 className="text-xl font-semibold">99.9% Customer Satisfaction</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 