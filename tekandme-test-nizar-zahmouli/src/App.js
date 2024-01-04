import './App.css';
import './index.css'
import Contenu from './components/contenu/Contenu';
import Hero from './components/Hero';
import Media from './components/media/Media';
import Navbar from './components/Navbar';
import Service from './components/services/Service';
import Realisation from './components/realisation/Realisation';
import Bureau from './components/Bureau/Bureau d\'etudes';
import Securisation from './components/securisation/Securisation';
import Avis from './components/avis-clients/Avis';
import Scroll from './components/scroll/Scroll';
import Devis from './components/devis/Devis';
import Publication from './components/publication/Publication';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Contenu/>
      <Service/>
      <Media/>
      <Realisation/>
      <Bureau/>
      <Securisation/>
      <Avis/>
      <Scroll/>
      <Devis/>
      <Publication/>
      <Footer/>
   </div>
  );
}

export default App;
