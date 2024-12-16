import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Project from './components/Project'
import Bio from './components/Bio'
import Tech from './components/Tech'
import Work from './components/Work'
import Edu from './components/Edu'
import Contact from './components/Contact'
import Social from './components/Social'

const App = () => {
  return (
    <div className="relative h-full overflow-y-hidden antialiased">
      <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>
      <div className="relative z-10 flex flex-col items-center p-1 space-y-8 container mx-auto"> {/* Decreased padding to p-2 */}
        <Header />
        <Navbar />
        <Project />
        <Bio />
        <Tech />
        <Work />
        <Edu />
        <Contact />
        <Social />
      </div>
    </div>
  )
}

export default App
