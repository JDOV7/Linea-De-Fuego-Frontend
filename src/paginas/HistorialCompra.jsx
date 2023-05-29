import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
const HistorialCompra = () => {
  const { auth, obtenerHistorialVentas, cargando } = useAuth();
  const [ventas, setVentas] = useState([]);
  useEffect(() => {
    const cargandoDtos = async () => {
      setVentas(await obtenerHistorialVentas());
      console.log(ventas);
    };
    cargandoDtos();
  }, []);
  if (cargando) {
    return "cargando";
  }
  return (
    <>
      <div className="pt-24 pb-12">
        <h1 className="text-center text-4xl font-bold text-secundario">
          Tu Historial de Compras
        </h1>
      </div>
      <div className="px-20">
        <div className="grid grid-cols-1">
          {ventas && ventas.length > 0 ? (
            <>
              {ventas.map((venta, index) => {
                return (
                  <div
                    key={index}
                    className="col-span-1 bg-terciario rounded-3xl shadow-2xl mb-20"
                  >
                    <div className="p-5">
                      <h1 className="text-center text-2xl font-extrabold text-principal py-4">
                        Num. Compra: {venta.v_id_venta}
                      </h1>
                      <h1 className="text-start text-xl text-black font-semibold bg-cuarto py-2 px-10 rounded-2xl">
                        Info. Lugar de Envio
                      </h1>
                      <div className="flex text-start justify-start items-start">
                        <h1 className="p-5 text-principal font-bold">
                          Estado:{" "}
                          <span className="text-black">{venta.v_ciudad}</span>
                        </h1>
                        <h1 className="p-5 text-principal font-bold">
                          Codigo Postal:{" "}
                          <span className="text-black">
                            {venta.v_codigo_postal}
                          </span>
                        </h1>
                        <h1 className="p-5 text-principal font-bold">
                          Direcion:{" "}
                          <span className="text-black">{venta.v_direcion}</span>
                        </h1>
                      </div>
                      <h1 className="text-start text-xl text-black font-semibold bg-cuarto py-2 px-10 rounded-2xl">
                        Info. General
                      </h1>

                      <div className="flex text-start justify-start items-start">
                        <h1 className="p-5 text-principal font-bold">
                          Fecha Compra:{" "}
                          <span className="text-black">
                            {venta.v_fecha_venta}
                          </span>
                        </h1>
                        <h1 className="p-5 text-principal font-bold">
                          Monto:{" "}
                          <span className="text-black">
                            {venta.v_monto_total}
                          </span>
                        </h1>
                      </div>

                      <h1 className="text-start text-xl text-black font-semibold bg-cuarto py-2 px-10 rounded-2xl">
                        Info. Productos
                      </h1>

                      <div className=" text-start justify-start items-start">
                        {venta.obtenerDetalleVenta.map((producto, index) => {
                          return (
                            <div
                              key={index}
                              className="flex text-start justify-start items-start"
                            >
                              <h1 className="pt-5 px-5 text-principal font-bold">
                                Titulo:{" "}
                                <span className="text-black">
                                  {producto.Libro.l_nombre}
                                </span>
                              </h1>
                              <h1 className="pt-5 px-5 text-principal font-bold">
                                Piezas:{" "}
                                <span className="text-black">
                                  {producto.dv_pzs_venta}
                                </span>
                              </h1>
                              <h1 className="pt-5 px-5 text-principal font-bold">
                                Subtotal:{" "}
                                <span className="text-black">
                                  {producto.dv_subtotal}
                                </span>
                              </h1>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default HistorialCompra;
