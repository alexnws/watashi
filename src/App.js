import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Signin from "./components/Signin";
import Chair from "./components/Chair";
import ChairAccajou from "./components/ChairAccajou";
import Canape from "./components/Canape";
import CanapeTissu from "./components/CanapeTissu";
import EtagereWhite from "./components/EtagereWhite";
import EtagereChene from "./components/EtagereChene";
import Panier from "./components/Panier.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/chair" element={<Chair />} />
        <Route exact path="/chairaccajou" element={<ChairAccajou />} />
        <Route exact path="/canape" element={<Canape />} />
        <Route exact path="/canapetissu" element={<CanapeTissu />} />
        <Route exact path="/etagerewhite" element={<EtagereWhite />} />
        <Route exact path="/etagerechene" element={<EtagereChene />} />
        <Route exact path="/panier" element={<Panier />} />
      </Routes>
    </>
  );
}

export default App;
