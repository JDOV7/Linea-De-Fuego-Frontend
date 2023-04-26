import { createContext, useState, useEffect } from "react";
import clienteAxios from "../config/axios";
const LibrosContext = createContext();

const LibrosProvider = ({ children }) => {
  const [libros, setLibros] = useState([]);
  const [libro, setLibro] = useState({});
  const [resenias, setResenias] = useState([]);

  useEffect(() => {
    setResenias(libro.resenias);
  }, [libro]);

  const obtenerLibro = async (l_id_libro) => {
    // console.log(paciente);
    // const token = localStorage.getItem("token");
    try {
      console.log("14");
      const url = `/libros/obtener-libro/${l_id_libro}`;
      console.log("16");
      const { data } = await clienteAxios.get(url);
      console.log("18");

      if (!data.body) {
        throw new Error("Error");
      }
      setLibro(await data.body);
      setResenias(await libro?.resenias);
    } catch (e) {
      setResenias([]);
      setLibro({});
      console.log(e.response);
      //   setAlerta({ msg: e.response.data.msg, error: true });
    }
  };

  return (
    <LibrosContext.Provider
      value={{
        libro,
        resenias,
        obtenerLibro,
      }}
    >
      {children}
    </LibrosContext.Provider>
  );
};

export { LibrosProvider };

export default LibrosContext;
