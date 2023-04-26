import React from "react";
import { useContext } from "react";
import LibrosContext from "../context/LibrosProvider";
const useLibro = () => {
  return useContext(LibrosContext);
};

export default useLibro;
