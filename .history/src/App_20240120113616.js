import './App.css';
import './index.css'
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { useContext } from 'react';

function App() {
  const theme = useContext

  return (
    <>
    <div className="App">
      <Navbar />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </div>
      <Footer />
    
    </>
  );
}

export default App;
