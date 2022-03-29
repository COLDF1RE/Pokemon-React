import React, {useState} from 'react';

const Search = () => {

    const [search, setSearch] = useState('hi')

    const getSearch = (e) => {
        e.preventDefault()

    }


    return (
        <form>
            <h1>{search}</h1>
            <input value={search} onChange={event => setSearch(event.target.value)} type="text"/>
            <button onClick={getSearch}>поиск</button>
        </form>
    );
};

export default Search;