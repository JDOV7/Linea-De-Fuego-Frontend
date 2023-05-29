import React from "react";
// import { Outlet, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
// import AuthContext from "../context/AuthProvider";
// import Header from "../components/Header";
import clienteAxios from "../config/axios";
import CardLibro from "../components/CardLibro";

const Principal = () => {
  const { auth } = useAuth();
  const [cargando, setCargando] = useState(true);
  const [libros, setLibros] = useState([]);
  const [librosMaxVendidos, setLibrosMaxVendidos] = useState([]);
  // console.log(libro);
  console.log(auth);
  // console.log(cargando);

  useEffect(() => {
    const obtenerLibros = async () => {
      try {
        const url = `/libros/obtener-libros-nuevos`;
        const { data } = await clienteAxios.post(url);
        setLibros(data.body);
        console.log(libros);
      } catch (e) {
        console.log(e.message);
      }
      try {
        const url = `/libros/obtener-libros-mas-vendidos`;
        const { data } = await clienteAxios.post(url);
        setLibrosMaxVendidos(data.body);
        console.log(librosMaxVendidos);
      } catch (e) {
        console.log(e.message);
      }
      setCargando(false);
    };
    obtenerLibros();
  }, []);
  return (
    <>
      <div className="pt-36 px-20">
        <h1 className="text-start text-3xl font-semibold bg-principal text-terciario py-4 px-10 rounded-2xl">
          Checa Lo Mas Nuevo En Nuestra Coleccion
        </h1>
      </div>
      <div className="p-10">
        {libros ? (
          <>
            <div>
              <div className=" grid  mx-auto lg:grid-cols-12">
                {libros.map((libro, index) => {
                  return <CardLibro key={index} datos={libro}></CardLibro>;
                })}
              </div>
            </div>
          </>
        ) : (
          <>No hay libros</>
        )}
      </div>

      <div className="pt-24 px-20">
        <h1 className="text-start text-3xl  font-semibold bg-principal text-terciario py-4 px-10 rounded-2xl">
          Checa Lo Mas Vendido De Nuestro Catalogo
        </h1>
      </div>
      <div className="p-10">
        {librosMaxVendidos ? (
          <>
            <div>
              <div className=" grid  mx-auto lg:grid-cols-12">
                {librosMaxVendidos.map((libro, index) => {
                  return <CardLibro key={index} datos={libro}></CardLibro>;
                })}
              </div>
            </div>
          </>
        ) : (
          <>No hay libros</>
        )}
      </div>
    </>
  );
};

export default Principal;
