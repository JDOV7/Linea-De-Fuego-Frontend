import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useCarrito from "../hooks/useCarrito";
import Alerta from "../components/Alerta";
const Compra = () => {
  const navigate = useNavigate();
  const { auth, setAuth, cargando, realizarCompra } = useAuth();
  const [u_id_usuario, setU_id_usuario] = useState("");
  const {
    carrito,
    setCarrito,
    obtenerTotalCarrito,
    obtenerCantidadArticulos,
    obtenerDatosParaLaBD,
  } = useCarrito();
  const [calle, setCalle] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [cp, setCp] = useState("");
  const [tarjeta, setTarjeta] = useState("");
  const [exp, setExp] = useState("");
  const [ccv, setCcv] = useState("");
  const [alerta, setAlerta] = useState({});
  const [cantidadPro, setCantidadPro] = useState("");
  const [dineroTotal, setDineroTotal] = useState("");

  if (cargando) {
    return "cargando";
  }
  useEffect(() => {
    setCantidadPro(obtenerCantidadArticulos());
    setDineroTotal(obtenerTotalCarrito());
  }, []);
  useEffect(() => {
    setCantidadPro(obtenerCantidadArticulos());
    setDineroTotal(obtenerTotalCarrito());
    const obtenerId = async () => {
      if (auth && auth.u_id_usuario) {
        // u_id_usuario = auth.u_id_usuario;
        setU_id_usuario(auth.u_id_usuario);
      } else {
        setU_id_usuario("");
      }
    };
    obtenerId();
    // setPerfil(auth);
  }, [auth]);

  useEffect(() => {
    setCantidadPro(obtenerCantidadArticulos());
    setDineroTotal(obtenerTotalCarrito());
    if (obtenerCantidadArticulos() === 0) {
      //   console.log("no hay productos");
      navigate("/linea-de-fuego");
    }
    // console.log("nuevo producto");
    // console.log(carrito);
  }, [carrito]);

  const handleSubmit = async (e) => {
    // e.preventDefault();
    console.log("comprando.......");
    const datos = {
      articulos: obtenerDatosParaLaBD(),
      articulosDetalle: carrito,
      v_direcion: calle,
      v_ciudad: ciudad,
      v_codigo_postal: cp,
      v_numero_tarjeta: tarjeta,
      v_exp: exp,
      v_ccv: ccv,
    };
    console.log(datos);

    const resultado = await realizarCompra(datos);
    console.log(resultado);
    if (resultado && resultado.status && resultado.status === 200) {
      setAlerta(resultado);
      setCarrito([]);
      setCantidadPro("");
      setDineroTotal("");
      // localStorage.setItem("carrito_linea_de_fuego", JSON.stringify([]));
      setTimeout(() => {
        localStorage.setItem("carrito_linea_de_fuego", JSON.stringify([]));
        setCantidadPro("");
        setDineroTotal("");
        // navigate("/linea-de-fuego");
      }, 2000);
    } else {
      setAlerta({ msg: "No se pudo realizar la compra", error: true });
    }
  };

  console.log(auth);
  console.log(carrito);
  console.log(obtenerDatosParaLaBD());
  const { msg } = alerta;
  return (
    <>
      <div className="p-10 pt-28 bg-cuarto">
        <h1 className="text-center text-4xl font-bold">Orden De Compra</h1>
        <div className="grid grid-cols-3 pt-10">
          <div className="col-span-2 bg-terciario rounded-2xl p-10 m-5">
            <div className="my-4">
              <label className="uppercase  block text-xl font-bold">
                Calle
              </label>
              <input
                type="text"
                className="border w-full p-3 mt-4 bg-cuarto rounded-xl"
                placeholder="Tu Calle"
                value={calle}
                onChange={(e) => setCalle(e.target.value)}
              />
            </div>
            <div className=" flex">
              <div className="items-start lg:px-24">
                <label className="uppercase  block text-xl font-bold">
                  Ciudad
                </label>
                <select
                  id="countries"
                  className="border  p-3 mt-4 bg-cuarto rounded-xl"
                  defaultValue={"DEFAULT"}
                  onChange={(e) => setCiudad(e.target.value)}
                >
                  <option value="DEFAULT">Seleciona tu estado</option>
                  <option value="Aguascalientes">Aguascalientes</option>
                  <option value="Baja California">Baja California</option>
                  <option value="Baja California Sur">
                    Baja California Sur
                  </option>
                  <option value="Campeche">Campeche</option>
                  <option value="Chiapas">Chiapas</option>
                  <option value="Chihuahua">Chihuahua</option>
                  <option value="Ciudad de México">Ciudad de México</option>
                  <option value="Coahuila">Coahuila</option>
                  <option value="Colima">Colima</option>
                  <option value="Durango">Durango</option>
                  <option value="Estado de México">Estado de México</option>
                  <option value="Guanajuato">Guanajuato</option>
                  <option value="Guerrero">Guerrero</option>
                  <option value="Hidalgo">Hidalgo</option>
                  <option value="Jalisco">Jalisco</option>
                  <option value="Michoacán">Michoacán</option>
                  <option value="Morelos">Morelos</option>
                  <option value="Nayarit">Nayarit</option>
                  <option value="Nuevo León">Nuevo León</option>
                  <option value="Oaxaca">Oaxaca</option>
                  <option value="Puebla">Puebla</option>
                  <option value="Querétaro">Querétaro</option>
                  <option value="Quintana Roo">Quintana Roo</option>
                  <option value="San Luis Potosí">San Luis Potosí</option>
                  <option value="Sinaloa">Sinaloa</option>
                  <option value="Sonora">Sonora</option>
                  <option value="Tabasco">Tabasco</option>
                  <option value="Tamaulipas">Tamaulipas</option>
                  <option value="Tlaxcala">Tlaxcala</option>
                  <option value="Veracruz">Veracruz</option>
                  <option value="Yucatán">Yucatán</option>
                  <option value="Zacatecas">Zacatecas</option>
                </select>
              </div>
              <div className="items-end justify-end text-right">
                <label className="uppercase  block text-xl font-bold">
                  Codigo Postal
                </label>
                <input
                  type="number"
                  minLength={5}
                  min={10000}
                  defaultValue={"00000"}
                  className="border  p-3 mt-4 bg-cuarto rounded-xl"
                  placeholder="Tu Codigo Postal"
                  onChange={(e) => setCp(e.target.value)}
                />
              </div>
            </div>

            <div className="my-4">
              <label className="uppercase  block text-xl font-bold">
                Numero Tarjeta De Credito
              </label>
              <input
                type="number"
                min={1000000000000000}
                defaultValue={"0000000000000000"}
                className="border w-full p-3 mt-4 bg-cuarto rounded-xl"
                placeholder="Tu Numero Tarjeta De Credito"
                onChange={(e) => setTarjeta(e.target.value)}
              />
            </div>
            <div className=" flex">
              <div className="items-start lg:px-24">
                <label className="uppercase  block text-xl font-bold">
                  Exp
                </label>
                <input
                  type="number"
                  min={100}
                  defaultValue={"0000"}
                  className="border  p-3 mt-4 bg-cuarto rounded-xl"
                  placeholder="EXP"
                  maxLength={4}
                  onChange={(e) => setExp(e.target.value)}
                />
              </div>
              <div className="items-end justify-end text-right">
                <label className="uppercase  block text-xl font-bold">
                  CCV
                </label>
                <input
                  type="password"
                  className="border  p-3 mt-4 bg-cuarto rounded-xl"
                  placeholder="CCV"
                  maxLength={3}
                  onChange={(e) => setCcv(e.target.value)}
                />
              </div>
            </div>
            <div className="p-3 text-center">
              <button
                className="text-center text-lg bg-principal hover:bg-secundario p-3 rounded-2xl"
                onClick={(e) => {
                  handleSubmit();
                }}
              >
                Comprar
              </button>
            </div>
          </div>
          <div className="col-span-1 ">
            <div>
              <h1 className="text-center text-2xl font-semibold">
                Tus Articulos:{" "}
                <span className="bg-principal py-2 px-4 text-terciario rounded-full hover:bg-secundario">
                  {cantidadPro}
                </span>
              </h1>
              <div className="pt-5">
                {carrito.map((articulo, index) => {
                  const {
                    l_id_libro,
                    l_nombre,
                    l_autor,
                    l_precio,
                    l_cantidad,
                  } = articulo;
                  return (
                    // <div className="  flex  " key={index}>

                    <div
                      className="grid grid-cols-3 border-b-2 pb-1 pt-2 border-b-secundario hover:bg-principal hover:bg-opacity-20 rounded-2xl"
                      key={index}
                    >
                      <div className="col-span-2">
                        <p className="text-lg text-center font-extrabold  px-2 ">
                          {l_nombre}
                        </p>
                        <p className="text-sm text-left font-normal  pl-4 ">
                          {l_autor}
                        </p>
                        <p className="text-lg px-2 font-bold text-principal  pr-4 pb-2 ">
                          Subtotal:{" "}
                          <span className="font-extrabold text-black">
                            {l_cantidad * l_precio}
                          </span>
                        </p>
                      </div>
                      <div className="col-span-1">
                        <p className="text-lg text-center font-bold text-principal  pr-4  ">
                          Cant:{" "}
                          <span className="font-extrabold text-black">
                            {l_cantidad}
                          </span>
                        </p>
                        <p className="text-sm font-normal text-right  pr-4  ">
                          {`${l_precio}$`}
                        </p>
                      </div>
                    </div>
                    // </div>
                  );
                  // return <CardLibro key={articulo} datos={libro}></CardLibro>;
                })}
                <h1 className="text-center text-xl font-normal p-4">{`Total: ${dineroTotal}$`}</h1>
                {msg && <Alerta alerta={alerta}></Alerta>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Compra;
