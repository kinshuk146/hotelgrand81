import logo from './logo.svg';
import './App.css';
import Navbar from './containers/Navbar/Navbar';
import Header from './containers/Header/Header';
import Form from './containers/Form/Form';
import About from './containers/About/About';
import InfoCarousel from './containers/InfoCarousel/InfoCarousel';
function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <Form/>
    <About/>
    <InfoCarousel/>
    </>
  );
}

export default App;
