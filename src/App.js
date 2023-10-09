import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Header/Navbar";
import MobileNav from "./components/Header/MobileNav";
import BookPackage from "./pages/BookPackage";

function App() {
  return (
    <div className=" w-full min-h-[100vh] ">
      <Navbar />
      <MobileNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages/:slug" element={<BookPackage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
