import React from "react";

const Resenia = ({ resenia }) => {
  const { r_id_resena, u_nombre, r_res_cli, r_fecha } = resenia;
  return (
    <div className=" mx-5 my-5 bg-terciario shadow-2xl px-5 py-5 rounded-xl">
      <div className="grid   lg:grid-cols-2   bg-terciario">
        <p className="font-bold  text-principal text-lg my-2">
          Nombre:{" "}
          <span className="font-normal normal-case text-black">{u_nombre}</span>
        </p>
        <p className="font-bold  text-principal text-lg my-2">
          Fecha:{" "}
          <span className="font-normal normal-case text-black">{r_fecha}</span>
        </p>
      </div>

      <p className="font-bold  text-principal text-lg my-2">
        Reseña:{" "}
        <span className="font-normal normal-case text-black">{r_res_cli}</span>
      </p>
    </div>
  );
};

export default Resenia;
