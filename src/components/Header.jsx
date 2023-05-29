import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useCarrito from "../hooks/useCarrito";
// import { autenticarUsuario } from "../context/AuthProvider";
import AuthContext from "../context/AuthProvider";

const Header = () => {
  const navigate = useNavigate();
  const { auth, setAuth, cargando, cerrarSesion } = useAuth();
  const [u_id_usuario, setU_id_usuario] = useState("");
  const { carrito, setCarrito, agregarAlCarrito, eliminarProductoCarrito } =
    useCarrito();
  // console.log(auth);
  // if (auth && auth.u_id_usuario) {
  //   // u_id_usuario = auth.u_id_usuario;
  //   setU_id_usuario(auth.u_id_usuario);
  // } else {
  //   setU_id_usuario("");
  // }
  // let bId = true;
  if (cargando) {
    return "cargando";
  }
  useEffect(() => {
    const obtenerId = async () => {
      if (auth && auth.u_id_usuario) {
        // u_id_usuario = auth.u_id_usuario;
        setU_id_usuario(auth.u_id_usuario);
      } else {
        setU_id_usuario("");
      }
    };
    obtenerId();
    // setPerfil(auth);
  }, [auth]);

  useEffect(() => {
    // console.log("nuevo producto");
    console.log(carrito);
  }, [carrito]);
  // console.log(u_id_usuario);

  const handleChange = (e) => {
    console.log(e.target.value);
    if (e.target.value === "Cerrar Sesion") {
      cerrarSesion();
    }
    if (e.target.value === "Editar Perfil") {
      navigate("/linea-de-fuego/editar-perfil");
    } else if (e.target.value === "Historial de Compras") {
      navigate("/linea-de-fuego/historial-compras");
    } else if (e.target.value === "Mis Favoritos") {
      navigate("/linea-de-fuego/mis-favoritos");
    }
  };
  const handleChangeCarrito = (e, l_id_libro) => {
    e.preventDefault();
    console.log(`quitando del carrito: ${l_id_libro}`);
    eliminarProductoCarrito(l_id_libro);
  };
  const handleSubmitComprar = (e) => {
    // console.log("comprando");
    navigate("/linea-de-fuego/comprar-productos");
  };
  // const { autenticarUsuario } = useAuth();
  // const bId = true;
  // const b = await autenticarUsuario();
  // if (autenticarUsuario) {
  // const _id = auth.data?.body?.u_id_usuario;
  // console.log(_id);
  // if (_id) {
  //   // bId = true;
  // } else {
  //   // bId = false;
  // }
  // console.log(id);
  // }

  // const bRegistrado = true;
  return (
    <>
      <header className=" w-full  fixed z-50  ">
        <nav className="bg-white border-gray-200 py-2.5 dark:bg-principal">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
            {/* <Link to="/" className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-terciario">
                Linea De Fuego
              </span>
            </Link> */}
            <div className="flex items-center">
              <Link to="/" className="">
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-terciario">
                  Linea De Fuego
                </span>
              </Link>
              <div className=" ">
                <div className="group   ">
                  <div className="   bg-white">
                    <img
                      src={
                        "https://mi-bucket-jdov7-prueba.s3.us-east-2.amazonaws.com/utilidades/carrito-de-compras.png"
                      }
                      className="h-12 "
                    />
                  </div>
                  <div className="invisible fixed bg-cuarto   py-3 rounded-2xl  shadow-xl group-hover:visible left-64  transform -translate-x-1/2 z-50">
                    {/* <div className="grid grid-cols-3"> */}
                    {carrito.map((articulo, index) => {
                      const {
                        l_id_libro,
                        l_nombre,
                        l_autor,
                        l_precio,
                        l_cantidad,
                      } = articulo;
                      return (
                        // <div className="  flex  " key={index}>
                        <div
                          className="grid grid-cols-4 border-b-2 pb-1 pt-2 border-b-secundario hover:bg-principal hover:bg-opacity-20 rounded-2xl"
                          key={index}
                        >
                          <div className="col-span-2 ">
                            <p className="text-lg text-center font-extrabold  px-2 ">
                              {l_nombre}
                            </p>
                            <p className="text-sm text-left font-normal  pl-4 ">
                              {l_autor}
                            </p>
                          </div>
                          <div className="col-span-1">
                            <p className="text-lg text-center font-bold text-principal  pr-4  ">
                              Cant:{" "}
                              <span className="font-extrabold text-black">
                                {l_cantidad}
                              </span>
                            </p>
                            <p className="text-sm font-normal text-right  pr-4  ">
                              {`${l_precio}$`}
                            </p>
                          </div>
                          <div className="col-span-1 items-end text-right pr-4">
                            <button
                              className="py-2 px-4 text-cuarto  bg-principal hover:bg-secundario  text-lg font-bold rounded-2xl"
                              onClick={(e) => {
                                handleChangeCarrito(e, l_id_libro);
                              }}
                            >
                              X
                            </button>
                          </div>
                        </div>
                        // </div>
                      );
                      // return <CardLibro key={articulo} datos={libro}></CardLibro>;
                    })}

                    {carrito.length > 0 && (
                      <>
                        <div className="pt-2 items-center justify-center text-center">
                          <button
                            className="bg-secundario  hover:bg-principal rounded-2xl py-2 px-4 font-extrabold"
                            onClick={handleSubmitComprar}
                          >
                            Comprar
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* <img
              src={carrito}
              className=" flex items-center justify-center h-12 bg-terciario px-5  py-1 rounded-3xl hover:bg-secundario"
            /> */}
            {/* <div className=" ">
              <div className="group  cursor-pointer ">
                <div className="   bg-white">
                  <img
                    src={carritoImg}
                    className="h-12  block py-2 pl-3 pr-4 text-cuarto border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 "
                    onClick={(e) => {
                      handleChangeCarrito(e);
                    }}
                  />
                </div>
                <div className="invisible fixed bg-terciario  py-3 rounded-2xl  shadow-xl group-hover:visible left-1/2 transform -translate-x-1/2 z-50">
                  {carrito.map((articulo, index) => {
                    return (
                      <div className="bg-principal    " key={index}>
                        <p className="text-lg text-center     bg-secundario">
                          {articulo.l_nombre}
                        </p>
                      </div>
                    );
                    // return <CardLibro key={articulo} datos={libro}></CardLibro>;
                  })}
                </div>
              </div>
            </div> */}
            {u_id_usuario ? (
              <div className="lg:flex lg:w-auto lg:order-2 flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <div className="relative w-full lg:max-w-sm">
                  <select
                    className="w-full   border  shadow-sm outline-none appearance-none focus:border-secundario
                  text-cuarto bg-secundario hover:bg-principal focus:ring-4 focus:ring-secundario font-medium rounded-lg text-base   py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-secundario dark:hover:bg-secundario focus:outline-none dark:focus:ring-secundario"
                    onChange={(e) => handleChange(e)}
                  >
                    <option className="text-center rounded-lg ">
                      {auth.u_correo}
                    </option>
                    <option className="text-center rounded-lg ">
                      Editar Perfil
                    </option>
                    <option className="text-center rounded-lg ">
                      Mis Favoritos
                    </option>
                    <option className="text-center rounded-lg">
                      Historial de Compras
                    </option>
                    <option className="text-center rounded-lg">
                      Cerrar Sesion
                    </option>
                  </select>
                </div>
              </div>
            ) : (
              <div className="lg:flex lg:w-auto lg:order-2 flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <div className="flex items-center lg:order-2">
                  {/* <a
                    href="#"
                    className="text-cuarto bg-secundario hover:bg-principal focus:ring-4 focus:ring-secundario font-medium rounded-lg text-base  lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-secundario dark:hover:bg-secundario focus:outline-none dark:focus:ring-secundario "
                  >
                    Iniciar Seccion
                  </a> */}
                  <Link
                    to="/login"
                    className="text-cuarto bg-secundario hover:bg-principal focus:ring-4 focus:ring-secundario font-medium rounded-lg text-base  lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-secundario dark:hover:bg-secundario focus:outline-none dark:focus:ring-secundario "
                  >
                    Iniciar Sesion
                  </Link>
                </div>
                <div className="flex items-center lg:order-2">
                  <Link
                    to="/crear-cuenta"
                    className="text-cuarto bg-secundario hover:bg-principal focus:ring-4 focus:ring-secundario font-medium rounded-lg text-base  lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-secundario dark:hover:bg-secundario focus:outline-none dark:focus:ring-secundario "
                  >
                    Crear Cuenta
                  </Link>
                </div>
              </div>
            )}
            <div
              className="items-center justify-between  w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-cuarto"
                    aria-current="page"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  {/* <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-cuarto border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Libros
                  </a> */}

                  <div className="mx-auto flex  items-center justify-center ">
                    <div className="group relative cursor-pointer ">
                      <div className="flex items-center justify-between space-x-5 bg-white px-4">
                        <a className="menu-hover   block py-2 pl-3 pr-4 text-cuarto border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                          Libros
                        </a>
                      </div>
                      <div className="invisible absolute bg-terciario flex py-3 rounded-2xl px-4 shadow-xl group-hover:visible left-1/2 transform -translate-x-1/2 z-50">
                        <a
                          href="/linea-de-fuego/obtener-libros/Libro/Belico"
                          className="my-2 block py-1 border-b-2 font-semibold hover:text-principal hover:border-principal hover:text-lg hover:font-extrabold md:mx-2"
                        >
                          Belico
                        </a>

                        <a
                          href="/linea-de-fuego/obtener-libros/Libro/Ciencia Ficcion"
                          className="my-2 block py-1 border-b-2 font-semibold hover:text-principal hover:border-principal hover:text-lg hover:font-extrabold md:mx-2"
                        >
                          Ciencia Ficción
                        </a>
                        <a
                          href="/linea-de-fuego/obtener-libros/Libro/Drama"
                          className="my-2 block py-1 border-b-2 font-semibold hover:text-principal hover:border-principal hover:text-lg hover:font-extrabold md:mx-2"
                        >
                          Drama
                        </a>
                        <a
                          href="/linea-de-fuego/obtener-libros/Libro/Erotico"
                          className="my-2 block py-1 border-b-2 font-semibold hover:text-principal hover:border-principal hover:text-lg hover:font-extrabold md:mx-2"
                        >
                          Erotico
                        </a>
                        <a
                          href="/linea-de-fuego/obtener-libros/Libro/Fantasia"
                          className="my-2 block py-1 border-b-2 font-semibold hover:text-principal hover:border-principal hover:text-lg hover:font-extrabold md:mx-2"
                        >
                          Fantasía
                        </a>

                        <a
                          href="/linea-de-fuego/obtener-libros/Libro/Misterio"
                          className="my-2 block py-1 border-b-2 font-semibold hover:text-principal hover:border-principal hover:text-lg hover:font-extrabold md:mx-2"
                        >
                          Misterio
                        </a>
                        <a
                          href="/linea-de-fuego/obtener-libros/Libro/Romance"
                          className="my-2 block py-1 border-b-2 font-semibold hover:text-principal hover:border-principal hover:text-lg hover:font-extrabold md:mx-2"
                        >
                          Romance
                        </a>
                        <a
                          href="/linea-de-fuego/obtener-libros/Libro/Suspenso"
                          className="my-2 block py-1 border-b-2 font-semibold hover:text-principal hover:border-principal hover:text-lg hover:font-extrabold md:mx-2"
                        >
                          Suspenso
                        </a>
                        <a
                          href="/linea-de-fuego/obtener-libros/Libro/Terror"
                          className="my-2 block py-1 border-b-2 font-semibold hover:text-principal hover:border-principal hover:text-lg hover:font-extrabold md:mx-2"
                        >
                          Terror
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="mx-auto flex  items-center justify-center ">
                    <div className="group relative cursor-pointer ">
                      <div className="flex items-center justify-between space-x-5 bg-white px-4">
                        <a className="menu-hover   block py-2 pl-3 pr-4 text-cuarto border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                          Comics
                        </a>
                      </div>
                      <div className="invisible absolute bg-terciario flex py-3 rounded-2xl px-4 shadow-xl group-hover:visible left-1/2 transform -translate-x-1/2 z-50">
                        <a className="my-2 block py-1 border-b-2 font-semibold hover:text-principal hover:border-principal hover:text-lg hover:font-extrabold md:mx-2">
                          Belico
                        </a>

                        <a
                          href="/linea-de-fuego/obtener-libros/Comic/Ciencia Ficcion"
                          className="my-2 block py-1 border-b-2 font-semibold hover:text-principal hover:border-principal hover:text-lg hover:font-extrabold md:mx-2"
                        >
                          Ciencia Ficción
                        </a>
                        <a
                          href="/linea-de-fuego/obtener-libros/Comic/Drama"
                          className="my-2 block py-1 border-b-2 font-semibold hover:text-principal hover:border-principal hover:text-lg hover:font-extrabold md:mx-2"
                        >
                          Drama
                        </a>
                        <a
                          href="/linea-de-fuego/obtener-libros/Comic/Erotico"
                          className="my-2 block py-1 border-b-2 font-semibold hover:text-principal hover:border-principal hover:text-lg hover:font-extrabold md:mx-2"
                        >
                          Erótico
                        </a>
                        <a
                          href="/linea-de-fuego/obtener-libros/Comic/Fantasia"
                          className="my-2 block py-1 border-b-2 font-semibold hover:text-principal hover:border-principal hover:text-lg hover:font-extrabold md:mx-2"
                        >
                          Fantasía
                        </a>
                        <a
                          href="/linea-de-fuego/obtener-libros/Comic/Misterio"
                          className="my-2 block py-1 border-b-2 font-semibold hover:text-principal hover:border-principal hover:text-lg hover:font-extrabold md:mx-2"
                        >
                          Misterio
                        </a>
                        <a
                          href="/linea-de-fuego/obtener-libros/Comic/Romance"
                          className="my-2 block py-1 border-b-2 font-semibold hover:text-principal hover:border-principal hover:text-lg hover:font-extrabold md:mx-2"
                        >
                          Romance
                        </a>
                        <a
                          href="/linea-de-fuego/obtener-libros/Comic/Suspenso"
                          className="my-2 block py-1 border-b-2 font-semibold hover:text-principal hover:border-principal hover:text-lg hover:font-extrabold md:mx-2"
                        >
                          Suspenso
                        </a>
                        <a
                          href="/linea-de-fuego/obtener-libros/Comic/Terror"
                          className="my-2 block py-1 border-b-2 font-semibold hover:text-principal hover:border-principal hover:text-lg hover:font-extrabold md:mx-2"
                        >
                          Terror
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="mx-auto flex  items-center justify-center ">
                    <div className="group relative cursor-pointer ">
                      <div className="flex items-center justify-between space-x-5 bg-white px-4">
                        <a className="menu-hover   block py-2 pl-3 pr-4 text-cuarto border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                          Mangas
                        </a>
                      </div>
                      <div className="invisible absolute bg-terciario flex py-3 rounded-2xl px-4 shadow-xl group-hover:visible left-1/2 transform -translate-x-1/2 z-50">
                        <a className="my-2 block py-1 border-b-2 font-semibold hover:text-principal hover:border-principal hover:text-lg hover:font-extrabold md:mx-2">
                          Belico
                        </a>

                        <a
                          href="/linea-de-fuego/obtener-libros/Manga/Ciencia Ficcion"
                          className="my-2 block py-1 border-b-2 font-semibold hover:text-principal hover:border-principal hover:text-lg hover:font-extrabold md:mx-2"
                        >
                          Ciencia Ficción
                        </a>
                        <a
                          href="/linea-de-fuego/obtener-libros/Manga/Drama"
                          className="my-2 block py-1 border-b-2 font-semibold hover:text-principal hover:border-principal hover:text-lg hover:font-extrabold md:mx-2"
                        >
                          Drama
                        </a>
                        <a
                          href="/linea-de-fuego/obtener-libros/Manga/Erotico"
                          className="my-2 block py-1 border-b-2 font-semibold hover:text-principal hover:border-principal hover:text-lg hover:font-extrabold md:mx-2"
                        >
                          Erótico
                        </a>
                        <a
                          href="/linea-de-fuego/obtener-libros/Manga/Fantasia"
                          className="my-2 block py-1 border-b-2 font-semibold hover:text-principal hover:border-principal hover:text-lg hover:font-extrabold md:mx-2"
                        >
                          Fantasía
                        </a>
                        <a
                          href="/linea-de-fuego/obtener-libros/Manga/Misterio"
                          className="my-2 block py-1 border-b-2 font-semibold hover:text-principal hover:border-principal hover:text-lg hover:font-extrabold md:mx-2"
                        >
                          Misterio
                        </a>
                        <a
                          href="/linea-de-fuego/obtener-libros/Manga/Romance"
                          className="my-2 block py-1 border-b-2 font-semibold hover:text-principal hover:border-principal hover:text-lg hover:font-extrabold md:mx-2"
                        >
                          Romance
                        </a>
                        <a
                          href="/linea-de-fuego/obtener-libros/Manga/Suspenso"
                          className="my-2 block py-1 border-b-2 font-semibold hover:text-principal hover:border-principal hover:text-lg hover:font-extrabold md:mx-2"
                        >
                          Suspenso
                        </a>
                        <a
                          href="/linea-de-fuego/obtener-libros/Manga/Terror"
                          className="my-2 block py-1 border-b-2 font-semibold hover:text-principal hover:border-principal hover:text-lg hover:font-extrabold md:mx-2"
                        >
                          Terror
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
