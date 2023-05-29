import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import CardLibro from "../components/CardLibro";
const MisFavoritos = () => {
  const { auth, obtenerMisFavoritos, cargando } = useAuth();
  const [favoritos, setFavoritos] = useState([]);
  useEffect(() => {
    const cargandoDtos = async () => {
      setFavoritos(await obtenerMisFavoritos());
      console.log(favoritos);
    };
    cargandoDtos();
  }, []);
  if (cargando) {
    return "cargando";
  }
  return (
    <div className="p-24">
      <h1 className="text-center text-4xl font-bold text-secundario p-10">
        Tus Favoritos
      </h1>
      <div>
        <div className=" grid  mx-auto lg:grid-cols-12">
          {favoritos.map((favorito, index) => {
            return <CardLibro key={index} datos={favorito}></CardLibro>;
          })}
        </div>
      </div>
    </div>
  );
};

export default MisFavoritos;
