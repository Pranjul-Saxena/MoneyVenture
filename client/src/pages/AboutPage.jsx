import React from 'react';
import { useInView } from 'react-intersection-observer';

const AboutPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-24">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div
            ref={ref}
            className={`text-center mb-16 transform transition-all duration-1000 ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <h6 className="text-primary font-semibold mb-2">ABOUT US</h6>
            <h2 className="text-3xl font-bold">Our Story</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800">Who We Are</h3>
              <p className="text-gray-600 leading-relaxed">
                Venture Fincorp is a leading financial services company dedicated to providing
                exceptional investment solutions and market research. With years of experience
                in the financial industry, we have built a reputation for delivering reliable
                and innovative services to our clients.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team of experienced professionals is committed to helping you achieve your
                financial goals through personalized investment strategies and expert market
                analysis.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to empower investors with the knowledge and tools they need to
                make informed investment decisions. We strive to provide transparent, reliable,
                and innovative financial services that help our clients achieve their financial
                objectives.
              </p>
              <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                We envision becoming the most trusted and preferred financial services provider
                in India, known for our integrity, expertise, and commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h6 className="text-primary font-semibold mb-2">OUR VALUES</h6>
            <h2 className="text-3xl font-bold">What We Stand For</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-primary text-4xl mb-4">
                <i className="fas fa-handshake" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Integrity</h3>
              <p className="text-gray-600">
                We conduct our business with the highest standards of honesty and transparency.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-primary text-4xl mb-4">
                <i className="fas fa-chart-line" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Expertise</h3>
              <p className="text-gray-600">
                Our team of professionals brings years of experience and deep market knowledge.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-primary text-4xl mb-4">
                <i className="fas fa-users" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Client Focus</h3>
              <p className="text-gray-600">
                We prioritize our clients' needs and work tirelessly to exceed their expectations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 