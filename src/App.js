import './App.css';
import React from 'react';
import Content from './components/Content';
import ContentPictures from './components/ContentPictures';
import ContentVideo from './components/ContentVideo';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Pricing from './components/Pricing';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Pricing />
      <ContentVideo />
      <Content />
      <ContentPictures />
      <Footer />
    </div>
  );
}

export default App;
