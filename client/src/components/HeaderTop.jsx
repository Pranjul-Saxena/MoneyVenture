import React from 'react';

const HeaderTop = () => {
  return (
    <div className="bg-primary text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="text-sm">
            <i className="fas fa-exclamation-circle mr-2" />
            Investment in stock or commodity market is subject to high Risk, all the profit and loss
            risk bear by the investor, we are not committed any guarantee for profit.
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+917770978090"
              className="text-sm hover:text-gray-200 transition-colors"
            >
              <i className="fas fa-phone mr-2" />
              +91-7770978090
            </a>
            <a
              href="mailto:moneyventure@gmail.com"
              className="text-sm hover:text-gray-200 transition-colors"
            >
              <i className="fas fa-envelope mr-2" />
              moneyventure@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop; 