import React from "react";
import '../estilo/Interface.css';

export function Interface(props) {
  return (
    <div className="contenedor-interface">
      <img className="imgen-interface"
        src={require(`../img/interface-${props.img}.jpg`)}
        alt="Foto uno" />
      <div className="contenedor-textos">
        <p className="nombre"><strong>{props.nombre}</strong> en {props.pais}</p>
        <p className="subTitulo">{props.subTitulo} en <strong>{props.empresa}</strong></p>
        <p className="descripcion">{props.descripcion}</p>
      </div>
    </div>
  );
}

//export default Interface; exportacione por defecto