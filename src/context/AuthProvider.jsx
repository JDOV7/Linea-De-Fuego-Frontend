import { useState, useEffect, createContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import clienteAxios from "../config/axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});
  const [cargando, setCargando] = useState(true);
  useEffect(() => {
    const autenticarUsuario = async () => {
      const token = localStorage.getItem("token");
      // console.log(token);
      if (!token) {
        setCargando(false);
        return;
      }
      const datos = { token };

      try {
        const { data } = await clienteAxios.post(
          "/clientes/obtener-perfil",
          datos
        );
        console.log(data);
        setAuth(data.body);
      } catch (error) {
        setAuth({});
        console.log(error.response.data.msg);
      }
      setCargando(false);
      // console.log("si hay token");
    };
    autenticarUsuario();
  }, []);

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    setAuth({});
  };

  const actualizarPerfil = async (datos) => {
    // console.log('editando auth');
    // console.log(datos);
    const tokenjwt = localStorage.getItem("token");
    // console.log(token);
    if (!tokenjwt) {
      setCargando(false);
      return;
    }
    const config = {
      headers: {
        "Content-Type": "application/json",
        tokenjwt,
      },
    };
    // datos = {
    //   u_nombre: "Cliente Actualizado",
    //   u_telefono: "1211111111",
    //   u_direcion: "Calle actualizada",
    // };

    try {
      const url = `/clientes/editar-perfil-cliente`;
      const { data } = await clienteAxios.put(url, datos, config);
      data.u_token = tokenjwt;
      const datosNuevo = {
        u_correo: data.body.u_correo,
        u_direcion: data.body.u_direcion,

        u_id_usuario: data.body.u_id_usuario,
        u_nombre: data.body.u_nombre,
        u_telefono: data.body.u_telefono,
        u_tipo_usuario: data.body.u_tipo_usuario,
        u_token: tokenjwt,
      };
      setAuth(datosNuevo);
      // navigate("/");
      console.log(data);
      return {
        msg: "Almacenado Correctamente",
      };
    } catch (error) {
      // console.log(error.response);
      return {
        msg: error.response.data.msg,
        error: true,
      };
    }
  };

  const crearResenia = async (datos) => {
    const tokenjwt = localStorage.getItem("token");
    // console.log(token);
    if (!tokenjwt) {
      setCargando(false);
      return;
    }
    const config = {
      headers: {
        "Content-Type": "application/json",
        tokenjwt,
      },
    };
    // datos = {
    //   u_nombre: "Cliente Actualizado",
    //   u_telefono: "1211111111",
    //   u_direcion: "Calle actualizada",
    // };

    try {
      const url = `/libros/crear-resenia`;
      const { data } = await clienteAxios.post(url, datos, config);
      // data.u_token = tokenjwt;
      // const datosNuevo = {
      //   u_correo: data.body.u_correo,
      //   u_direcion: data.body.u_direcion,

      //   u_id_usuario: data.body.u_id_usuario,
      //   u_nombre: data.body.u_nombre,
      //   u_telefono: data.body.u_telefono,
      //   u_tipo_usuario: data.body.u_tipo_usuario,
      //   u_token: tokenjwt,
      // };
      // setAuth(datosNuevo);
      // navigate("/");
      console.log(data);
      if (!data || data.status === 400 || data?.status !== 200) {
        console.log("crearResenia");
        throw new Error();
      }
      return {
        msg: "Reseña Correctamente creada",
      };
    } catch (error) {
      // console.log(error.response);
      return {
        msg: error.response.data.msg,
        error: true,
      };
    }
  };

  const guardarPassword = async (datos) => {
    console.log(datos);
    const token = localStorage.getItem("token");
    // console.log(token);
    if (!token) {
      setCargando(false);
      return;
    }
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const url = `/veterinarios/actualizar-password`;
      const { data } = await clienteAxios.put(url, datos, config);
      console.log(data);
      return {
        msg: data.msg,
      };
    } catch (error) {
      console.log(error.response.data.msg);
      return {
        msg: error.response.data.msg,
        error: true,
      };
    }
  };
  const realizarCompra = async (datos) => {
    // console.log('editando auth');
    // console.log(datos);
    const tokenjwt = localStorage.getItem("token");
    // console.log(token);
    if (!tokenjwt) {
      setCargando(false);
      return;
    }
    const config = {
      headers: {
        "Content-Type": "application/json",
        tokenjwt,
      },
    };
    // datos = {
    //   u_nombre: "Cliente Actualizado",
    //   u_telefono: "1211111111",
    //   u_direcion: "Calle actualizada",
    // };

    try {
      const url = `/clientes/comprar-productos-cliente`;
      const { data } = await clienteAxios.post(url, datos, config);
      console.log(data);
      // data.u_token = tokenjwt;
      // const datosNuevo = {
      //   u_correo: data.body.u_correo,
      //   u_direcion: data.body.u_direcion,

      //   u_id_usuario: data.body.u_id_usuario,
      //   u_nombre: data.body.u_nombre,
      //   u_telefono: data.body.u_telefono,
      //   u_tipo_usuario: data.body.u_tipo_usuario,
      //   u_token: tokenjwt,
      // };
      // setAuth(datosNuevo);
      // navigate("/");
      // console.log(data);
      return data;
    } catch (error) {
      // console.log(error.response);
      return {
        msg: error.response.data.msg,
        error: true,
      };
    }
  };

  async function obtenerHistorialVentas() {
    try {
      const tokenjwt = localStorage.getItem("token");
      // console.log(token);
      if (!tokenjwt) {
        setCargando(false);
        return;
      }
      const config = {
        headers: {
          "Content-Type": "application/json",
          tokenjwt,
        },
      };
      const url = `/clientes/obtener-historial`;
      const { data } = await clienteAxios.post(url, {}, config);
      console.log(data);

      return data.body.historial;
    } catch (error) {
      // console.log(error.response);
      return {
        msg: error.response.data.msg,
        error: true,
      };
    }
  }

  async function obtenerSiProductoEsFavorito(l_id_libro) {
    try {
      console.log("obtenerSiProductoEsFavorito");
      const tokenjwt = localStorage.getItem("token");
      // console.log(token);
      if (!tokenjwt) {
        setCargando(false);
        return;
      }
      const config = {
        headers: {
          "Content-Type": "application/json",
          tokenjwt,
        },
      };
      const url = `/clientes/obtener-si-producto-es-favorito`;
      const { data } = await clienteAxios.post(url, { l_id_libro }, config);
      // console.log(data);

      return data;
    } catch (error) {
      // console.log(error.response);
      return {
        status: 400,
        msg: error.response.data.msg,
        error: true,
      };
    }
  }

  async function crearNuevoProductoFavorito(l_id_libro) {
    try {
      console.log("crearNuevoProductoFavorito");
      const tokenjwt = localStorage.getItem("token");
      // console.log(token);
      if (!tokenjwt) {
        setCargando(false);
        return;
      }
      const config = {
        headers: {
          "Content-Type": "application/json",
          tokenjwt,
        },
      };
      const url = `/clientes/crear-nuevo-favorito`;
      const { data } = await clienteAxios.post(url, { l_id_libro }, config);
      // console.log(data);

      return data;
    } catch (error) {
      // console.log(error.response);
      return {
        status: 400,
        msg: error.response.data.msg,
        error: true,
      };
    }
  }

  async function eliminarProductoFavorito(l_id_libro) {
    try {
      console.log("eliminarProductoFavorito");
      const tokenjwt = localStorage.getItem("token");
      // console.log(token);
      if (!tokenjwt) {
        setCargando(false);
        return;
      }
      const config = {
        headers: {
          "Content-Type": "application/json",
          tokenjwt,
        },
      };
      const url = `/clientes/eliminar-producto-favorito`;
      const { data } = await clienteAxios.post(url, { l_id_libro }, config);
      // console.log(data);

      return data;
    } catch (error) {
      // console.log(error.response);
      return {
        status: 400,
        msg: error.response.data.msg,
        error: true,
      };
    }
  }

  async function obtenerMisFavoritos() {
    try {
      const tokenjwt = localStorage.getItem("token");
      // console.log(token);
      if (!tokenjwt) {
        setCargando(false);
        return;
      }
      const config = {
        headers: {
          "Content-Type": "application/json",
          tokenjwt,
        },
      };
      const url = `/clientes/obtener-mis-favoritos`;
      const { data } = await clienteAxios.post(url, {}, config);
      console.log(data);

      return data.res;
    } catch (error) {
      // console.log(error.response);
      return {
        status: 400,
        msg: error.message,
        error: true,
      };
    }
  }

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        cargando,
        cerrarSesion,
        actualizarPerfil,
        guardarPassword,
        crearResenia,
        realizarCompra,
        obtenerHistorialVentas,
        obtenerSiProductoEsFavorito,
        crearNuevoProductoFavorito,
        eliminarProductoFavorito,
        obtenerMisFavoritos,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
