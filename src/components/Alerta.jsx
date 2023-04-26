import React from "react";

const Alerta = ({ alerta }) => {
  console.log(alerta);
  return (
    <div
      className={`${
        alerta.error
          ? "bg-secundario "
          : "bg-principal"
      }  text-center p-4 m-5 rounded-xl uppercase text-cuarto font-bold text-sm mb-10`}
    >
      {alerta.msg}
    </div>
  );
};

export default Alerta;
