export function BotonMedioSuper ({direccionImagen, destinoPagina, textoDeImagen}) {
  const imageSRC = `./src/Imagenes/${direccionImagen}`
  const destinoPag = `./${destinoPagina}`
  return(
    <>
    <a className="etiquetaA-medio-super" href={destinoPag}>
      <div>
        <img  className="imagen-medio-super" src={imageSRC} alt="esUnaImagen" />
      </div>
      
    </a>
    <a className="texto-medio-EA-super" href="{destinoPag}">
      <div className="texto-medio-super">
        <strong>{textoDeImagen}</strong>
      </div>
    </a>
    </>
  )
}