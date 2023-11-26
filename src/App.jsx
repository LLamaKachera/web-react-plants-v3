import './App.css'
import { BotonMedio } from './BotonMedio'
import { BotonMedioSuper } from './BotonMedioSuper'
import { BotonSupEXP } from './BotonSupEXP'

export function App () {
  return(
    <>
    <div className="title-container">
      <h1 className="main-title">Rinconcito verde</h1>
      <p className="subtitle">🌵 Descubre la magia de la <strong>naturaleza</strong> en cada hoja.🌵 </p>
    </div>
    
    <div className='contenedor'>
      <div className='Apli'>
        <BotonSupEXP 
          direccionImagen="arbol.png" 
          imagenA="imagenA_1.png"
          imagenB="imagenB_1.png"
          textoA="La reforestación y la forestación son acciones positivas para el medio ambiente por varias 
          razones clave. En primer lugar, los bosques desempeñan un papel crucial en la absorción de dióxido de 
          carbono, ayudando a mitigar el cambio climático al actuar como sumideros de carbono. Al plantar árboles, 
          se contribuye a aumentar la capacidad de los ecosistemas para absorber y almacenar carbono atmosférico, 
          reduciendo así el impacto de las emisiones de gases de efecto invernadero."
          textoB="¡Hola pequeños superhéroes del planeta! ¿Sabían que plantar un árbol los convierte en héroes reales? Cada árbol que plantan ayuda a limpiar el aire, a dar hogar a animalitos y a mantener fresco nuestro hogar, la Tierra. ¡Únanse a la liga de los superhéroes del medio ambiente y planten árboles para hacer del mundo un lugar más feliz y saludable!"/>
        <BotonSupEXP 
        imagenA="img_1.gif"
        imagenB="img_1a.jpg"
        textoA="Los cactus son plantas muy especiales que viven en lugares secos y desérticos. Tienen hojas gruesas y espinosas que les ayudan a almacenar agua, como si fueran pequeñas botellas. Aunque parecen difíciles, los cactus son muy fuertes y pueden sobrevivir en lugares donde otras plantas tendrían problemas. ¡Son como los superhéroes del desierto!"
        textoB="¿Sabían que los cactus son como los héroes secretos del desierto? Estas plantas mágicas tienen hojas gorditas y llenas de espinas que les ayudan a guardar agua, ¡como tener su propia botellita mágica! Aunque se ven un poco gruñones con sus espinas, son súper fuertes y valientes, viviendo en lugares donde el sol brilla mucho y la lluvia casi no visita. La próxima vez que vean un cactus, ¡salúdenlo y agradezcan por ser un increíble defensor del desierto! 🌵✨"
        direccionImagen="cactus.png" />
        <BotonSupEXP 
        direccionImagen="planta.png"
        imagenA="img_2.gif"
        imagenB="img_2a.jpg"
        textoA="Las plantas son seres vivos mágicos que crecen en la tierra. Ellas toman el sol, beben agua y se visten de hermosas hojas y flores. Algunas plantas dan frutas deliciosas, como las manzanas y las fresas. ¡Son como los magos del jardín, haciendo que todo se vea bonito y lleno de vida!"
        textoB="Queridos amigos, ¡las plantas son como los guardianes del planeta! No solo son bonitas, sino que también nos dan aire fresco para respirar y nos regalan ricas frutas y verduras para comer. Si cuidamos de ellas, nos ayudarán a tener un mundo lleno de colores y alegría. ¡Así que abracen a sus plantitas, cuídenlas y vean cómo crecen felices! 🌱🌸"
        />
        <BotonSupEXP 
        direccionImagen="suculento.png"
        imagenA="img_3.gif"
        imagenB="img_3a.webp"
        textoA="Las plantas suculentas son como las súper héroes de las plantas. Tienen hojas gorditas que guardan mucha agua, ¡como pequeños globitos mágicos! Viven en lugares soleados y secos, y no les gusta beber demasiada agua. Son como pequeños tesoros que hacen que los jardines luzcan geniales y coloridos."
        textoB="¡Hola exploradores curiosos! Las plantas suculentas son como pequeñas maravillas en macetas. Solo necesitan un poco de sol y cariño, y pueden hacer que cualquier rincón se vea especial. ¿Quieren tener una en sus habitaciones? Son tan valientes que pueden vivir en lugares donde otras plantas no pueden. ¡Vamos a ser amigos de las suculentas y hacer que nuestros espacios sean más divertidos y alegres! 🌵🌟"
        />
        <BotonSupEXP 
        direccionImagen="planta-carnivora.png" 
        imagenA="img_4.gif"
        imagenB="img_4a.jpg"
        textoA="Las plantas carnívoras son como las aventureras del reino de las plantas. A diferencia de otras plantas que obtienen nutrientes del suelo, ellas son comedores de insectos. Tienen hojas mágicas que atrapan a los insectos traviesos y los usan como su cena especial. ¡Son las exploradoras más sorprendentes del jardín!"
        textoB="¡Hola intrépidos exploradores! Las plantas carnívoras son como guardianas del jardín que comen pequeños insectos que podrían ser traviesos. Aunque parezcan un poco asombrosas, son amigas fascinantes. Pueden cuidar de su hogar al mantener a raya a los insectos, ¡así que agradézcanles por ser las heroínas del jardín! 🌿🐜✨"
        />
        <BotonSupEXP 
        direccionImagen="vino.png"
        imagenA="img_5a.jpg"
        imagenB="img_5.jpg"
        textoA="Las plantas trepadoras son como los escaladores mágicos de la naturaleza. Les gusta abrazar cosas y subir alto, como si fueran pequeños exploradores del jardín. En lugar de quedarse en el suelo, estas plantas suben por paredes y árboles con ramitas y ganchitos, ¡haciendo que todo se vea lleno de magia y aventura!"
        textoB="¡Hola pequeños aventureros! Las plantas trepadoras son como las abrazadoras del mundo verde. Les encanta subir y jugar a las escondidas entre hojas y ramas. ¿Quieren un poco de diversión en su jardín? Inviten a las plantas trepadoras y vean cómo hacen que todo sea más emocionante y lleno de risas. ¡A explorar juntos! 🌿🌟"
        />
      </div>
    </div>

    <div className='Apli2'>Siempre tengo espacio en mi vida para otra plantita.</div>

    <div className="contenedor-inferior">
      <div className='Apli3'>
        <BotonMedio 
        direccionImagen="imagen_1.png" 
        imagenA="imagenA_1.png"
        imagenB="imagenB_1.png"
        textoA="Las plantas son organismos vivos que desempeñan un papel esencial en el equilibrio y la sostenibilidad de los ecosistemas terrestres. Estos seres multicelulares, pertenecientes al reino Plantae, tienen la capacidad única de realizar la fotosíntesis, un proceso mediante el cual convierten la luz solar en energía química para alimentarse. Las plantas varían enormemente en forma, tamaño y función, desde pequeñas hierbas hasta majestuosos árboles."
        textoB="Las plantas son como amigas mágicas que nos regalan oxígeno y colores hermosos. Para cuidarlas, aquí van algunos consejos mágicos. Agüita mágica: A las plantas les encanta el agua, así que dales un poquito de agüita cuando estén sedientas. Pero ¡cuidado! No les den demasiada, ¡todo en equilibrio!"
        textoDeImagen="¿Qué son las plantas?"/>
      </div>

      <div className='Apli3'>
        <BotonMedio 
        imagenA="i1i.gif"
        imagenB="i1.jpg"
        textoA="El objetivo principal de una flor es la reproducción del individuo y de la especie. Todas las plantas con flores son heterosporosas, es decir, cada planta individual produce dos tipos de esporas. Las microsporas son producidas por la meiosis dentro de las anteras y las megasporas se producen dentro de los óvulos que están dentro de un ovario. Las anteras consisten típicamente en cuatro microsporangias y un óvulo es un megagasporangium integumentado."
        textoB="En la mayoría de las especies de plantas, las flores individuales tienen carpelos y estambres funcionales. 
        Los botánicos describen estas flores como perfectas o bisexuales, y las especies como hermafroditas. En una 
        minoría de especies de plantas, sus flores carecen de uno u otro órgano reproductor y se describen como imperfectas o unisexuales."
        direccionImagen="imagen_2.jpg" 
        textoDeImagen="¿Qué función tienen las flores en las plantas?"/>
      </div>

      <div className='Apli3'>
        <BotonMedio
        imagenA="i2.avif"
        imagenB="i2i.jpg"
        textoA="Las partes de una flor son los sépalos, la corola, el androceo, el gineceo, los carpelos, el pedúnculo y el receptáculo. 
        Las partes de las flores se dividen en las que tienen una función reproductora y las que no. El androceo es la parte masculina 
        y el gineceo la parte femenina de la flor."
        textoB="Cuando una flor tiene todas estas estructuras se dice que son flores completas, por ejemplo los lirios. 
        Por el contrario, flores como la begonia, que no presenta pétalos, u otras flores que no poseen alguna de las partes, 
        se llaman flores incompletas."
        direccionImagen="imagen_3.jpg" 
        textoDeImagen="¿Cuáles son las partes principales de una planta?"/>
      </div>

      <div className='Apli6'>
        <BotonMedioSuper 
          direccionImagen="sol.gif" 
          textoA="La fotosíntesis es como la varita mágica de las plantas. Ellas la usan para convertir la luz del sol en su comida especial. Imaginen que las plantas tienen una fiesta de luces en sus hojas, y con esa luz, crean deliciosos bocadillos que les dan energía y hacen que crezcan fuertes. ¡Es la receta secreta de las plantas para estar felices y saludables!"
          textoB="¡Hola pequeños magos del jardín! Las plantas tienen un truco muy especial llamado fotosíntesis. Es como su superpoder para hacer comida a partir de la luz del sol. Cuando vean a las plantas felices bajo el sol, recuerden que están preparando su propia fiesta de luces para estar fuertes y llenas de vida. ¡Agradezcamos a las plantas por compartir su receta mágica con nosotros! 🌞🌱"
          imagenA="img_6.gif"
          imagenB="img_6a.webp"
          textoDeImagen="¿Qué es la fotosintesis? ☀️"/>

      </div>

      <div className='Apli3'>
        <BotonMedio 
          direccionImagen="imagen_4.png"
          imagenA="i3i.gif" 
          imagenB="i3.png"
           textoA="El reciclaje es el proceso mediante el cual los desechos se convierten en nuevos 
           productos o en recursos materiales con el que fabricar otros productos. De esta forma, los residuos se 
           someten a un proceso de transformación eco-ambiental para poder ser aprovechados en algún proceso de fabricación,
            reduciendo el consumo de materias primas y ayudando a eliminar residuos."
            textoB="Es importante diferenciar entre reciclar y reutilizar, siendo esto último el aprovechamiento de un determinado
            objeto para otro uso, sin necesidad de someterlo a un proceso físico-químico de transformación. Por ejemplo, utilizar 
            una botella como florero o hacer una cartera con un viejo pantalón vaquero. Mientras que el reciclaje implica la transformación 
            de los residuos, mediante procesos que convierten esos desechos en un producto o material nuevo."
          textoDeImagen="¡Aprende sobre el reciclaje!"/>
      </div>

      <div className='Apli3'>
        <BotonMedio 
        direccionImagen="imagen_5.png" 
         textoA="El cambio climático es un cambio en el clima, atribuido directa o indirectamente a la actividad humana que 
         altera la composición de la atmósfera mundial, y que se suma a los cambios regulares que, de forma natural, se dan en el planeta."
         textoB="La Tierra tiene ciclos naturales que se cumplen cada cierto tiempo, entre los que están los cambios climáticos. Por ejemplo, 
         hace unos 10.000 años, el clima de nuestro planeta era más frío que el actual y los glaciares ocupaban un gran porcentaje de la 
         superficie terrestre; poco a poco sucedieron cambios que pusieron fin a ese último período glaciar."
         imagenA="i4i.gif"
         imagenB="i4.png"
        textoDeImagen="¿Cuáles son algunas causas del cambio climático?"/>
      </div>

      <div className='Apli3'>
        <BotonMedio 
        direccionImagen="imagen_6.jpg" 
         textoA="Incentivar las caminatas, además del uso de la bicicleta y el transporte público para llegar al trabajo 
         Restringir o gravar el uso de plásticos de un solo uso, como bolsas, envases, botellas y cubiertos de plástico
         Restaurar los ecosistemas urbanos y desarrollar la naturaleza de manera sostenible mediante la promoción de áreas 
         como humedales urbanos y corredores verdes para proporcionar un hábitat para la biodiversidad"
         textoB="Recoger, separar y eliminar los residuos de forma segura para proteger la tierra y el agua, fomentar la reducción de sustancias nocivas 
         para el medio ambiente y fomentar el reciclaje por parte de los ciudadanos y las empresas, formar parte de organizaciones que fomentan la sustentabilidad y la restauración de la naturaleza y apoyar campañas que generen cambios en la sociedad, 
         pensadas en combatir la contaminación ambiental."
         imagenA="i5i.gif"
         imagenB="i5.avif"
        textoDeImagen="¿Cuál es tu misión en la prevención de la contaminación?"/>
      </div>
      
    </div>
    
    </>
  )
}