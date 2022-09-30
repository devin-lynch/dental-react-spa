import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from "./components/pages/Home";
import Services from "./components/pages/Services"
import Contact from "./components/pages/Contact"

export default function App() {
  return (
      <BrowserRouter>
        <nav>
          <Link to="/">Go to Home Page</Link>{' | '}
          <Link to="/services">See Our Services</Link>{' | '}
          <Link to="/contact">Contact Us!</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='services/*' element={<Services />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
  );
}


