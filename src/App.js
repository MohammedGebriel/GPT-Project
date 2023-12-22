import React from 'react';
import {Header,Footer,Features,Possibility,Blog,WhatGPT3} from './Containers/index'
import {CTA,Brand,Navbar} from './Components/index'

function App() {
  return (
    <div className='app'>
      <div className='gradient-bg'>
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