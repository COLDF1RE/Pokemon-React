import React, {useState, useEffect} from 'react';
import {getPokemon, getAllPokemon} from './services/pokemon';
import './styles/style.scss'
import './App.css';
import Card from './components/Card/Card';
import Navbar from "./components/NavBar/Navbar";
import Search from "./components/Search/Search";
import MySelect from "./components/Select/MySelect";

function App() {
    const [pokemonData, setPokemonData] = useState([])
    const [nextURL, setNextURL] = useState('');
    const [prevURL, setPrevURL] = useState('');
    const [loading, setLoading] = useState(true);
    const initialURL = 'https://pokeapi.co/api/v2/pokemon'


    useEffect(() => {
        async function fetchData() {
            let response = await getAllPokemon(initialURL)
            setNextURL(response.next);
            setPrevURL(response.previous);
            await loadPokemon(response.results);
            setLoading(false);
        }

        fetchData();
    }, [])

    const next = async () => {
        setLoading(true);
        let data = await getAllPokemon(nextURL);
        await loadPokemon(data.results);
        setNextURL(data.next);
        setPrevURL(data.previous);
        setLoading(false);
    }

    const prev = async (e) => {
        if (!prevURL) return;
        setLoading(true);
        let data = await getAllPokemon(prevURL);
        await loadPokemon(data.results);
        setNextURL(data.next);
        setPrevURL(data.previous);
        setLoading(false);
    }

    const loadPokemon = async (data) => {
        let _pokemonData = await Promise.all(data.map(async pokemon => {
            let pokemonRecord = await getPokemon(pokemon)
            return pokemonRecord
        }))
        setPokemonData(_pokemonData);
    }


    const [selectedSort, setSelectedSort] = useState('')
    const sortPokemon = (sort) => {
        setSelectedSort(sort)
        console.log(sort)
    }


    return (
        <>
            <div className="wrapper">


                <header className="header">
                    <Navbar/>
                </header>

                <main className="main">


                    <Search/>
                    <MySelect
                        value = {selectedSort}
                        onChange={sortPokemon}
                        defaultValue='Сортировка по'
                        options={[
                            {value: 'title', name: 'По названию'},
                            {value: 'body', name: 'По описанию'}
                        ]}
                    />

                    <div>
                        {loading ? <h1 style={{textAlign: 'center'}}>Loading...</h1> : (
                            <>
                                <div className="btn">
                                    <button onClick={prev}>Предыдущая стр.</button>
                                    <button onClick={next}>Следующая стр.</button>
                                </div>
                                <div className="grid-container">
                                    {pokemonData.map((pokemon, i) => {
                                        return <Card key={i} pokemon={pokemon}/>
                                    })}
                                </div>
                                <div className="btn">
                                    <button onClick={prev}>Предыдущая стр.</button>
                                    <button onClick={next}>Следующая стр.</button>
                                </div>
                            </>
                        )}
                    </div>

                </main>


                <footer className="footer">

                </footer>
            </div>
        </>
    );
}

export default App;