import React from 'react';
import { useInView } from 'react-intersection-observer';

const Process = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-16 transform transition-all duration-1000 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <h6 className="text-primary font-semibold mb-2">PROCESS</h6>
          <h2 className="text-3xl font-bold">Our Process</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <img
            src="/assets/img/PHOTO-2022-09-26-15-23-41-1.jpg"
            alt="Our Process Diagram"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Process; 