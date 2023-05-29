import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import clienteAxios from "../config/axios";
import CardLibro from "../components/CardLibro";

const BuscarLibros = () => {
  const [libros, setLibros] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [info, setInfo] = useState("");

  const params = useParams();
  const navigate = useNavigate();
  const { dato } = params;
  useEffect(() => {
    console.log(params);
    const obtenerLibros = async () => {
      try {
        const url = `/libros/buscar-libros`;
        console.log(url);
        const { data } = await clienteAxios.post(url, { dato });
        console.log(data);
        setLibros(data.body);
      } catch (e) {
        console.log("Errrrooooooooor");
        // setAlerta({ msg: e.response.data.msg, error: true });
      }
      setCargando(false);
    };
    obtenerLibros();
  }, []);

  return (
    <>
      <div className="pt-24">
        <h1 className="text-center text-3xl font-extrabold">{`Resultados de: ${dato} `}</h1>
      </div>
      <div className="flex items-center justify-center p-4">
        <div className=" lg:w-48 text-center  flex items-center justify-center">
          <input
            type="text"
            className="border  p-3 mt-4 bg-cuarto rounded-xl"
            placeholder="Libro o Autor"
            value={info}
            onChange={(e) => setInfo(e.target.value)}
            minLength={1}
            required
          />
        </div>
        <div className="pt-4 px-4 text-center">
          <a
            href={
              info.trim().length !== 0
                ? `/linea-de-fuego/buscar-libros/${info.trim()}`
                : "#"
            }
            className="bg-secundario hover:bg-principal rounded-2xl py-2 px-4 font-extrabold"
          >
            Buscar
          </a>
        </div>
      </div>
      <div className="p-10">
        {libros && libros.length > 0 ? (
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
          <>
            <div className="pt-24">
              <h1 className="text-center text-3xl font-extrabold">{`No hay Acticulos`}</h1>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default BuscarLibros;
