// import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import Alerta from "../components/Alerta";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
// import useAuth from "../hooks/useAuth";
// import { autenticarUsuario } from "../context/AuthProvider";
// import AuthContext from "../context/AuthProvider";

const EditarCliente = () => {
  const { auth, 
    actualizarPerfil } = useAuth();
  //   const [perfil, setPerfil] = useState({});
  const [alerta, setAlerta] = useState({});
  const [u_nombre, setU_nombre] = useState("");
  const [u_telefono, setU_telefono] = useState("");
  const [u_direcion, setU_direcion] = useState("");

  useEffect(() => {
    // setPerfil(auth);
    setU_nombre(auth.u_nombre);
    setU_direcion(auth.u_direcion);
    setU_telefono(auth.u_telefono);
  }, [auth]);
//   console.log(auth);
  //   console.log(perfil);
  //   console.log(auth);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(auth);
    // const { nombre, email } = perfil;
    // console.log(perfil);
    // console.log(perfil.nombre);
    // if ([nombre, email].includes("")) {
    //   console.log("error");
    //   setAlerta({ msg: "Nombre e Email Requeridos", error: true });
    //   return;
    // }
    const resultado = await actualizarPerfil({
      u_nombre,
      u_telefono,
      u_direcion,
    });
    console.log(resultado);
    setAlerta(resultado);
  };
  const { msg } = alerta;

  return (
    <>
      <div className="bg-cuarto py-14">
        <h2 className="font-black text-5xl text-center mt-10 text-principal">
          Editar Perfil
        </h2>
        <p className="text-xl mt-5 mb-10 text-center text-principal">
          Modifica tu{" "}
          <span className="text-secundario font-bold">Informacion aqui</span>
        </p>
        <div className="flex justify-center ">
          <div className="w-full md:w-1/2 bg-white shadow-2xl rounded-xl p-5 bg-terciario">
            <form onSubmit={handleSubmit} className="p-10 bg-terciario">
              <div className="my-3">
                <label
                  htmlFor=""
                  className="uppercase font-bold text-gray-600 "
                >
                  Nombre
                </label>
                <input
                  type="text"
                  className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                  name="nombre"
                  value={u_nombre || ""}
                  onChange={(e) => setU_nombre(e.target.value)}
                />
              </div>
              <div className="my-3">
                <label
                  htmlFor=""
                  className="uppercase font-bold text-gray-600 "
                >
                  Direccion
                </label>
                <input
                  type="text"
                  className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                  name="direccion"
                  value={u_direcion || ""}
                  onChange={(e) => setU_direcion(e.target.value)}
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
                  className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                  name="telefono"
                  value={u_telefono || ""}
                  onChange={(e) => setU_telefono(e.target.value)}
                />
              </div>

              <input
                type="submit"
                value="Guardar Cambios"
                className="bg-secundario w-full py-3 px-10 rounded-xl text-cuarto uppercase font-bold mt-5 hover:cursor-pointer hover:bg-principal md:w-auto "
              />
            </form>
            {msg && <Alerta alerta={alerta}></Alerta>}
          </div>
        </div>
      </div>
    </>
  );
};

export default EditarCliente;
