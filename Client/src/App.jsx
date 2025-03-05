import { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Components
import Navbar from './components/Navbar';
import Fotter from './components/Footer';
import './styles/abstract/reset.scss';
// Pages 
// import Home from './Pages/Home';
// import About from './Pages/About';
// import Contact from './Pages/Contact';
// import ErorPage from './Pages/404page';
// import Service from './Pages/Services';
// import Protfolio from './Pages/Protfolio';
const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const Contact = lazy(() => import('./Pages/Contact'));
const Service = lazy(() => import('./Pages/Services'));
const Protfolio = lazy(() => import('./Pages/Protfolio'));

//Terms and Conditions
import Payment from './Pages/Fpages/Payment-terms';
import Privacypolicy from './Pages/Fpages/Privacy-policy';
import Websiteterms from './Pages/Fpages/Website-terms';


function App(){
  return (
    <>
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            {/* Main pages  */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={< Service/>} />
            <Route path='*' element={<Home />} />
            {/* Terms and condition  */}
            <Route path="/payment-terms" element={<Payment />} />
            <Route path="/privacy-policy" element={<Privacypolicy />} />  
            <Route path="/website-terms" element={<Websiteterms />} /> 
            <Route path="/portfolio" element={<Protfolio />} /> 
          </Routes>
        </main>
        <Fotter/>
      </div>
    </Router>
    </>
  );
};

export default App;