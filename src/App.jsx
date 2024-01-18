import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Manufacturing from './pages/manufacturing/Manufacturing';
import Products from './pages/products/Products';
import Projects from './pages/projects/Projects';
import Gallery from './pages/gallery/gallery';
import Navbar from './components/Navbar';
import './i18next';

const App = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='manufacturing' element={<Manufacturing/>}/>
          <Route path='products' element={<Products/>}/>
          <Route path='projects' element={<Projects/>}/>
          <Route path='gallery' element={<Gallery/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App