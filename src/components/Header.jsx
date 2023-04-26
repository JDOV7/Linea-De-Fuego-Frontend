import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
// import { autenticarUsuario } from "../context/AuthProvider";
import AuthContext from "../context/AuthProvider";



const Header = () => {
  const navigate = useNavigate();
  const { auth, setAuth, cargando, cerrarSesion } = useAuth();
  const [u_id_usuario, setU_id_usuario] = useState("");
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
  console.log(u_id_usuario);

  const handleChange = (e) => {
    console.log(e.target.value);
    if (e.target.value === "Cerrar Sesion") {
      cerrarSesion();
    }
    if (e.target.value === "Editar Perfil") {
      navigate("/linea-de-fuego/editar-perfil");
    }
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
      <header className=" w-full  lg:fixed ">
        <nav className="bg-white border-gray-200 py-2.5 dark:bg-principal">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
            <Link to="/" className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-terciario">
                Linea De Fuego
              </span>
            </Link>

            {u_id_usuario ? (
              <div className="lg:flex lg:w-auto lg:order-2 flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <div className="relative w-full lg:max-w-sm">
                  <select
                    className="w-full   border  shadow-sm outline-none appearance-none focus:border-secundario
                  text-cuarto bg-secundario hover:bg-principal focus:ring-4 focus:ring-secundario font-medium rounded-lg text-base   py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-secundario dark:hover:bg-secundario focus:outline-none dark:focus:ring-secundario"
                    onChange={(e) => handleChange(e)}
                  >
                    <option className="text-center rounded-lg ">Yo</option>
                    <option className="text-center rounded-lg ">
                      Editar Perfil
                    </option>
                    <option className="text-center rounded-lg">
                      Historial
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
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-cuarto border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Libros
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-cuarto border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Comics
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-cuarto border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Mangas
                  </a>
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
