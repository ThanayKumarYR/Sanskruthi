import logo from './components/images/logofinal.png' ;
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Run from './components/Run';
import Dates from './components/Dates';
import Sanskruthi from './components/Sanskruthi';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <img id='logo'src={logo} alt="logo" />
    <Navbar></Navbar>
    <Home></Home>
    <About></About>
    <Sanskruthi></Sanskruthi>
    <Run></Run>
    <Dates></Dates>
    <Footer></Footer>
    </>
  );
}

export default App;
