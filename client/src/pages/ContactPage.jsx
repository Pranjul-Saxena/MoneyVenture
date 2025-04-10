import React from 'react';
import { useInView } from 'react-intersection-observer';

const ContactPage = () => {
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
            <h6 className="text-primary font-semibold mb-2">CONTACT US</h6>
            <h2 className="text-3xl font-bold">Get In Touch</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Have questions about our services? We're here to help. Reach out to us through any of
              the following channels, and our team will get back to you as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-primary text-xl mr-4">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Office Address</h4>
                      <p className="text-gray-600">
                        603 6th floor, shagun arcade, vijay nagar, Indore 452010
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-primary text-xl mr-4">
                      <i className="fas fa-phone" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-gray-600">
                        <a href="tel:+917770978090" className="hover:text-primary transition-colors">
                          +91-7770978090
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-primary text-xl mr-4">
                      <i className="fas fa-envelope" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-gray-600">
                        <a
                          href="mailto:moneyventure@gmail.com"
                          className="hover:text-primary transition-colors"
                        >
                        moneyventure@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-6">Business Hours</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-primary-dark transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 