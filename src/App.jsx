import About from './components/About';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import LogoCards from './components/LogoCards';
import Marquee from './components/Marquee';
import Navbar from './components/Navbar';
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen text-white bg-zinc-900">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      {/* <LogoCards /> */}
      <LogoCards>
        <Footer />
      </LogoCards>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
