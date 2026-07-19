import ConstellationBackground from './components/ConstellationBackground'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Projects from './components/Projects'

function App() {
  return (
    <>
      <ConstellationBackground />
      <Navbar />
      <main>
        <HeroSection />
        <Projects />
      </main>
    </>
  )
}

export default App