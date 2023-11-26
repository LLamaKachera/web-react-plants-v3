import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
//! continuar desde acá -- Poner respaldo de seguimiento .TXT
export function App () {
  return(
    <section className='Apli'>
      <TwitterFollowCard isFollowing={true} userName="llama" name="Llama"/>
      <TwitterFollowCard isFollowing={false} userName="MrCat" name="White Cat"/>
      <TwitterFollowCard isFollowing={true} userName="Dog" name="Perro Salchicha Jr"/>
    </section>
  )
}