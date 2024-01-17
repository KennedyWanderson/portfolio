import logo from './logo.svg';
import './App.css';
import './index.css'
import '../src/'
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Services from './Components/Services/Services';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Services />
    </div>
  );
}

export default App;
