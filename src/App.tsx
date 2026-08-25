import { Routes, Route } from 'react-router-dom';
import { ScrollProvider } from './lib/ScrollProvider';
import { Nav } from './components/Nav';
import { Home } from './pages/Home';
import { Bio } from './pages/Bio';
import { Companies } from './pages/Companies';
import { Awards } from './pages/Awards';
import { Contact } from './pages/Contact';

function App() {
  return (
    <ScrollProvider>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viografiko" element={<Bio />} />
        <Route path="/etaireies" element={<Companies />} />
        <Route path="/vraveuseis" element={<Awards />} />
        <Route path="/epikoinonia" element={<Contact />} />
      </Routes>
      <div className="vignette" />
      <div className="grain" />
    </ScrollProvider>
  );
}

export default App;
