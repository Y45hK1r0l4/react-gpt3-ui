import React from 'react'
import { Blog, Footer, Possibility, Features, WhatGPT3, Header} from './Pages/index'
import { CTA, Brand, Navbar } from './components/index'

function App() {
  return (
    <div className='App'>
      <div className='gradient_bg'>
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
