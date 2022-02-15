import React from 'react'
import ReactDOM from 'react-dom'
import TopImg from './components/TopImg/TopImg.js'
import Intro from './components/Intro/Intro.js'
import About from './components/About/About.js'
import Interests from './components/interests/interests.js'
import Social from './components/Social/social.js'

const App = () => {
  return (
    <div className='whole-page'>
      <div className='my-card'>
        <TopImg />
        <Intro />
        <About />
        <Interests />
        <Social />
      </div>
    </div>
  )
}


export default App;
