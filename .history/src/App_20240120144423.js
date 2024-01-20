import './App.css';
import './index.css'
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { useContext } from 'react';
import { themeContext } from './Context';
import { Divider } from '@mui/material';

function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;

  return (
    <>
    <div className="App"
    style={{
      background: darkMode? 'black': '',
      color: darkMode? 'white': ''
    }}>
      
      <Navbar />
      <About />
      <Divider />
      <Services />
      <Portfolio />
      <Contact />
    </div>
    <div style={{
      background: darkMode? 'black': '',
      color: darkMode? 'white': ''
    }}>

      <Footer />
    </div>
    
    </>
  );
}

export default App;
