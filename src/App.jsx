// import Navbar from "./components/Navbar";
import AngkatanKelimaSection from "./sections/AngkatanKelimaSection";
import DampakSection from "./sections/DampakSection";
import DewanJenderalSection from "./sections/DewanJenderalSection";
import HeroSection from "./sections/HeroSection";
import KorbanSection from "./sections/KorbanSection";
import MalamSection from "./sections/MalamSection";
import PahlawanSection from "./sections/PahlawanSection";
import PoliticalContextSection from "./sections/PoliticalContextSection";
import SiaranSection from "./sections/SiaranSection";
import TokohSection from "./sections/TokohSection";
// import Footer from "./layouts/Footer";


function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* <Navbar /> */}
      <main>
        <HeroSection />
        <PoliticalContextSection />
        <AngkatanKelimaSection />
        <TokohSection />
        <DewanJenderalSection />
        <MalamSection />
        <SiaranSection />
        <KorbanSection />
        <PahlawanSection />
        <DampakSection />
      </main>
      {/* <Footer /> */}
    </div>

  );
}
export default App;
