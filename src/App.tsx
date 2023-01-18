import { Route, Routes } from 'react-router';
import About from './pages/About';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Deck from './pages/Deck';
import Play from './pages/Play';
import styles from './app.module.scss'
import homeBackground from './assets/homeBackground.jpg'


function App() {
  return (
    <>
      <div className={styles.background} style={{ backgroundImage: `url(${homeBackground})` }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/deck" element={<Deck />} />
          <Route path="/play" element={<Play />} />
          <Route path="*" element={<>Ta strona nie istnieje</>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
