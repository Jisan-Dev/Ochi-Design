import About from './components/About';
import Cards from './components/Cards';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import LandingPage from './components/LandingPage';
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
      <Cards />
    </div>
  );
};

export default App;
