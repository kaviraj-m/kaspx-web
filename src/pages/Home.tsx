import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import KVolt from '../components/KVolt'
import Projects from '../components/Projects'
import { ConsultationBanner } from '../components/ConsultationBanner'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <KVolt />
      <Projects />
      <ConsultationBanner />
    </>
  )
}

export default Home
