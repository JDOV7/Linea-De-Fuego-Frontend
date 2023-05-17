import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/axios";
import CardLibro from "../components/CardLibro";
const ObtenerLibros = () => {
  const [cargando, setCargando] = useState(true);
  const [alerta, setAlerta] = useState({});
  const [libros, setLibros] = useState([]);
  const params = useParams();
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
      } catch (e) {
        // console.log("Errrrooooooooor");
        // setAlerta({ msg: e.response.data.msg, error: true });
      }
      setCargando(false);
    };
    obtenerLibros();
  }, []);
  console.log(libros);
  return (
    <>
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
          <>adios mundo</>
        )}
      </div>
    </>
  );
};

export default ObtenerLibros;
