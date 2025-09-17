import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import Features from '@/components/Features';
import CustomScrollbar from '@/components/CustomScrollbar';
import Technologies from '@/components/Technologies';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <CustomScrollbar />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Technologies />
        <About />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
