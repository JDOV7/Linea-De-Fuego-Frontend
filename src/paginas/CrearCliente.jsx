import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import libro from "../assets/cuento-de-hadas.png";
import clienteAxios from "../config/axios";
import Alerta from "../components/Alerta";
import validarCorreo from "../helpers/validarCorreo";
import validarLongitudCadena from "../helpers/validarLongitudCadena";
import validarNombre from "../helpers/validarNombre";
const CrearCliente = () => {
  const [u_nombre, setU_nombre] = useState("");
  const [u_correo, setU_correo] = useState("");
  const [u_telefono, setU_telefono] = useState("");
  const [u_direcion, setU_direcion] = useState("");
  const [u_contrasena, setU_contrasena] = useState("");

  const [alerta, setAlerta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Enviando formulario");

    if (
      !u_nombre ||
      !validarLongitudCadena(u_nombre, 8) ||
      !validarNombre(u_nombre)
    ) {
      setAlerta({ msg: "Nombre invalido", error: true });
      return;
    }
    //   console.log("Correoooooooooo " + await validarExistenciaCorreo(u_correo.trim()));
    if (
      !u_correo ||
      !validarLongitudCadena(u_correo, 11) ||
      !validarCorreo(u_correo.trim())
    ) {
      setAlerta({ msg: "Correo invalido", error: true });
      return;
    }
    const telefono = +u_telefono;
    if (
      !u_telefono ||
      Number.isNaN(telefono) ||
      !validarLongitudCadena(u_telefono, 10)
    ) {
      setAlerta({ msg: "Telefono invalido", error: true });
      return;
    }

    if (!u_direcion || !validarLongitudCadena(u_direcion.trim(), 10)) {
      setAlerta({ msg: "Direcion invalido", error: true });
      return;
    }

    if (!u_contrasena || !validarLongitudCadena(u_contrasena, 7)) {
      setAlerta({ msg: "Contraseña invalido", error: true });
      return;
    }

    setAlerta({});
    try {
      const url = `/clientes/registrar-cliente`;
      const respuesta = await clienteAxios.post(url, {
        u_nombre,
        u_correo,
        u_telefono,
        u_direcion,
        u_contrasena,
      });
      console.log(respuesta);
      setAlerta({ msg: "Creado correctmanete, revisa tu email", error: false });
    } catch (error) {
      setAlerta({ msg: "No se pudo registrar", error: true });
      return;
    }

    // console.log("despues del if");
  };
  const { msg } = alerta;
  return (
    <>
      <div className="bg-cuarto  ">
        <Link
          to="/"
          className="block text-center self-center text-5xl font-extrabold  whitespace-nowrap dark:text-principal  p-6"
        >
          Linea De Fuego
        </Link>
        <main className="container mx-auto md:grid md:grid-cols-2  gap-12 pb-10 px-10 items-center">
          <div>
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-principal pb-5">
              Registrate y empieza a{" "}
              <span className="text-secundario font-black"> Comprar!</span>
            </h1>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex  items-center justify-center">
              <img src={libro} alt="hero image" />
            </div>
          </div>
          <div className="mt-10 md:mt-5 shadow-2xl px-10 py-10 rounded-3xl bg-terciario ">
            <form onSubmit={handleSubmit}>
              <div className="my-3">
                <label
                  htmlFor=""
                  className="uppercase font-bold text-gray-600 "
                >
                  Nombre
                </label>
                <input
                  type="text"
                  className="border w-full p-3 mt-4 bg-cuarto rounded-xl"
                  placeholder="Nombre de Registro"
                  name="nombre"
                  value={u_nombre}
                  onChange={(e) => setU_nombre(e.target.value)}
                />
              </div>
              <div className="my-3">
                <label
                  htmlFor=""
                  className="uppercase font-bold text-gray-600 "
                >
                  Correo
                </label>
                <input
                  type="email"
                  className="border w-full p-3 mt-4 bg-cuarto rounded-xl"
                  placeholder="Correo de Registro"
                  name="correo"
                  value={u_correo}
                  onChange={(e) => setU_correo(e.target.value)}
                />
              </div>
              <div className="my-3">
                <label
                  htmlFor=""
                  className="uppercase font-bold text-gray-600 "
                >
                  Telefono
                </label>
                <input
                  type="text"
                  className="border w-full p-3 mt-4 bg-cuarto rounded-xl"
                  placeholder="Telefono de Registro"
                  name="telefono"
                  value={u_telefono}
                  onChange={(e) => setU_telefono(e.target.value)}
                />
              </div>
              <div className="my-3">
                <label
                  htmlFor=""
                  className="uppercase font-bold text-gray-600 "
                >
                  Direcion
                </label>
                <input
                  type="text"
                  className="border w-full p-3 mt-4 bg-cuarto rounded-xl"
                  placeholder="Direcion de Registro"
                  name="u_direcion"
                  value={u_direcion}
                  onChange={(e) => setU_direcion(e.target.value)}
                />
              </div>
              <div className="my-3">
                <label
                  htmlFor=""
                  className="uppercase font-bold text-gray-600 "
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  className="border w-full p-3 mt-4 bg-cuarto rounded-xl"
                  placeholder="Contraseña de Registro"
                  name="contrasena"
                  value={u_contrasena}
                  onChange={(e) => setU_contrasena(e.target.value)}
                />
              </div>

              <input
                type="submit"
                value="Registrarse"
                className="bg-secundario w-full py-3 px-10 rounded-xl text-cuarto uppercase font-bold mt-5 hover:cursor-pointer hover:bg-principal md:w-auto "
              />
            </form>
            {msg && <Alerta alerta={alerta} />}
            <nav className="mt-5 lg:flex lg:justify-between">
              <Link
                to="/registrar"
                className="block text-center my-5 text-gray-500"
              >
                ¿No tienes una cuenta? Registrate
              </Link>
              <Link
                to="/olvide-password"
                className="block text-center my-5 text-gray-500"
              >
                Olvide mi Password
              </Link>
            </nav>
          </div>
        </main>
      </div>
    </>
  );
};

export default CrearCliente;
