import Nav from './components/Nav'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import InstallBand from './components/InstallBand'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Nav />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <InstallBand />
      </main>
      <Footer />
    </div>
  )
}

export default App
