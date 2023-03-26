 export async function todosLosPokemon() {
    const response=await fetch(
        'https://pokeapi.co/api/v2/pokemon/?limit=493'
    )
    console.log(response);
    if(!response.ok){
        throw new Error('Failed to fetch Pokemon');
    }
    const {results}=await response.json();
    
    const pokemonList: any = await Promise.all(results.map(async (pokemon: any) => {
        const pokemonResponse = await fetch(pokemon.url);
        const pokemonData = await pokemonResponse.json();
        return {
          id: pokemonData.id,
          name: pokemonData.name,
          imgsrc:`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemonData.name.toLowerCase()}.gif`,
          types: pokemonData.types.map((type: any) => type.type.name),
          height: pokemonData.height,
          weight: pokemonData.weight,
          abilities: pokemonData.abilities.map((ability: any) => ability.ability.name),
          image: pokemonData.sprites.other.home.front_default,
          hp: pokemonData.stats[0].base_stat,
          attack: pokemonData.stats[1].base_stat
        }
      }));
      
      return pokemonList;
}
