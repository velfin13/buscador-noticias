import React from "react";

export const Noticia = ({ noticia }) => {
  //extraer datos
  const { urlToImage, url, title, description, source } = noticia;

  let componente;

  if (urlToImage) {
    componente = (
      <div className="card-image">
        <img src={urlToImage} alt={title} />

        <span className="card-title">{source.name}</span>
      </div>
    );
  } else {
    componente = null;
  }

  return (
    <div className="col s12 m6 l4">
      <div className="card">
        {componente}
        <div className="card-content">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <div className="card-action">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="waves-effect waves-light btn"
          >
            Ver noticia completa
          </a>
        </div>
      </div>
    </div>
  );
};
