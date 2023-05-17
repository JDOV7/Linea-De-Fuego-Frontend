import React from "react";
import { Link } from "react-router-dom";
const CardLibro = ({ datos }) => {
  const { l_id_libro, l_nombre, l_precio, l_portada } = datos;
  console.log(datos);
  return (
    <div className=" col-span-3 pb-7 flex items-center justify-center">
      <div className="bg-terciario p-4 rounded-2xl shadow-2xl">
        <div className="flex items-center justify-center">
          <img src={l_portada} className="items-center justify-center" />
          <div className="absolute py-28 px-5 bg-principal  bg-opacity-0 text-transparent hover:text-cuarto hover:bg-opacity-50">
            <Link
              to={`/linea-de-fuego/obtener-libro/${l_id_libro}`}
              className="text-2xl font-extrabold hover:text-black"
            >
              Ver Detalles
            </Link>
          </div>
        </div>
        <div className="p-3">
          <p className="text-xl font-extrabold text-principal text-center">
            Titulo:{" "}
            <span className="text-lg font-medium text-black">{l_nombre}</span>
          </p>
          <p className="text-xl font-extrabold text-principal">
            Precio:{" "}
            <span className="text-lg font-medium text-black">{l_precio}</span>
          </p>
          <div className="pt-2">
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
                defaultValue={1}
              />
            </label>
          </div>
          <div className="pt-4 text-center">
            <button className="bg-secundario hover:bg-principal rounded-2xl py-2 px-4 font-extrabold">
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
    // <div className=" mx-5 my-5 bg-terciario shadow-2xl px-5 py-5 rounded-xl">
    //   <div className="grid   lg:grid-cols-2   bg-terciario">
    //     <p className="font-bold  text-principal text-lg my-2">
    //       Nombre:{" "}
    //       <span className="font-normal normal-case text-black">{u_nombre}</span>
    //     </p>
    //     <p className="font-bold  text-principal text-lg my-2">
    //       Fecha:{" "}
    //       <span className="font-normal normal-case text-black">{r_fecha}</span>
    //     </p>
    //   </div>

    //   <p className="font-bold  text-principal text-lg my-2">
    //     Reseña:{" "}
    //     <span className="font-normal normal-case text-black">{r_res_cli}</span>
    //   </p>
    // </div>
  );
};

export default CardLibro;
