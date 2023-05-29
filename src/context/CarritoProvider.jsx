import { useState, useEffect, createContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import React from "react";

const CarritoContext = createContext();

const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const autenticarUsuario = async () => {
      console.log("obteniedo carrito");
      const token = localStorage.getItem("carrito_linea_de_fuego");
      // console.log(token);
      if (!token) {
        localStorage.setItem("carrito_linea_de_fuego", JSON.stringify([]));
        setCarrito([]);
        return;
      }

      try {
        const carritoP = JSON.parse(
          localStorage.getItem("carrito_linea_de_fuego")
        );
        // Se parsea para poder ser usado en js con JSON.parse :)
        setCarrito(carritoP);
      } catch (error) {
        console.log(error.message);
      }
      // console.log("si hay token");
    };
    autenticarUsuario();
  }, []);

  function agregarAlCarrito(producto) {
    const carrito = JSON.parse(localStorage.getItem("carrito_linea_de_fuego"));
    let arrary = [];
    const productos = carrito;
    let indexExistencia = -1;
    productos.some((prod, index) => {
      if (prod.l_id_libro === producto.l_id_libro) {
        indexExistencia = index;
      }
      return prod.l_id_libro === producto.l_id_libro;
    });
    if (indexExistencia !== -1) {
      arrary = carrito;
      arrary[indexExistencia].l_cantidad = producto.l_cantidad;
    } else {
      arrary = carrito;
      arrary.push(producto);
    }
    setCarrito(arrary);
    console.log(carrito);
    localStorage.setItem("carrito_linea_de_fuego", JSON.stringify(carrito));
  }

  function eliminarProductoCarrito(l_id_libro) {
    const productos = JSON.parse(
      localStorage.getItem("carrito_linea_de_fuego")
    );
    console.log(l_id_libro);
    const nuevoCarrito = productos.filter(
      (producto) => producto.l_id_libro !== l_id_libro
    );
    setCarrito(nuevoCarrito);
    console.log(carrito);
    console.log(nuevoCarrito);
    localStorage.setItem(
      "carrito_linea_de_fuego",
      JSON.stringify(nuevoCarrito)
    );
  }

  function obtenerTotalCarrito() {
    const productos = JSON.parse(
      localStorage.getItem("carrito_linea_de_fuego")
    );
    let total = 0;
    productos.forEach((producto) => {
      total += producto.l_cantidad * producto.l_precio;
    });
    return total;
  }

  function obtenerCantidadArticulos() {
    const productos = JSON.parse(
      localStorage.getItem("carrito_linea_de_fuego")
    );

    return productos.length;
  }

  function obtenerDatosParaLaBD(params) {
    const productos = JSON.parse(
      localStorage.getItem("carrito_linea_de_fuego")
    );
    const datos = [];
    productos.forEach((producto) => {
      const { l_id_libro, l_cantidad } = producto;
      datos.push({
        l_id_libro,
        cantidad: +l_cantidad,
      });
    });
    return datos;
  }

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        setCarrito,
        agregarAlCarrito,
        eliminarProductoCarrito,
        obtenerTotalCarrito,
        obtenerCantidadArticulos,
        obtenerDatosParaLaBD,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
export { CarritoProvider };
export default CarritoContext;
