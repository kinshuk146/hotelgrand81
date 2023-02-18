import './App.css';
import Navbar from './containers/Navbar/Navbar';
import Header from './containers/Header/Header';
import Form from './containers/Form/Form';
import About from './containers/About/About';
import InfoCarousel from './containers/InfoCarousel/InfoCarousel';
import Footer from './containers/Footer/Footer'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import ReactDOM from "react-dom/client";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Navbar/><Header/><Form/><About/><InfoCarousel/><Footer/></>}></Route>
        <Route path="/book" element={<><Navbar/><Header/><Form/><About/><InfoCarousel/><Footer/></>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);