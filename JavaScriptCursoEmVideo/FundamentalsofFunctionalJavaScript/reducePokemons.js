const pokemons = [
    {
    name:'Pikachu',
    type:'Eletric'    
    },
    {
    name:'Squirtle',
    type:'Water'
    },
    {
    name:'Magikarp',
    type:'Water'
    },
    {
    name:'Charizard',
    type:'Fire'
    }
];

const pokemonPorTipo = pokemons.reduce((pokemonPorTipo,pokemonAtual) => {
    console.log(pokemonAtual);  
    pokemonPorTipo[pokemonAtual.type] = pokemonPorTipo[pokemonAtual.type] || [];
    pokemonPorTipo[pokemonAtual.type].push(pokemonAtual);
    return pokemonPorTipo
},{});

console.log(pokemonPorTipo);