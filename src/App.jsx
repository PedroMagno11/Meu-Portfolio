import './App.scss'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Parallax from './components/Parallax'
import Portfolio from './components/Portfolio'
import Services from './components/Services'

function App() {

  return (
    <div>
      <section id="Homepage">
        <Navbar/>
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" id="whatIDo"/>
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" id="whatIDid"/>
      </section>
      <Portfolio/>
      <section id="Contact">
        <Contact id="Contact"/>
      </section>
    </div>
  )
}

export default App
