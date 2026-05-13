import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import Property from "./pages/Property"

import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />

        <main className="page-content app-container">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/property/:id" element={<Property />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

        </main>

        <Footer />
      </div>

      
    </BrowserRouter>
  )
}

export default App