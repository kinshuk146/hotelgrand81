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
import HotelGallery from './containers/HotelGallery/HotelGallery';

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
        <Route path="/" element={<><Navbar /><Header heading="Hotel Grand 81" description="Sector 81 faridabad "/><InfoCarousel/><Footer/></>}></Route>
        <Route path="/contact" element={<><Navbar /><Header heading="Contact Us" description=""/><MyMap/><Footer/></>}></Route>
        <Route path="/rooms" element={<><Navbar /><Header heading="Rooms" description=""/><Rooms/><Footer/></>}></Route>
        <Route path="/gallery" element={<><Navbar /><Header heading="Gallery" description=""/><HotelGallery/><Footer/></>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);