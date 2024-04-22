import { Route, Routes } from "react-router-dom";
import { Inicio } from "../../componentes/contenedor/Inicio";
import { CancionCrear } from "../../componentes/canciones/CancionCrear";
import { CancionListar } from "../../componentes/canciones/CancionListar";
import { CancionesAdmin } from "../../componentes/canciones/CancionAdmin";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";
export const Ruteo = () => {
    return (
      <Routes>
        <Route path="/" element={<Inicio />} />
  
        <Route path="/cancre" element={<CancionCrear />} />
        <Route path="/canlis" element={<CancionListar />} />
        <Route path="/canadm" element={<CancionesAdmin />} />
  
        
  
        <Route path="/acer" element={<NoEncontrado />} />
  
        <Route path="*" element={<NoEncontrado />} />
      </Routes>
    );
  };