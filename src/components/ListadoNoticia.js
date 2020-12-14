import React from "react";
import { Noticia } from "./Noticia";

export const ListadoNoticia = ({ noticias }) => {
  
  return (
    <div className="row">
      {noticias.map((noticia) => (
        <Noticia key={noticia.url} noticia={noticia} />
      ))}
    </div>
  );
};
