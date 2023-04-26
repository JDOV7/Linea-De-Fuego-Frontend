import React from "react";
import { Outlet, Navigate } from "react-router-dom";
// import { autenticarUsuario } from "../context/AuthProvider";
import useAuth from "../hooks/useAuth";
import AuthContext from "../context/AuthProvider";
import Header from "../components/Header";
// import Footer from "../components/Footer";

const Principal = () => {
  const { auth, cargando } = useAuth();
  // console.log(auth);
  // console.log(cargando);
  if (cargando) {
    return "cargando";
  }
  return (
    <>
      {/* <h1>Hola pinciapl</h1> */}
      <Header></Header>
      {/* <Header></Header> */}
      {/* <div>
        <div>
          <h1>Hola Libreria</h1>
        </div>
      </div> */}
    </>
  );
};

export default Principal;
