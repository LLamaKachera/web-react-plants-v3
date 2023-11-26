import React, { useState } from 'react';
export function BotonMedio ({direccionImagen, textoDeImagen, textoA, textoB, imagenA, imagenB}) {
  const imageSRC = `./src/Imagenes/${direccionImagen}`
  const imagenAA = `./src/Imagenes/${imagenA}`
  const imagenBB = `./src/Imagenes/${imagenB}`
  const [mostrarContenido, setMostrarContenido] = useState(false);
  const handleMostrarContenido = () => {
    setMostrarContenido(true);
  };
  
  return(
    <>
    <button onClick={handleMostrarContenido} className="etiquetaA-medio">
      <img  className="imagen-medio" src={imageSRC} alt="esUnaImagen" />
    </button>
    {/* Contenedor superpuesto */}
    {mostrarContenido && (
        <div className="contenedor-superpuesto">
          {/* Contenido que deseas mostrar */}

          <div className="contenedor-superpuesto-divs">
            <div className='textoA-nueva'><p>{ textoA }</p></div>
            <div className='asdasd'><img  className="imgNueva" src={imagenAA} alt="esUnaImagen" /></div>
            <div className='asdasd'><img  className="imgNueva" src={imagenBB} alt="esUnaImagen" /></div>
            <div className='textoB-nueva'><p>{ textoB }</p></div>
            
            
          </div>
          {/* Puedes añadir botones o cualquier otro elemento aquí */}
          <button className="botCerrar" onClick={() => setMostrarContenido(false)}>Cerrar ❌</button>
        </div>
    )}
    <button className="texto-medio-EA" onClick={handleMostrarContenido}>
      <div className="texto-medio">
        <strong>{textoDeImagen}</strong>
      </div>
    </button>
    {/* Contenedor superpuesto */}
    {mostrarContenido && (
        <div className="contenedor-superpuesto">
          {/* Contenido que deseas mostrar */}

          <div className="contenedor-superpuesto-divs">
            <div className='textoA-nueva'><p>{ textoA }</p></div>
            <div className='asdasd'><img  className="imgNueva" src={imagenAA} alt="esUnaImagen" /></div>
            <div className='asdasd'><img  className="imgNueva" src={imagenBB} alt="esUnaImagen" /></div>
            <div className='textoB-nueva'><p>{ textoB }</p></div>
            
            
          </div>
          {/* Puedes añadir botones o cualquier otro elemento aquí */}
          <button className="botCerrar" onClick={() => setMostrarContenido(false)}>Cerrar ❌</button>
        </div>
    )}


    </>
  )
}