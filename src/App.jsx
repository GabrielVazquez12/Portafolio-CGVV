import ConstellationBackground from './components/ConstellationBackground'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import CustomCursor from './components/CustomCursor'
import GithubDashboard from './components/GithubDashboard'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
function App() {
  return (
    <>
    <CustomCursor /> 
      <ConstellationBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutMe />
        <Projects />
        <TechStack />
        <GithubDashboard />
      </main>
    <Footer />
    </>
  )
}

export default App