import React from 'react';
import { useInView } from 'react-intersection-observer';

const ComplaintData = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-16 transform transition-all duration-1000 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <h6 className="text-primary font-semibold mb-2">COMPLAINT DATA</h6>
          <h2 className="text-3xl font-bold">Transparency in Numbers</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We believe in complete transparency. Here's our complaint data for your reference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-primary text-4xl mb-4">
              <i className="fas fa-chart-bar" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Total Complaints</h3>
            <p className="text-4xl font-bold text-gray-800 mb-2">0</p>
            <p className="text-gray-600">No complaints registered</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-primary text-4xl mb-4">
              <i className="fas fa-check-circle" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Resolved Complaints</h3>
            <p className="text-4xl font-bold text-gray-800 mb-2">0</p>
            <p className="text-gray-600">All issues addressed</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-primary text-4xl mb-4">
              <i className="fas fa-clock" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Average Resolution Time</h3>
            <p className="text-4xl font-bold text-gray-800 mb-2">0</p>
            <p className="text-gray-600">Hours to resolution</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            We are committed to maintaining the highest standards of service and addressing any
            concerns promptly and effectively.
          </p>
          <a
            href="https://smartodr.in/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition-colors"
          >
            File a Complaint
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComplaintData; 