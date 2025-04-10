import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import ServiceCard from './ServiceCard';

const ServicesTabs = () => {
  const [activeTab, setActiveTab] = useState('equity');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const servicesData = {
    equity: [
      {
        title: 'INTRADAY CASH',
        description: 'We bring you Intraday cash our pivotal product which provides value and suitability for those clients who want to take medium risk with medium returns.',
        link: '/services/intraday-cash',
        icon: '📈',
      },
      {
        title: 'STOCK CASH PLATINUM',
        description: 'Premium service for high-value clients with personalized strategies and dedicated support.',
        link: '/services/stock-cash-platinum',
        icon: '💎',
      },
    ],
    future: [
      {
        title: 'VENTURE FUTURES',
        description: 'Expert guidance in futures trading with comprehensive market analysis and risk management.',
        link: '/services/venture-futures',
        icon: '📊',
      },
    ],
    commodity: [
      {
        title: 'VENTURE COMMODITY COMBO',
        description: 'Research-based service with dedicated Research Analyst for intraday commodity trading, Recommendations in MCX commodity...',
        link: '/services/venture-commodity-combo',
        icon: '⚖️',
      },
    ],
    option: [
      {
        title: 'OPTIONS INFINITY',
        description: 'Option infinity is made with an objective to make high returns with low investment. Option market is asymmetrical in nature...',
        link: '/services/options-infinity',
        icon: '📉',
      },
      {
        title: 'OPTION PLUS',
        description: 'Option Plus is one of our premium products made with an objective to make high returns with low investment.',
        link: '/services/option-plus',
        icon: '📈',
      },
      {
        title: 'VENTURE COMBO',
        description: 'This product is designed for intraday Options trading. We only recommend intraday Option buying this product is suitable...',
        link: '/services/venture-combo',
        icon: '📊',
      },
    ],
  };

  const tabs = [
    { id: 'equity', label: 'EQUITY', icon: '📈' },
    { id: 'future', label: 'FUTURE', icon: '📊' },
    { id: 'commodity', label: 'COMMODITY', icon: '⚖️' },
    { id: 'option', label: 'OPTION', icon: '📉' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-16 transform transition-all duration-1000 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <h6 className="text-primary font-semibold mb-2">OUR SERVICES</h6>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What We Offer</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of financial services designed to help you achieve your investment goals.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 mx-2 mb-2 rounded-full transition-all duration-200 flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="text-xl">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData[activeTab]?.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                link={service.link}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTabs; 