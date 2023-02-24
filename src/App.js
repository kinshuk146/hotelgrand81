import './App.css';
import Navbar from './containers/Navbar/Navbar';
import Header from './containers/Header/Header';
import Form from './containers/Form/Form';
import About from './containers/About/About';
import InfoCarousel from './containers/InfoCarousel/InfoCarousel';
import ReactDOM from "react-dom/client";
import Footer from './containers/Footer/Footer'
import { createRoot } from "react-dom/client";
import Rooms from './containers/Rooms/Rooms';

import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import MyMap from './components/MyMap';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Navbar/><Header/><InfoCarousel/><Footer/></>}></Route>
        <Route path="/contact" element={<><Navbar/><Header/><MyMap/><Footer/></>}></Route>
        <Route path="/rooms" element={<><Navbar/><Header/><Rooms/><Footer/></>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);