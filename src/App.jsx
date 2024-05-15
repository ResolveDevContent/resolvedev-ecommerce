import './css/style.css' 
import { Home } from "./pages/Home"
import { Footer } from './components/Footer'
import { Router, Route } from 'resolvedev-router'
import { Navbar } from './components/Navbar'
import { Listado } from './components/Listado'

function App() {

  return (
    <>
      <Navbar />
      <Router>
        <Route path="/" component={Home} />
        <Route path="/tienda" component={Listado} />
      </Router>
      <Footer />
    </>
  )
}

export default App
