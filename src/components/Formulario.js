import React from "react";
import { useSelect } from "../hooks/useSelect";
import styles from "./Formulario.module.css";

export const Formulario = ({ guardarCategoria }) => {
  const OPCIONES = [
    { value: "general", label: "General" },
    { value: "business", label: "Negocios" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "sports", label: "Deportes" },
    { value: "technology", label: "Tecnologia" },
  ];

  //usando el hook de useSelect
  const [categoria, SelectNoticias] = useSelect("general", OPCIONES);

  //cuando el usuario hace submit
  const buscarNoticias = (e) => {
    e.preventDefault();
    guardarCategoria(categoria);
  };

  return (
    <div className={`${styles.buscador} row`}>
      <div className="col s12 m8 offset-m2">
        <form onSubmit={buscarNoticias}>
          <h2 className={styles.heading}>Encuentra noticias por categoría</h2>
          <SelectNoticias />
          <div className="input-field col s12">
            <input
              className={`${styles.btn_block} btn-large amber darken-2`}
              type="submit"
              value="Buscar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
