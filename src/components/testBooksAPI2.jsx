import React from 'react';
import axios from "axios";
import './styles/styles.css'


const TestBooksAPI2 = () => {

    const [pokemons, setPokemons] = useState(null);
    const [pokemonInfo, setPokemonInfo] = useState([])

    const pokemonListURL = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=5'
    const pokemonURL = 'https://pokeapi.co/api/v2/pokemon/'

    const fetchData = async () => {
        const response = await axios.get(pokemonListURL)
    }

    console.log(pokemons)


    return (
        <div>
            <h1>POKEMON</h1>
            <h2>Fetch a list from an API and display it</h2>

            {/*/_ Запрос данных из API _*/}
            <div>
                <button className="fetch-button" onClick={fetchData}>
                    Fetch Data
                </button>
            </div>

            {/*{/_ Отображение данных из API _/}*/}
            <div className="books">
                {pokemons &&
                pokemons.results.map((pokemon, index) => {
                    //const cleanedDate = new Date(pokemons.released).toDateString();
                    //const authors = book.authors.join(', ');

                    const fetchData = async () => {
                        const response = await axios.get(pokemon.url)

                        console.log(response.data.height)
                        setPokemonInfo(response.data.height)

                    }
                    fetchData()

                    return (
                        <div className="book" key={index}>
                            <h3># {index + 1}</h3>
                            <h2>{pokemon.name}</h2>
                            <h2>{pokemon.url}</h2>

                            <div className="details">
                                {/*<p>👨: {authors}</p>*/}
                                {/*<p>📖: {pokemon.name} pages</p>*/}
                                {/*<p>🏘️: {book.country}</p>*/}
                                {/*<p>⏰: {cleanedDate}</p>*/}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TestBooksAPI2;