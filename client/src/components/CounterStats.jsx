import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const CounterStats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      number: 1000,
      label: 'Happy Clients',
      icon: 'fas fa-smile',
    },
    {
      number: 5000,
      label: 'Successful Trades',
      icon: 'fas fa-chart-line',
    },
    {
      number: 10,
      label: 'Years of Experience',
      icon: 'fas fa-award',
    },
    {
      number: 99,
      label: 'Client Satisfaction',
      icon: 'fas fa-percentage',
    },
  ];

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transform transition-all duration-1000 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm"
            >
              <div className="text-4xl mb-4">
                <i className={stat.icon} />
              </div>
              <div className="text-4xl font-bold mb-2">
                {inView && (
                  <CountUp
                    end={stat.number}
                    duration={2}
                    suffix={stat.label === 'Client Satisfaction' ? '%' : '+'}
                  />
                )}
              </div>
              <div className="text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterStats; 