import Header from "./components/Header"
import Footer from "./components/Footer"
import Section1 from "./components/Section1"
import Section2 from './components/Section2'
 import Section3 from './components/Section3'
 import Section4 from './components/Section4'
function App() {

  return (
    <div className="font-pro box-border ">
      <header>
          <Header />
      </header>
      <main>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
