import React from 'react'
import Navbar from './components/Navbar'
// import { Button } from './components/Button'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Hero from './sections/Hero'
import Contact from './components/Contact'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'

const App = () => {
  return (
    <>
  <Navbar />

<Hero />
<About />
<Skills />
<Projects />
<Experience/>
<Contact />

<Footer />
   


     <Routes>
        {/* <Route path="/button" element={<Button />} /> */}
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/footer" element={<Footer />} />
       
      </Routes>
    </>

  )
}

export default App