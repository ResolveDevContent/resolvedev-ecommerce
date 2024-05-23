import './css/style.css' 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from 'resolvedev-cart'
import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

import { Home } from "./pages/Home"
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Listado } from './components/Listado'
import { Contacto } from './pages/Contacto'
import { Product } from './components/Product'
import { User } from './components/User'
import { Cart } from './pages/Cart'
import { About } from './pages/About'
import { Endpoint } from './pages/Endpoint'
import { Page404 } from './components/Page404'
import { Login } from './components/Login'
import { FilterProvider } from './context/Filter'
import AuthContext from './context/Auth'

function App() {
  const [auth, setAuth] = useState(false);

  const readCookie = () => {
    const user = Cookies.get("token-tienda");
    if (user) {
      setAuth(true)
    }
  }

  useEffect(() => {
    readCookie();
  }, [])

  const root = `
    :root {
      --light: red;
      --dark: black;
      --muted-dark: blue;
      --muted-light: white;
      --muted: green;
    }
  `

  return (
    <BrowserRouter>
      <style>{root}</style>
      <AuthContext.Provider value={{ auth, setAuth }}>
        <CartProvider>
          <FilterProvider>
            <Navbar />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="/tienda" element={<Listado isInHome={false}/>} />
              <Route path="/tienda/:categoria" element={<Listado isInHome={false}/>} />
              <Route path="/tienda/:categoria/:subcategoria" element={<Listado isInHome={false}/>} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/producto/:id" element={<Product />} />
              <Route path="/carrito" element={<Cart />} />
              <Route path="/usuario" element={<User />} />
              <Route path="/nosotros" element={<About />} />
              <Route path="/endpoint" element={<Endpoint />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
            <Footer />
          </FilterProvider>
        </CartProvider>
      </AuthContext.Provider>
    </BrowserRouter>
  )
}

export default App
