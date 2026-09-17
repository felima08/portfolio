import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Intro from '@/components/Intro'
import Journey from '@/components/Journey'
import Projects from '@/components/Projects'
import Process from '@/components/Process'
import Stack from '@/components/Stack'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Intro />
        <Journey />
        <Projects />
        <Process />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
