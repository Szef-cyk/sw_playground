import './App.css';
import { Route, Routes } from 'react-router';
import About from './pages/About';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Deck from './pages/Deck';


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/deck" element={<Deck />} />
        <Route path="*" element={<>Ta strona nie istnieje</>} />
      </Routes>
    </>
  );
}

export default App;
