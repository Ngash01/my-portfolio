import './App.css';
import { Contact } from './components/Contact/Contact';
import { Exprience } from './components/Experience/Exprience';
import { Footer } from './components/Footer/Footer';
import { Intro } from './components/Intro/Intro';
import { Navbar } from './components/Navbar/Navbar';
import { Portfolio } from './components/PortFolio/Portfolio';
import { Services } from './components/Services/Services';
import { Works } from './components/Works/Works';


function App() {


  return (
    <div className="App" >
      <Navbar/>
      <Intro/>
      <Services/>
      <Portfolio/>
      <Exprience/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
