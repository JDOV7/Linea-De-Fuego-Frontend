import React from "react";
import { useParams, Link } from "react-router-dom";
import { Outlet, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import AuthContext from "../context/AuthProvider";
import Header from "../components/Header";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/axios";
import libroFondo from "../assets/libroFondo.png";
import useLibro from "../hooks/useLibro";
import Resenia from "../components/Resenia";

const ObtenerLibro = () => {
  const { auth, actualizarPerfil, cargando } = useAuth();
  const params = useParams();
  const { libro, resenias, obtenerLibro } = useLibro();
  const [alerta, setAlerta] = useState({});
  // const [libro, setLibro] = useState({});
  // const [resenias, setResenias] = useState([]);

  const { l_id_libro } = params;

  if (cargando) {
    return "cargando";
  }
  useEffect(() => {
    obtenerLibro(l_id_libro);
  }, []);
  console.log(libro);
  const { msg } = alerta;
  return (
    <>
      {libro && libro?.l_nombre ? (
        <>
          {/*  w-screen h-screen */}
          <section className=" dark:bg-cuarto w-screen h-screen ">
            <div className="grid max-w-screen-xl pt-20 pb-8 mx-auto lg:gap-8 xl:gap-10 lg:py-10 lg:grid-cols-12 lg:pt-28 items-center justify-center">
              {" "}
              <div className="shadow-2xl rounded-3xl bg-terciario p-10  lg:px-10  lg:col-span-7 text-end justify-end">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold md:text-5xl xl:text-5xl dark:text-principal text-center">
                  {libro.l_nombre}
                </h1>
                <h1 className="max-w-2xl mb-4 text-xl font-extrabold md:text-xl xl:text-2xl dark:text-principal text-left">
                  Autor: <span className="text-black">{libro.l_autor}</span>
                </h1>
                <h1 className="max-w-2xl mb-4 text-xl font-extrabold md:text-xl xl:text-2xl dark:text-principal text-left">
                  Publicado:{" "}
                  <span className="text-black">{libro.l_fecha_pub}</span>
                </h1>
                <h1 className="max-w-2xl mb-4 text-xl font-extrabold md:text-xl xl:text-2xl dark:text-principal text-left">
                  Genero: <span className="text-black">{libro.l_genero}</span>
                </h1>
                <h1 className="max-w-2xl mb-4 text-xl font-extrabold md:text-xl xl:text-2xl dark:text-principal text-left">
                  Tipo: <span className="text-black">{libro.l_tipo}</span>
                </h1>
                <h1 className="max-w-2xl mb-4 text-xl font-extrabold md:text-xl xl:text-xl dark:text-principal text-center">
                  Descripcion:{" "}
                  <span className="text-black">{libro.l_descripcion}</span>
                </h1>
                <h1 className="max-w-2xl mb-4 text-xl font-extrabold md:text-xl xl:text-2xl dark:text-principal text-left">
                  Precio: <span className="text-black">${libro.l_precio}</span>
                </h1>

                <div className=" sm:space-x-4 pt-5">
                  <Link
                    to="#"
                    className=" bg-secundario w-full py-3 px-10 rounded-xl text-cuarto  font-bold mt-5 hover:cursor-pointer hover:bg-principal md:w-auto"
                  >
                    Agregar al Carrito
                  </Link>
                  <Link
                    to={`/linea-de-fuego/crear-resenia/${libro.l_id_libro}`}
                    className=" bg-secundario w-full py-3 px-10 rounded-xl text-cuarto  font-bold mt-5 hover:cursor-pointer hover:bg-principal md:w-auto"
                  >
                    Agregar Reseña
                  </Link>
                </div>
              </div>
              <div className=" lg:mt-0 lg:col-span-4 lg:flex flex items-center justify-center">
                <img src={libro.l_portada} alt="hero image" />
              </div>
            </div>
          </section>

          <section className=" dark:bg-cuarto w-screen h-screen ">
            <div className="grid  pt-20 pb-8 mx-auto lg:gap-8 xl:gap-10 lg:py-10 lg:grid-cols-2 lg:pt-28  bg-cuarto">
              {resenias && resenias.length ? (
                <>
                  {resenias.map((resenia, index) => {
                    if (index < 50) {
                      return (
                        <Resenia
                          key={resenia.r_id_resena}
                          resenia={resenia}
                        ></Resenia>
                      );
                    }
                  })}
                </>
              ) : (
                <>
                  <h2 className="font-black text-3xl text-center">
                    No Hay Reseñas
                  </h2>
                </>
              )}
            </div>
          </section>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center pt-24 text-principal">
            No Existe el Libro
          </h2>
        </>
      )}
    </>
  );
};

export default ObtenerLibro;
