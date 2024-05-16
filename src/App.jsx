import './css/style.css' 
import { Router, Route } from 'resolvedev-router'

import { Home } from "./pages/Home"
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Listado } from './components/Listado'
import { Contacto } from './components/Contacto'
import { Product } from './components/Product'
import { User } from './components/User'

function App() {

  return (
    <>
      <Navbar />
      <Router>
        <Route path="/" component={Home} />
        <Route path="/tienda" component={Listado} />
        <Route path="/contacto" component={Contacto} />
        <Route path="/producto" component={Product} />
        <Route path="/carrito" component={User} />
        <Route path="/usuario" component={User} />
      </Router>
      <Footer />
    </>
  )
}

export default App
