import React, { useState } from "react";

export const useSelect = (initialState = "", opciones) => {
    //states
  const [categoria, guargarCategoria] = useState(initialState);

  const SelectNoticias = () => {
    //funcion que guarda los datos del formulario
    const handleCange = (e) => {
      guargarCategoria(e.target.value);
    };

    return (
      <select
        className="browser-default"
        value={categoria}
        onChange={handleCange}
      >
        {opciones.map((opcion) => (
          <option key={opcion.value} value={opcion.value}>
            {opcion.label}
          </option>
        ))}
      </select>
    );
  };

  return [categoria, SelectNoticias];
};
