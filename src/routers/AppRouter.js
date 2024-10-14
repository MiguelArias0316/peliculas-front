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
import MediaProvider from "../components/medias/MediaProvider";

export default function AppRouter() {
  return (
    <>
      <NavBar/>
      <main className='container'>
        <Routes>
        <Route path="/" element={
            <MediaProvider>
              {({ mediasActivos, obtenerNombreGenero, obtenerNombreDirector, obtenerNombreProductora, obtenerNombreTipoMultimedia }) => (
                <Medias
                  mediasActivos={mediasActivos}
                  obtenerNombreGenero={obtenerNombreGenero}
                  obtenerNombreDirector={obtenerNombreDirector}
                  obtenerNombreProductora={obtenerNombreProductora}
                  obtenerNombreTipoMultimedia={obtenerNombreTipoMultimedia}
                />
              )}
            </MediaProvider>
          } />
            <Route path="/generos" element={<Generos/>} />
            <Route path="/directores" element={<Directores/>} />
            <Route path="/productoras" element={<Productoras/>} />
            <Route path="/tiposMultimedia" element={<TiposMultimedia/>} />
            <Route path="/gestion-medias" element={
            <MediaProvider>
              {({ medias, clearMedia,seleccionarMediaParaEditar,guardarMedia,handleChange,tiposMultimedia,productorasActivos, generosActivos,directoresActivos,mediasActivos, media, obtenerNombreGenero, obtenerNombreDirector, obtenerNombreProductora, obtenerNombreTipoMultimedia }) => (
                <GestionMedia
                  clearMedia={clearMedia}
                  seleccionarMediaParaEditar={seleccionarMediaParaEditar}
                  guardarMedia={guardarMedia}
                  handleChange={handleChange}
                  tiposMultimedia={tiposMultimedia}
                  productorasActivos={productorasActivos}
                  generosActivos={generosActivos}
                  directoresActivos={directoresActivos}
                  mediasActivos={mediasActivos}
                  media={media}
                  medias={medias}
                  obtenerNombreGenero={obtenerNombreGenero}
                  obtenerNombreDirector={obtenerNombreDirector}
                  obtenerNombreProductora={obtenerNombreProductora}
                  obtenerNombreTipoMultimedia={obtenerNombreTipoMultimedia}
                />
              )}
            </MediaProvider>
          } />
            <Route path="*" element={<NotFound/>} />
            <Route/>
        </Routes>
      </main>
      <Footer/>
    </>
  )
}
