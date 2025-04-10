import React from 'react';
import { useInView } from 'react-intersection-observer';

const ChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: 'fas fa-chart-line',
      title: 'EXPERIENCED',
      description: 'Years of market expertise and proven track record',
    },
    {
      icon: 'fas fa-clock',
      title: '24/7 AVAILABLE',
      description: 'Round-the-clock support for your investment needs',
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'TRUSTED',
      description: 'Reliable and transparent investment solutions',
    },
    {
      icon: 'fas fa-users',
      title: 'PROFESSIONAL',
      description: 'Expert team dedicated to your financial success',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-16 transform transition-all duration-1000 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <h6 className="text-primary font-semibold mb-2">WHY CHOOSE US</h6>
          <h2 className="text-3xl font-bold">About Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`transform transition-all duration-1000 ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="text-primary text-4xl mb-4">
                  <i className={feature.icon} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs; 