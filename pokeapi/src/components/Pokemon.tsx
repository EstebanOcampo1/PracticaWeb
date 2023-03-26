import {useState,useEffect} from 'react'
import '../styles/Pokemon.css'
import { todosLosPokemon } from '../apis/fetchPokemon';
export const Pokemon = () => {
    
    const [pokemon, setpokemon] = useState<any>([]);
    
    useEffect(() => {
        const fetchPokemon=async()=>{
            const allpokemon = await todosLosPokemon();
            setpokemon(allpokemon);
          }
          fetchPokemon();
    }, [])

    
    
  return (
    
    <>
        <div className='contenedor'>
            <div className='row pokedex'>
                {pokemon.map((poke:any) =>(
                     <div className='col-4 divPokemon'>
                        
                        <h2>{poke.id}</h2>
                        <img src={poke.imgsrc} className='listIcon'/>
                        <h4>{poke.name.toUpperCase()}</h4>
                        <div className='divTipos'>
                        {poke.types.map((type:any) =>(
                                    <div className='tipo'>
                                     {
                                     type
                                     }
                                     </div>
                        ))}</div>
                        
                     </div>
                ))}
            </div>
            
        </div>
    </>
  )
}