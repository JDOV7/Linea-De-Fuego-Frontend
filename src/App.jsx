import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthLayout from "./layout/AuthLayout";
import { AuthProvider } from "./context/AuthProvider";
import RutaProtegida from "./layout/RutaProtegida";
import PaginaPrincipal from "./paginas/PaginaPrincipal";
import Login from "./paginas/Login";
import Principal from "./paginas/Principal";
import CrearCliente from "./paginas/CrearCliente";
import ConfirmarCuenta from "./paginas/ConfirmarCuenta";
import EditarCliente from "./paginas/EditarCliente";
import Libros from "./paginas/Libros";
import ObtenerLibro from "./paginas/ObtenerLibro";
import RutaSemiProtegida from "./layout/RutaSemiProtegida";
import { LibrosProvider } from "./context/LibrosProvider";
import CrearResenia from "./paginas/CrearResenia";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <LibrosProvider>
          <Routes>
            //Area publica
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<PaginaPrincipal></PaginaPrincipal>} />
              <Route path="login" element={<Login></Login>}></Route>
              <Route
                path="linea-de-fuego"
                element={<Principal></Principal>}
              ></Route>
              <Route
                path="crear-cuenta"
                element={<CrearCliente></CrearCliente>}
              ></Route>
              <Route
                path="confirmar/:u_token"
                element={<ConfirmarCuenta></ConfirmarCuenta>}
              ></Route>
              <Route
                path="linea-de-fuego/libros"
                element={<Libros></Libros>}
              ></Route>
              {/* <Route
              path="linea-de-fuegos/obtener-libro/:l_id_libro"
              element={<ObtenerLibro></ObtenerLibro>}
            ></Route> */}
              {/* <Route
            path="olvide-password/:token"
            element={<NuevoPassword></NuevoPassword>}
          ></Route>
          <Route
            path="confirmar/:id"
            element={<ConfirmarCuenta></ConfirmarCuenta>}
          ></Route> */}
            </Route>
            {/* RutaSemiProtegida Area privada */}
            //
            <Route
              path="/linea-de-fuego"
              element={<RutaProtegida></RutaProtegida>}
            >
              <Route
                path="editar-perfil"
                element={<EditarCliente></EditarCliente>}
              ></Route>
              <Route
                path="crear-resenia/:r_id_libro"
                element={<CrearResenia></CrearResenia>}
              ></Route>
            </Route>
            {/* RutaSemiProtegida */}
            <Route
              path="/linea-de-fuego"
              element={<RutaSemiProtegida></RutaSemiProtegida>}
            >
              <Route
                path="obtener-libro/:l_id_libro"
                element={<ObtenerLibro></ObtenerLibro>}
              ></Route>
            </Route>
          </Routes>
        </LibrosProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
