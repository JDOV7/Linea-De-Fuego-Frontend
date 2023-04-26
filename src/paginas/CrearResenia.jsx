import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useLibro from "../hooks/useLibro";
import useAuth from "../hooks/useAuth";
import Alerta from "../components/Alerta";
import libroFondo from "../assets/libroFondo.png";
const CrearResenia = () => {
  const params = useParams();
  const { r_id_libro } = params;
  const { auth, crearResenia, cargando } = useAuth();
  const { libro, resenias, obtenerLibro } = useLibro();
  const [alerta, setAlerta] = useState({});
  const [r_res_cli, setR_res_cli] = useState("");
  //   const [alerta, setAlerta] = useState({});
  //   console.log(r_id_libro);
  if (cargando) {
    return "cargando";
  }
  useEffect(() => {
    obtenerLibro(r_id_libro);
  }, []);
  useEffect(() => {
    // setPerfil(auth);
    setR_res_cli(r_res_cli);
  }, [auth]);
  //   console.log(libro);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(auth);
    try {
      console.log(libro.l_id_libro);
      const resultado = await crearResenia({
        // libro.l_id_libro
        r_id_libro: libro.l_id_libro + "",
        r_res_cli,
      });
      console.log(resultado);
      //   if (!resultado || resultado?.status !== 200) {
      //     throw new Error("Error");
      //   }
      setAlerta({
        msg: "Reseña Correctamente Creada",
        error: false,
      });
    } catch (error) {
      setAlerta({ msg: "No se pudo realizar tu reseña", error: true });
    }

    // setAlerta(resultado);
  };
  const { msg } = alerta;
  return (
    <>
      {libro && libro?.l_nombre ? (
        <>
          {" "}
          <section className=" dark:bg-cuarto w-screen h-screen ">
            <div className="grid max-w-screen-xl pt-20 pb-8 mx-auto lg:gap-8 xl:gap-10 lg:py-10 lg:grid-cols-12 lg:pt-28 items-center justify-center">
              {" "}
              <div className="shadow-2xl rounded-3xl bg-terciario p-10  lg:px-10  lg:col-span-6 text-end justify-end">
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
              </div>
              <div className="shadow-2xl rounded-3xl bg-terciario p-10  lg:px-10  lg:col-span-6 text-start justify-end">
                <form onSubmit={handleSubmit}>
                  <div className="my-3">
                    <label
                      htmlFor=""
                      className="uppercase font-bold text-gray-600 "
                    >
                      Reseña
                    </label>
                    <textarea
                      type="text"
                      className="border w-full p-3 mt-4 bg-cuarto rounded-xl"
                      placeholder="Tu Reseña"
                      name="resenia"
                      value={r_res_cli}
                      onChange={(e) => setR_res_cli(e.target.value)}
                    />
                  </div>

                  <input
                    type="submit"
                    value="Crear"
                    className="bg-secundario w-full py-3 px-10 rounded-xl text-cuarto uppercase font-bold mt-5 hover:cursor-pointer hover:bg-principal md:w-auto "
                  />
                </form>
                {msg && <Alerta alerta={alerta}></Alerta>}
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          {" "}
          <>
            <h2 className="font-black text-3xl text-center pt-24 text-principal">
              No Existe el Libro
            </h2>
          </>
        </>
      )}
    </>
  );
};

export default CrearResenia;
