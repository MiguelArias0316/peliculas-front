import { Route, Routes } from "react-router-dom";
import NavBar from "../components/common/NavBar";
import Medias from "../components/medias/Medias";
import TiposMultimedia from "../components/tiposMultimedia/TiposMultimedia";
import Productoras from "../components/productoras/Productoras";
import Directores from "../components/directores/Directores";
import Generos from "../components/generos/Generos";
import NotFound from "../components/common/NotFound";
import GestionMedia from "../components/medias/GestionMedia";
import Footer from "../components/common/Footer";

export default function AppRouter() {
  return (
    <>
      <NavBar/>
      <main className='container'>
        <Routes>
            <Route path="/" element={<Medias/>} />
            <Route path="/generos" element={<Generos/>} />
            <Route path="/directores" element={<Directores/>} />
            <Route path="/productoras" element={<Productoras/>} />
            <Route path="/tiposMultimedia" element={<TiposMultimedia/>} />
            <Route path="/medias" element={<GestionMedia/>} />
            <Route path="*" element={<NotFound/>} />
            <Route/>
        </Routes>
      </main>
      <Footer/>
    </>
  )
}
