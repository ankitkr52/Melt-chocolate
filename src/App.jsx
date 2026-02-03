import React from 'react'
import SmoothScroll from './SmootScroll'
import Header from './components/Header'
import Hero from './section/Hero'
import Taste from './section/Taste'
import Quality from './section/Quality'
import Parallax from './section/Parallax'

const App = () => {
  return (
    <>
      <SmoothScroll />
      <Header />
      <Hero />
      <Taste/>
      <Quality/>
      <Parallax/>
      <SmoothScroll />
    </>
  )
}

export default App
