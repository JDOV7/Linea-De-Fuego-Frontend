import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/axios";
const ConfirmarCuenta = () => {
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
  const [cargando, setCargando] = useState(true);
  const [alerta, setAlerta] = useState({});
  const params = useParams();
  //   console.log(params);
  const { u_token } = params;
  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const url = `/clientes/registrar-cliente/${u_token}`;
        const { data } = await clienteAxios.get(url);
        console.log(data);
        // console.log(`datooooooooos: ${data}`);
        setCuentaConfirmada(true);
        setAlerta({ msg: data.msg, error: false });
      } catch (e) {
        // console.log("Errrrooooooooor");
        setAlerta({ msg: e.response.data.msg, error: true });
      }
      setCargando(false);
    };
    confirmarCuenta();
  }, []);
  return (
    <>
      <div className="bg-cuarto w-screen h-screen ">
        <div className="p-20 mb-10">
          <h1 className="text-principal font-black text-6xl text-center">
            Confirma tu Cuenta y Comienza a{" "}
            <span className="text-secundario">Comprar!</span>
          </h1>
        </div>

        <div className="container mx-auto md:grid md:grid-cols-2  gap-4  px-24 items-center rounded-xl ">
          {!cargando && (
            <>
              <Alerta alerta={alerta}></Alerta>
            </>
          )}

          {!cuentaConfirmada && (
            <Link
              to="/crear-cuenta"
              className="block text-center my-5 font-black text-3xl text-principal"
            >
              Crear Cuenta
            </Link>
          )}

          {cuentaConfirmada && (
            <Link
              to="/login"
              className="block text-center my-5 font-black text-3xl text-principal"
            >
              Iniciar Sesion
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default ConfirmarCuenta;
