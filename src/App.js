import React from 'react';
import {Header, Blog, Possibility, WhatGPT3, Features, Footer} from './containers';
import {CTA, Brand, Navbar } from './components';

import './App.css';

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App