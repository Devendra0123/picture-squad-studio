import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Header/Navbar";
import MobileNav from "./components/Header/MobileNav";
import Packages from "./pages/Packages";

function App() {
  return (
    <div className="bg-darkGray w-full min-h-[100vh] ">
      <Navbar />
      <MobileNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages/:slug" element={<Packages />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
