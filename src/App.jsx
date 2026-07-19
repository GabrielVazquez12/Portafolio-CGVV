import ConstellationBackground from './components/ConstellationBackground'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Projects from './components/Projects'
import TechStack from './components/TechStack'

function App() {
  return (
    <>
      <ConstellationBackground />
      <Navbar />
      <main>
        <HeroSection />
        <Projects />
        <TechStack />
      </main>
    </>
  )
}

export default App