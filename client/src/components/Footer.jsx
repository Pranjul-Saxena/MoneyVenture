import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a237e] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-white text-[#1a237e] w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">
                M
              </div>
              <span className="text-xl font-bold text-white">MoneyVenture</span>
            </div>
            <p className="text-gray-200 mb-4">
              We are a leading financial services company dedicated to providing exceptional
              investment solutions and market research.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full"
              >
                <i className="fab fa-linkedin-in" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full"
              >
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-200 hover:text-white transition-colors flex items-center"
                >
                  <i className="fas fa-chevron-right mr-2 text-sm"></i>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-200 hover:text-white transition-colors flex items-center"
                >
                  <i className="fas fa-chevron-right mr-2 text-sm"></i>
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-200 hover:text-white transition-colors flex items-center"
                >
                  <i className="fas fa-chevron-right mr-2 text-sm"></i>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-200 hover:text-white transition-colors flex items-center"
                >
                  <i className="fas fa-chevron-right mr-2 text-sm"></i>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services/equity"
                  className="text-gray-200 hover:text-white transition-colors flex items-center"
                >
                  <i className="fas fa-chevron-right mr-2 text-sm"></i>
                  Equity Trading
                </Link>
              </li>
              <li>
                <Link
                  to="/services/futures"
                  className="text-gray-200 hover:text-white transition-colors flex items-center"
                >
                  <i className="fas fa-chevron-right mr-2 text-sm"></i>
                  Futures Trading
                </Link>
              </li>
              <li>
                <Link
                  to="/services/options"
                  className="text-gray-200 hover:text-white transition-colors flex items-center"
                >
                  <i className="fas fa-chevron-right mr-2 text-sm"></i>
                  Options Trading
                </Link>
              </li>
              <li>
                <Link
                  to="/services/commodity"
                  className="text-gray-200 hover:text-white transition-colors flex items-center"
                >
                  <i className="fas fa-chevron-right mr-2 text-sm"></i>
                  Commodity Trading
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-white/10 p-2 rounded-full mr-3">
                  <i className="fas fa-map-marker-alt text-white" />
                </div>
                <span className="text-gray-200">
                  603 6th floor, shagun arcade, vijay nagar, Indore 452010
                </span>
              </li>
              <li className="flex items-center">
                <div className="bg-white/10 p-2 rounded-full mr-3">
                  <i className="fas fa-phone text-white" />
                </div>
                <a
                  href="tel:+917770978090"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  +91-7770978090
                </a>
              </li>
              <li className="flex items-center">
                <div className="bg-white/10 p-2 rounded-full mr-3">
                  <i className="fas fa-envelope text-white" />
                </div>
                <a
                  href="mailto:fincorpventure@gmail.com"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  fincorpventure@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-200">
            © {currentYear} Venture Fincorp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 