
import About from './About';
import './App.css';
import Footer from './Components/Footer';
import FristSlide from './Components/FristSlide';
import Navbar from './Components/Navbar';
import SecSlide from './Components/SecSlide';
import ThirdSlide from './Components/ThirdSlide';
import Deal from './Deal';
import Home from './Home';
import Redeem from './Redeem';

function App() {
  return (
    <div className="App">
            <Navbar />
        <Home />
        <FristSlide />
        <About />
        <SecSlide />
        <Redeem />
        <ThirdSlide />
        <Deal />
        <Footer />
    </div>
  );
}


export default App;
