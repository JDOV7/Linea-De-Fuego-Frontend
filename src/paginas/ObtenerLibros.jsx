import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/axios";
import CardLibro from "../components/CardLibro";

import fs from "fs";
const ObtenerLibros = () => {
  const [cargando, setCargando] = useState(true);
  const [alerta, setAlerta] = useState({});
  const [libros, setLibros] = useState([]);
  const [dato, setDato] = useState("");

  const params = useParams();
  const navigate = useNavigate();
  // console.log(params);
  const { l_genero, l_tipo } = params;
  useEffect(() => {
    const obtenerLibros = async () => {
      try {
        const url = `/libros/obtener-libros/${l_genero}`;
        const { data } = await clienteAxios.post(url, { l_tipo });
        // console.log(data);
        setLibros(data.body);
        // console.log(`datooooooooos: ${data}`);
        // setCuentaConfirmada(true);
        // setAlerta({ msg: data.msg, error: false });

        // const url2 = `/libros/subir-objecto`;
        // const repsuesta = await clienteAxios.post(url2, {
        //   texto: "hola desde linea de fuego 2",
        //   nombre: "texto7.txt",
        // });
        // console.log(repsuesta.data);

        // const imageURL =
        //   "http://localhost:5173/src/assets/libros/donQuijoteDeLaMancha.jpg";
        // const res = await fetch(imageURL);
        // console.log(res);
        // const x = await res.body.getReader().read();
        // console.log(x.value);
        // // const blob = await res.buffer();
        // // console.log(blob);
        // const url2 = `/libros/subir-objecto`;
        // const repsuesta = await clienteAxios.post(url2, {
        //   texto: x.value,
        //   nombre: "img.txt",
        // });
        // console.log(repsuesta.data);
        // fs.readFileSync(imageURL);
      } catch (e) {
        console.log("Errrrooooooooor");
        // setAlerta({ msg: e.response.data.msg, error: true });
      }
      setCargando(false);
    };
    obtenerLibros();
  }, []);

  // console.log(libros);
  return (
    <>
      <div className="pt-20">
        <h1 className="text-center text-3xl font-extrabold">{`${l_tipo}s De ${l_genero}`}</h1>
      </div>
      <div className="flex items-center justify-center p-4">
        <div className=" lg:w-48 text-center  flex items-center justify-center">
          <input
            type="text"
            className="border  p-3 mt-4 bg-cuarto rounded-xl"
            placeholder="Libro o Autor"
            value={dato}
            onChange={(e) => setDato(e.target.value)}
            minLength={1}
            required
          />
        </div>
        <div className="pt-4 px-4 text-center">
          <a
            href={
              dato.trim().length !== 0
                ? `/linea-de-fuego/buscar-libros/${dato.trim()}`
                : "#"
            }
            className="bg-secundario hover:bg-principal rounded-2xl py-2 px-4 font-extrabold"
          >
            Buscar
          </a>
        </div>
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
    </>
  );
};

export default ObtenerLibros;
