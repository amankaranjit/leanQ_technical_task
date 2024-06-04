import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ToyCard from './ToyCard';
import { fetchToy } from '../../api/api';
interface Pokemon {
    id: number;
    name: string;
    sprites: {
        front_default: string;
    };
    types: { type: { name: string } }[];
    base_experience: number;
    abilities: { ability: { name: string } }[];
}

const ToyWrapper: React.FC = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                const pokemonData = await fetchToy();
                const detailedPromises = pokemonData.map((pokemon: { url: string }) =>
                    axios.get<Pokemon>(pokemon.url).then(details => details.data)
                );

                const detailedPokemons = await Promise.all(detailedPromises);
                setPokemons(detailedPokemons);
            } catch (error) {
                console.error("Error fetching Pokémon data:", error);
            }
        };

        fetchPokemonData();
    }, []);
    return (
        <div className="container">
            <h2 className='title'>Toy List</h2>
            <div className="pokemon-list">
                <div className="row">
                    {pokemons.map(pokemon => (
                        <ToyCard
                            key={pokemon.id}
                            name={pokemon.name}
                            image={pokemon.sprites.front_default}
                            type={pokemon.types.map(typeInfo => typeInfo.type.name)}
                            base_experience={pokemon.base_experience}
                            abilities={pokemon.abilities.map(abilityInfo => abilityInfo.ability.name)}
                        // gameIndices={pokemon.gameIndices} // Passed gameIndices data
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ToyWrapper;
