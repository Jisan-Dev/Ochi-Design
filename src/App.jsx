import About from './components/About';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import LandingPage from './components/LandingPage';
import LogoCards from './components/LogoCards';
import Marquee from './components/Marquee';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="w-full min-h-screen text-white bg-zinc-900">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <LogoCards />
    </div>
  );
};

export default App;
