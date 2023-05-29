import React from "react";
import { useParams, Link } from "react-router-dom";
import { Outlet, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import AuthContext from "../context/AuthProvider";
import Header from "../components/Header";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/axios";
import useLibro from "../hooks/useLibro";
import Resenia from "../components/Resenia";
import useCarrito from "../hooks/useCarrito";
import Favorito from "../components/Favorito";
const ObtenerLibro = () => {
  const { auth, actualizarPerfil, cargando } = useAuth();
  const params = useParams();
  const { libro, resenias, obtenerLibro } = useLibro();
  const [alerta, setAlerta] = useState({});
  const [cantidad, setCantidad] = useState(1);

  const { carrito, setCarrito, agregarAlCarrito } = useCarrito();
  const {
    l_nombre,
    l_precio,
    l_portada,
    l_cantidad,
    l_autor,
    l_fecha_pub,
    l_genero,
    l_tipo,
    l_descripcion,
  } = libro;
  // const [libro, setLibro] = useState({});
  // const [resenias, setResenias] = useState([]);

  const { l_id_libro } = params;

  if (cargando) {
    return "cargando";
  }
  useEffect(() => {
    obtenerLibro(l_id_libro);
  }, []);

  // console.log(libro);
  const { msg } = alerta;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cantidad < 0 || cantidad > l_cantidad) {
      setCantidad(0);
      return;
    }
    if (cantidad == 0 || cantidad === "") {
      eliminarProductoCarrito(l_id_libro);
      return;
    }

    console.log(libro);
    console.log(`cantidad comprada:${cantidad}#`);
    const datosCarrito = {
      l_id_libro: +l_id_libro,
      l_nombre,
      l_autor,
      l_precio,
      l_cantidad: cantidad,
    };
    agregarAlCarrito(datosCarrito);
  };
  return (
    <>
      {libro && libro?.l_nombre ? (
        <>
          {/*  w-screen h-screen */}
          <div className="dark:bg-cuarto ">
            <div className="grid max-w-screen-xl pt-20 pb-8 mx-auto lg:gap-8 xl:gap-10 lg:py-10 lg:grid-cols-12 lg:pt-28 items-center justify-center">
              {" "}
              <div className="shadow-2xl rounded-3xl bg-terciario p-10  lg:px-10  lg:col-span-7 text-end justify-end">
                <div className="flex items-center justify-center text-center">
                  <h1 className="pr-5 max-w-2xl mb-4 text-4xl font-extrabold md:text-5xl xl:text-5xl dark:text-principal text-center">
                    {l_nombre}
                  </h1>
                  <Favorito
                    datos={{
                      l_id_libro,
                    }}
                  ></Favorito>
                </div>
                <h1 className="max-w-2xl mb-4 text-xl font-extrabold md:text-xl xl:text-2xl dark:text-principal text-left">
                  Autor: <span className="text-black">{l_autor}</span>
                </h1>
                <h1 className="max-w-2xl mb-4 text-xl font-extrabold md:text-xl xl:text-2xl dark:text-principal text-left">
                  Publicado: <span className="text-black">{l_fecha_pub}</span>
                </h1>
                <h1 className="max-w-2xl mb-4 text-xl font-extrabold md:text-xl xl:text-2xl dark:text-principal text-left">
                  Genero: <span className="text-black">{l_genero}</span>
                </h1>
                <h1 className="max-w-2xl mb-4 text-xl font-extrabold md:text-xl xl:text-2xl dark:text-principal text-left">
                  Tipo: <span className="text-black">{l_tipo}</span>
                </h1>
                <h1 className="max-w-2xl mb-4 text-xl font-extrabold md:text-xl xl:text-xl dark:text-principal text-center">
                  Descripcion:{" "}
                  <span className="text-black">{l_descripcion}</span>
                </h1>
                <h1 className="max-w-2xl mb-4 text-xl font-extrabold md:text-xl xl:text-2xl dark:text-principal text-left">
                  Precio: <span className="text-black">${l_precio}</span>
                </h1>

                <div className=" sm:space-x-4 pt-5">
                  <label
                    htmlFor={`cantidad${l_id_libro}`}
                    className="text-xl font-extrabold text-principal"
                  >
                    Cantidad:{" "}
                    <input
                      type="number"
                      name={`cantidad${l_id_libro}`}
                      id={`cantidad${l_id_libro}`}
                      className="text-lg font-medium text-black text-center rounded-xl w-14"
                      min={"1"}
                      max={libro.l_cantidad}
                      defaultValue={1}
                      onChange={(e) => {
                        if (e.target.value < 0 || e.target.value > l_cantidad) {
                          e.target.value = 1;
                          return;
                        }

                        setCantidad(e.target.value);
                      }}
                    />
                  </label>
                  {/* <Link
                    to="#"
                    className=" bg-secundario w-full py-3 px-10 rounded-xl text-cuarto  font-bold mt-5 hover:cursor-pointer hover:bg-principal md:w-auto"
                  >
                    Agregar al Carrito
                  </Link> */}
                  <button
                    className="bg-secundario w-full py-3 px-10 rounded-xl text-cuarto  font-bold mt-5 hover:cursor-pointer hover:bg-principal md:w-auto"
                    onClick={handleSubmit}
                  >
                    Agregar al Carrito
                  </button>
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
          </div>

          <div className=" dark:bg-cuarto pt-5 ">
            <div className="grid  pt-5 pb-8 mx-auto lg:gap-8 xl:gap-10 lg:py-10 lg:grid-cols-2 lg:pt-1  bg-cuarto">
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
                  <h2 className="font-black  text-3xl text-center">
                    No Hay Reseñas
                  </h2>
                </>
              )}
            </div>
          </div>
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
