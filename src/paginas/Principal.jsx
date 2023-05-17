import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
// import { autenticarUsuario } from "../context/AuthProvider";
import useAuth from "../hooks/useAuth";
import AuthContext from "../context/AuthProvider";
import Header from "../components/Header";
import libro from "../assets/libros/1984.jpg";
import libro2 from "../assets/libros/caidaCartago.jpg";
import libro3 from "../assets/libros/elImperioRomano.jpg";
import libro4 from "../assets/libros/fah451.jpg";
import libro5 from "../assets/libros/metro2033.jpg";
import libro6 from "../assets/libros/rebelionEnLaGranja.jpg";
import libro7 from "../assets/libros/tormentaEspadas.jpg";
import libro8 from "../assets/libros/unMundoFeliz.jpg";
// import Footer from "../components/Footer";

const Principal = () => {
  const { auth, cargando } = useAuth();
  console.log(libro);
  const li = "/src/assets/libros/1984.jpg";
  // console.log(auth);
  // console.log(cargando);
  if (cargando) {
    return "cargando";
  }
  return (
    <>
      {/* <h1>Hola pinciapl</h1> */}
      <Header></Header>

      <div className="p-20 grid  mx-auto lg:grid-cols-12">
        <div className=" col-span-3 pb-7 flex items-center justify-center">
          <div className="bg-terciario p-4 rounded-2xl shadow-2xl">
            <div className="flex items-center justify-center">
              <img
                src={li}
                alt="hero image"
                className="items-center justify-center"
              />
              <div className="absolute py-28 px-5 bg-principal  bg-opacity-0 text-transparent hover:text-cuarto hover:bg-opacity-50">
                <Link
                  to="/linea-de-fuego/obtener-libro/3"
                  className="text-2xl font-extrabold hover:text-black"
                >
                  Ver Detalles
                </Link>
              </div>
            </div>
            <div className="p-3">
              <p className="text-xl font-extrabold text-principal text-center">
                Titulo:{" "}
                <span className="text-lg font-medium text-black">1984</span>
              </p>
              <p className="text-xl font-extrabold text-principal">
                Precio:{" "}
                <span className="text-lg font-medium text-black">234.56</span>
              </p>
              <div className="pt-2">
                <label
                  htmlFor="cantidad"
                  className="text-xl font-extrabold text-principal"
                >
                  Cantidad:{" "}
                  <input
                    type="number"
                    name="cantidad"
                    id="cantidad"
                    className="text-lg font-medium text-black text-center rounded-xl w-14"
                    min={"1"}
                    defaultValue={1}
                  />
                </label>
              </div>
              <div className="pt-2 text-center">
                <button className="bg-secundario hover:bg-principal rounded-2xl p-2 font-extrabold">
                  Agregar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-3 pb-7 flex items-center justify-center">
          <div className="bg-terciario p-4 rounded-2xl shadow-2xl">
            <div className="flex items-center justify-center">
              <img
                src={libro2}
                alt="hero image"
                className="items-center justify-center"
              />
              <div className="absolute py-28 px-5 bg-principal  bg-opacity-0 text-transparent hover:text-cuarto hover:bg-opacity-50">
                <Link
                  to="/linea-de-fuego/obtener-libro/3"
                  className="text-2xl font-extrabold hover:text-black"
                >
                  Ver Detalles
                </Link>
              </div>
            </div>
            <div className="p-3">
              <p className="text-xl font-extrabold text-principal text-center">
                Titulo:{" "}
                <span className="text-lg font-medium text-black">1984</span>
              </p>
              <p className="text-xl font-extrabold text-principal">
                Precio:{" "}
                <span className="text-lg font-medium text-black">234.56</span>
              </p>
              <div className="pt-2">
                <label
                  htmlFor="cantidad"
                  className="text-xl font-extrabold text-principal"
                >
                  Cantidad:{" "}
                  <input
                    type="number"
                    name="cantidad"
                    id="cantidad"
                    className="text-lg font-medium text-black text-center rounded-xl w-14"
                    min={"1"}
                    defaultValue={1}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-3 pb-7 flex items-center justify-center">
          <div className="bg-terciario p-4 rounded-2xl shadow-2xl">
            <div className="flex items-center justify-center">
              <img
                src={libro3}
                alt="hero image"
                className="items-center justify-center"
              />
              <div className="absolute py-28 px-5 bg-principal  bg-opacity-0 text-transparent hover:text-cuarto hover:bg-opacity-50">
                <Link
                  to="/linea-de-fuego/obtener-libro/3"
                  className="text-2xl font-extrabold hover:text-black"
                >
                  Ver Detalles
                </Link>
              </div>
            </div>
            <div className="p-3">
              <p className="text-xl font-extrabold text-principal text-center">
                Titulo:{" "}
                <span className="text-lg font-medium text-black">1984</span>
              </p>
              <p className="text-xl font-extrabold text-principal">
                Precio:{" "}
                <span className="text-lg font-medium text-black">234.56</span>
              </p>
              <div className="pt-2">
                <label
                  htmlFor="cantidad"
                  className="text-xl font-extrabold text-principal"
                >
                  Cantidad:{" "}
                  <input
                    type="number"
                    name="cantidad"
                    id="cantidad"
                    className="text-lg font-medium text-black text-center rounded-xl w-14"
                    min={"1"}
                    defaultValue={1}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-3 pb-7 flex items-center justify-center">
          <div className="bg-terciario p-4 rounded-2xl shadow-2xl">
            <div className="flex items-center justify-center">
              <img
                src={libro4}
                alt="hero image"
                className="items-center justify-center"
              />
              <div className="absolute py-28 px-5 bg-principal  bg-opacity-0 text-transparent hover:text-cuarto hover:bg-opacity-50">
                <Link
                  to="/linea-de-fuego/obtener-libro/3"
                  className="text-2xl font-extrabold hover:text-black"
                >
                  Ver Detalles
                </Link>
              </div>
            </div>
            <div className="p-3">
              <p className="text-xl font-extrabold text-principal text-center">
                Titulo:{" "}
                <span className="text-lg font-medium text-black">1984</span>
              </p>
              <p className="text-xl font-extrabold text-principal">
                Precio:{" "}
                <span className="text-lg font-medium text-black">234.56</span>
              </p>
              <div className="pt-2">
                <label
                  htmlFor="cantidad"
                  className="text-xl font-extrabold text-principal"
                >
                  Cantidad:{" "}
                  <input
                    type="number"
                    name="cantidad"
                    id="cantidad"
                    className="text-lg font-medium text-black text-center rounded-xl w-14"
                    min={"1"}
                    defaultValue={1}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-3 pb-7 flex items-center justify-center">
          <div className="bg-terciario p-4 rounded-2xl shadow-2xl">
            <div className="flex items-center justify-center">
              <img
                src={libro5}
                alt="hero image"
                className="items-center justify-center"
              />
              <div className="absolute py-28 px-5 bg-principal  bg-opacity-0 text-transparent hover:text-cuarto hover:bg-opacity-50">
                <Link
                  to="/linea-de-fuego/obtener-libro/3"
                  className="text-2xl font-extrabold hover:text-black"
                >
                  Ver Detalles
                </Link>
              </div>
            </div>
            <div className="p-3">
              <p className="text-xl font-extrabold text-principal text-center">
                Titulo:{" "}
                <span className="text-lg font-medium text-black">1984</span>
              </p>
              <p className="text-xl font-extrabold text-principal">
                Precio:{" "}
                <span className="text-lg font-medium text-black">234.56</span>
              </p>
              <div className="pt-2">
                <label
                  htmlFor="cantidad"
                  className="text-xl font-extrabold text-principal"
                >
                  Cantidad:{" "}
                  <input
                    type="number"
                    name="cantidad"
                    id="cantidad"
                    className="text-lg font-medium text-black text-center rounded-xl w-14"
                    min={"1"}
                    defaultValue={1}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-3 pb-7 flex items-center justify-center">
          <div className="bg-terciario p-4 rounded-2xl shadow-2xl">
            <div className="flex items-center justify-center">
              <img
                src={libro6}
                alt="hero image"
                className="items-center justify-center"
              />
              <div className="absolute py-28 px-5 bg-principal  bg-opacity-0 text-transparent hover:text-cuarto hover:bg-opacity-50">
                <Link
                  to="/linea-de-fuego/obtener-libro/3"
                  className="text-2xl font-extrabold hover:text-black"
                >
                  Ver Detalles
                </Link>
              </div>
            </div>
            <div className="p-3">
              <p className="text-xl font-extrabold text-principal text-center">
                Titulo:{" "}
                <span className="text-lg font-medium text-black">1984</span>
              </p>
              <p className="text-xl font-extrabold text-principal">
                Precio:{" "}
                <span className="text-lg font-medium text-black">234.56</span>
              </p>
              <div className="pt-2">
                <label
                  htmlFor="cantidad"
                  className="text-xl font-extrabold text-principal"
                >
                  Cantidad:{" "}
                  <input
                    type="number"
                    name="cantidad"
                    id="cantidad"
                    className="text-lg font-medium text-black text-center rounded-xl w-14"
                    min={"1"}
                    defaultValue={1}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-3 pb-7 flex items-center justify-center">
          <div className="bg-terciario p-4 rounded-2xl shadow-2xl">
            <div className="flex items-center justify-center">
              <img
                src={libro7}
                alt="hero image"
                className="items-center justify-center"
              />
              <div className="absolute py-28 px-5 bg-principal  bg-opacity-0 text-transparent hover:text-cuarto hover:bg-opacity-50">
                <Link
                  to="/linea-de-fuego/obtener-libro/3"
                  className="text-2xl font-extrabold hover:text-black"
                >
                  Ver Detalles
                </Link>
              </div>
            </div>
            <div className="p-3">
              <p className="text-xl font-extrabold text-principal text-center">
                Titulo:{" "}
                <span className="text-lg font-medium text-black">1984</span>
              </p>
              <p className="text-xl font-extrabold text-principal">
                Precio:{" "}
                <span className="text-lg font-medium text-black">234.56</span>
              </p>
              <div className="pt-2">
                <label
                  htmlFor="cantidad"
                  className="text-xl font-extrabold text-principal"
                >
                  Cantidad:{" "}
                  <input
                    type="number"
                    name="cantidad"
                    id="cantidad"
                    className="text-lg font-medium text-black text-center rounded-xl w-14"
                    min={"1"}
                    defaultValue={1}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-3 pb-7 flex items-center justify-center">
          <div className="bg-terciario p-4 rounded-2xl shadow-2xl">
            <div className="flex items-center justify-center">
              <img
                src={libro8}
                alt="hero image"
                className="items-center justify-center"
              />
              <div className="absolute py-28 px-5 bg-principal  bg-opacity-0 text-transparent hover:text-cuarto hover:bg-opacity-50">
                <Link
                  to="/linea-de-fuego/obtener-libro/3"
                  className="text-2xl font-extrabold hover:text-black"
                >
                  Ver Detalles
                </Link>
              </div>
            </div>
            <div className="p-3">
              <p className="text-xl font-extrabold text-principal text-center">
                Titulo:{" "}
                <span className="text-lg font-medium text-black">1984</span>
              </p>
              <p className="text-xl font-extrabold text-principal">
                Precio:{" "}
                <span className="text-lg font-medium text-black">234.56</span>
              </p>
              <div className="pt-2">
                <label
                  htmlFor="cantidad"
                  className="text-xl font-extrabold text-principal"
                >
                  Cantidad:{" "}
                  <input
                    type="number"
                    name="cantidad"
                    id="cantidad"
                    className="text-lg font-medium text-black text-center rounded-xl w-14"
                    min={"1"}
                    defaultValue={1}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Header></Header> */}
      {/* <div>
        <div>
          <h1>Hola Libreria</h1>
        </div>
      </div> */}
    </>
  );
};

export default Principal;
