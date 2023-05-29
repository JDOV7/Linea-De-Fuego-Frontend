import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/axios";

const Login = () => {
  const { auth, setAuth } = useAuth();
  // console.log(auth);
  const [u_correo, setU_correo] = useState("");
  const [u_contrasena, setU_contrasena] = useState("");
  const [alerta, setAlerta] = useState({});

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("iniciando secion");
    // console.log(u_correo);
    // console.log(u_contrasena);
    // if ([email, password].includes("")) {
    //   setAlerta({ msg: "Todos los campos son obligatorios", error: true });
    //   return;
    // }

    try {
      const respuesta = await clienteAxios.post(
        "/clientes/autenticar-cliente",
        {
          u_correo,
          u_contrasena,
        }
      );
      const {
        data: { u_token },
      } = respuesta;
      // console.log(u_token);
      localStorage.setItem("token", u_token);
      console.log(respuesta.data);
      setAuth(respuesta.data);
      // console.log(auth);
      navigate("/linea-de-fuego");
    } catch (error) {
      // console.log(error);
      setAlerta({ msg: error.response.data.msg, error: true });
    }
  };
  const { msg } = alerta;
  return (
    <>
      <div className="bg-cuarto  w-screen h-screen">
        <Link
          to="/"
          className="block text-center self-center text-5xl font-extrabold  whitespace-nowrap dark:text-principal  p-6"
        >
          Linea De Fuego
        </Link>
        <main className="container mx-auto md:grid md:grid-cols-2  gap-12 pb-10 px-10 items-center">
          <div>
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-principal pb-5">
              Inicia Sesion y Empieza a{" "}
              <span className="text-secundario font-black"> Comprar!</span>
            </h1>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex  items-center justify-center">
              <img
                src={
                  "https://mi-bucket-jdov7-prueba.s3.us-east-2.amazonaws.com/utilidades/libro-de-lectura.png"
                }
                alt="hero image"
              />
            </div>
          </div>
          <div className="mt-10 md:mt-5 shadow-2xl px-10 py-10 rounded-3xl bg-terciario ">
            <form onSubmit={handleSubmit}>
              <div className="my-4 ">
                <label className="uppercase text-gray-600 block text-xl font-bold">
                  Correo
                </label>
                <input
                  type="email"
                  className="border w-full p-3 mt-4 bg-cuarto rounded-xl"
                  placeholder="Correo de Registro"
                  value={u_correo}
                  onChange={(e) => setU_correo(e.target.value)}
                />
              </div>
              <div className="my-4">
                <label className="uppercase text-gray-600 block text-xl font-bold">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="border w-full p-3 mt-4 bg-cuarto rounded-xl"
                  placeholder="Tu Contraseña"
                  value={u_contrasena}
                  onChange={(e) => setU_contrasena(e.target.value)}
                />
              </div>
              <input
                type="submit"
                value="Iniciar Sesion"
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

export default Login;
