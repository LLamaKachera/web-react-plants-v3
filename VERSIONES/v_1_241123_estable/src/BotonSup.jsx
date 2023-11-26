export function BotonSup ({direccionImagen, destinoPagina}) {
  const imageSRC = `./src/Imagenes/${direccionImagen}`
  const destinoPag = `./${destinoPagina}`
  return(
    <a className="etiquetaA" href={destinoPag}>
      <img  className="imagenSuperior" src={imageSRC} alt="esUnaImagen" />
    </a>
  )
}