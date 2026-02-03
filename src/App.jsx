import React from 'react'
import SmoothScroll from './SmootScroll'
import Header from './components/Header'
import Hero from './section/Hero'

const App = () => {
  return (
    <>
      <SmoothScroll />
      <Header />
      <Hero />
      <SmoothScroll />
    </>
  )
}

export default App
