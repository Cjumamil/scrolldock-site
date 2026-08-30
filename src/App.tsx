import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Changelog from './components/Changelog'
import Footer from './components/Footer'

function App() {
  const [pathname, setPathname] = useState(window.location.pathname)

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const isChangelog = pathname.replace(/\/$/, '') === '/changelog'

  return (
    <div className="min-h-screen bg-bg">
      <Nav />
      <main>
        {isChangelog ? (
          <Changelog />
        ) : (
          <>
            <Hero />
            <Features />
            <HowItWorks />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App
