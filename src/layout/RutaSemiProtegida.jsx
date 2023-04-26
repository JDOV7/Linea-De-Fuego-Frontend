import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Header from "../components/Header";
const RutaSemiProtegida = () => {
  const { auth, cargando } = useAuth();
  // console.log(auth);
  // console.log(cargando);
  if (cargando) {
    return "cargando";
  }
  return (
    <>
      <Header></Header>

      <Outlet></Outlet>
      {/* <Footer></Footer> */}
    </>
  );
};

export default RutaSemiProtegida;
