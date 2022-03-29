import React, {useState} from 'react';
import axios from "axios";

const TestBooksApi = () => {

    const [books, setBooks] = useState(null);
    const pokemonURL = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20'
    const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";

    const fetchData = async () => {
        const response = await axios.get(apiURL)

        setBooks(response.data)
    }


    return (
        <div>

            <h1>Game of Thrones Books</h1>
            <h2>Fetch a list from an API and display it</h2>

            {/*/_ Запрос данных из API _/*/}
            <div>
                <button className="fetch-button" onClick={fetchData}>
                    Fetch Data
                </button>
            </div>

            {/*{/_ Отображение данных из API _/}*/}
            <div className="books">
                {books &&
                books.map((book, index) => {
                    const cleanedDate = new Date(book.released).toDateString();
                    const authors = book.authors.join(', ');

                    return (
                        <div className="book" key={index}>
                            <h3>Book {index + 1}</h3>
                            <h2>{book.name}</h2>

                            <div className="details">
                                <p>👨: {authors}</p>
                                <p>📖: {book.numberOfPages} pages</p>
                                <p>🏘️: {book.country}</p>
                                <p>⏰: {cleanedDate}</p>
                            </div>
                        </div>
                    );
                })}

            </div>
        </div>
    );
};

export default TestBooksApi;