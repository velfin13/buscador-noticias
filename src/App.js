import React, { Fragment, useEffect, useState } from "react";
import { Formulario } from "./components/Formulario";
import { Header } from "./components/Header";
import { ListadoNoticia } from "./components/ListadoNoticia";

export const App = () => {
  //categoria elegida por el usuario
  const [categoria, guardarCategoria] = useState("");
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarApi = async () => {
      const keyAPI = "c165495723014614b63fb8781f3a1edb";
      const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=${keyAPI}`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    };
    consultarApi();
  }, [categoria]);

  return (
    <Fragment>
      <Header titulo="Buscador de noticias" />
      <div className="container white">
        <Formulario guardarCategoria={guardarCategoria} />
        <ListadoNoticia noticias={noticias} />
      </div>
    </Fragment>
  );
};
