// src/pages/HomePage.jsx
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import ChooseUs from '../components/ChooseUs';
import Process from '../components/Process';
import ServicesTabs from '../components/ServicesTabs';
import CounterStats from '../components/CounterStats';
import ComplaintData from '../components/ComplaintData';

const HomePage = () => {
  return (
    <div className="pt-24">
      <Hero />
      <ComplaintData />
      <About />
      <ChooseUs />
      <Process />
      <ServicesTabs />
      <CounterStats />
    </div>
  );
};

export default HomePage;