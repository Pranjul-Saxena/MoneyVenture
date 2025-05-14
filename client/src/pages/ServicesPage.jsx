import React from 'react';
import { useInView } from 'react-intersection-observer';
import ServicesTabs from '../components/ServicesTabs';

const ServicesPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-24">
      <section id='service-block' className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div
            ref={ref}
            className={`text-center mb-16 transform transition-all duration-1000 ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <h6 className="text-primary font-semibold mb-2">OUR SERVICES</h6>
            <h2 className="text-3xl font-bold">Comprehensive Financial Solutions</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We offer a wide range of financial services tailored to meet your investment needs.
              Our expert team provides personalized solutions to help you achieve your financial goals.
            </p>
          </div>

          <ServicesTabs />
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h6 className="text-primary font-semibold mb-2">WHY CHOOSE US</h6>
            <h2 className="text-3xl font-bold">Our Advantages</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-primary text-4xl mb-4">
                <i className="fas fa-chart-pie" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Analysis</h3>
              <p className="text-gray-600">
                In-depth market research and analysis to guide your investment decisions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-primary text-4xl mb-4">
                <i className="fas fa-clock" />
              </div>
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock assistance to address your queries and concerns.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-primary text-4xl mb-4">
                <i className="fas fa-shield-alt" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Risk Management</h3>
              <p className="text-gray-600">
                Comprehensive risk assessment and management strategies.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-primary text-4xl mb-4">
                <i className="fas fa-user-tie" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Personalized Service</h3>
              <p className="text-gray-600">
                Customized investment solutions based on your financial goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage; 