import { BrowserRouter } from "react-router-dom";
import About from "./components/About.jsx";
import Feedbacks from "./Components/Feedbacks.jsx";
import Works from "./Components/Works.jsx";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import Contact from "./Components/Contact.jsx";
import Clients from "./components/Clients";
import FooterBottom from "./components/footer/FooterBottom";



const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-loop-mute bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />  
        <Works />
        <Clients/>
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
        </div>
        <FooterBottom/>
      </div>
    </BrowserRouter>
  );
}

export default App;
