export function BotonMedio ({direccionImagen, destinoPagina, textoDeImagen}) {
  const imageSRC = `./src/Imagenes/${direccionImagen}`
  const destinoPag = `./${destinoPagina}`
  return(
    <>
    <a className="etiquetaA-medio" href={destinoPag}>
      <div>
        <img  className="imagen-medio" src={imageSRC} alt="esUnaImagen" />
      </div>
      
    </a>
    <a className="texto-medio-EA" href="{destinoPag}">
      <div className="texto-medio">
        <strong>{textoDeImagen}</strong>
      </div>
    </a>
    </>
  )
}