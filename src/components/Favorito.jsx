import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Outlet, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import clienteAxios from "../config/axios";

const Favorito = ({ datos }) => {
  const {
    auth,
    actualizarPerfil,
    cargando,
    obtenerSiProductoEsFavorito,
    crearNuevoProductoFavorito,
    eliminarProductoFavorito,
  } = useAuth();
  const [u_id_usuario, setU_id_usuario] = useState("");
  const [favorito, setFavorito] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const obtenerId = async () => {
      if (auth && auth.u_id_usuario) {
        // u_id_usuario = auth.u_id_usuario;
        setU_id_usuario(auth.u_id_usuario);
        const obteniedoSiProductoEsFavorito = await obtenerSiProductoEsFavorito(
          datos.l_id_libro
        );
        setFavorito(obteniedoSiProductoEsFavorito.status);
        console.log(obteniedoSiProductoEsFavorito);
      } else {
        setU_id_usuario("");
      }
    };
    obtenerId();
  }, []);
  useEffect(() => {
    const obtenerId = async () => {
      if (auth && auth.u_id_usuario) {
        // u_id_usuario = auth.u_id_usuario;
        setU_id_usuario(auth.u_id_usuario);
        const obteniedoSiProductoEsFavorito = await obtenerSiProductoEsFavorito(
          datos.l_id_libro
        );
        setFavorito(obteniedoSiProductoEsFavorito.status);
      } else {
        setFavorito(400);
        setU_id_usuario("");
      }
    };
    obtenerId();
  }, [auth]);
  // console.log(datos);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(u_id_usuario);
    if (!u_id_usuario) {
      navigate("/login");
    }
    if (favorito && favorito === 200) {
      await eliminarProductoFavorito(datos.l_id_libro);
      setFavorito(400);
      return;
    }
    const nuevoFavorito = await crearNuevoProductoFavorito(datos.l_id_libro);
    console.log(nuevoFavorito);
    setFavorito(nuevoFavorito.status);
  };
  return (
    <div
      className="flex items-center justify-center hover:cursor-pointer"
      onClick={handleSubmit}
    >
      {/* <img src={l_portada} className="items-center justify-center" /> */}

      <img
        className=" items-center justify-center"
        src={`${
          favorito && favorito === 200
            ? "https://mi-bucket-jdov7-prueba.s3.us-east-2.amazonaws.com/utilidades/favoritos.png"
            : "https://mi-bucket-jdov7-prueba.s3.us-east-2.amazonaws.com/utilidades/favorito.png"
        }`}
        alt="hero image"
      />
    </div>
  );
};

export default Favorito;
