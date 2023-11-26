import './App.css'
import { BotonSup } from './botonSup'
import { BotonMedio } from './botonMedio'
import { BotonMedioSuper } from './BotonMedioSuper'

export function App () {
  return(
    <>
    <div className="title-container">
      <h1 className="main-title">Rinconcito verde</h1>
      <p className="subtitle">🌵 Descubre la magia de la <strong>naturaleza</strong> en cada hoja.🌵 </p>
    </div>
    <div className='contenedor'>
      <div className='Apli'>
        <BotonSup direccionImagen="arbol.png" destinoPagina="prueba1.html"/>
        <BotonSup direccionImagen="cactus.png" destinoPagina="prueba1.html"/>
        <BotonSup direccionImagen="planta.png" destinoPagina="prueba1.html"/>
        <BotonSup direccionImagen="suculento.png" destinoPagina="prueba1.html"/>
        <BotonSup direccionImagen="planta-carnivora.png" destinoPagina="prueba1.html"/>
        <BotonSup direccionImagen="vino.png" destinoPagina="prueba1.html"/>
      </div>
    </div>

    <div className='Apli2'>Siempre tengo espacio en mi vida para otra plantita.</div>

    <div className="contenedor-inferior">
      <div className='Apli3'>
        <BotonMedio direccionImagen="imagen_1.png" destinoPagina="prueba1.html" textoDeImagen="¿Qué son las plantas?"/>
      </div>
      <div className='Apli3'>
        <BotonMedio direccionImagen="imagen_2.jpg" destinoPagina="prueba1.html" textoDeImagen="¿Qué función tienen las flores en las plantas?"/>
      </div>
      <div className='Apli3'>
        <BotonMedio direccionImagen="imagen_3.jpg" destinoPagina="prueba1.html" textoDeImagen="¿Cuáles son las partes principales de una planta?"/>
      </div>
      <div className='Apli6'>
        <BotonMedioSuper direccionImagen="sol.gif" destinoPagina="prueba1.html" textoDeImagen="¿Qué es la fotosintesis? ☀️"/>
      </div>
      <div className='Apli3'>
        <BotonMedio direccionImagen="imagen_4.png" destinoPagina="prueba1.html" textoDeImagen="¡Aprende sobre el reciclaje!"/>
      </div>
      <div className='Apli3'>
        <BotonMedio direccionImagen="imagen_5.png" destinoPagina="prueba1.html" textoDeImagen="¿Cuáles son algunas causas del cambio climático?"/>
      </div>
      <div className='Apli3'>
        <BotonMedio direccionImagen="imagen_6.jpg" destinoPagina="prueba1.html" textoDeImagen="¿Cuál es tu misión en la prevención de la contaminación?"/>
      </div>
      <div className='Apli10'>10</div>
      <div className='Apli11'>11</div>
      <div className='Apli12'>12</div>
    </div>
    
    </>
  )
}