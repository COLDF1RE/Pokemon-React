import React, {useState} from 'react';
import axios from "axios";

const TestApi = () => {

// // const baseURL = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20'
//     const baseURL = 'https://pokeapi.co/api/v2/pokemon/1'
//     fetch(baseURL)
//         .then((response) => response.json())
//         .then((data) => {
//             // console.log(data)
//             // console.log(data.results)
//             // console.log(data.id)
//             // console.log(data.sprites.front_default)
//             // console.log(`name: ${data.name}`)
//             // console.log(data.types[0].type.name)
//             // console.log(data.types[1].type.name)
//
//             const obj = {
//                 id: data.id,
//                 type: data.types[0].type.name
//             }
//
//             console.log(obj)
//
//         })
//
//
// // fetch('https://pokeapi.co/api/v2/pokemon-species/1/')
// //     .then((response) => response.json())
// //     .then((data) => {
// //         // console.log(data)
// //         console.log(data.flavor_text_entries[0].flavor_text)
// //
// //     })






    // const requestURL = 'https://jsonplaceholder.typicode.com/users'
    //
    // const xhr = new XMLHttpRequest()
    // xhr.open('GET', requestURL)
    // xhr.responseType = 'json'
    // xhr.onload = () => {
    //     if (xhr.status >= 400) {
    //         console.error(xhr.response)
    //     } else {
    //         console.log(xhr.response)
    //     }
    // }
    // xhr.onerror = () => {
    //     console.log(xhr.response)
    // }
    // xhr.send()




    // const requestURL = 'https://jsonplaceholder.typicode.com/users'
    //
    // function sendRequest(method, url, body = null) {
    //     return new Promise((resolve, reject) => {
    //         const xhr = new XMLHttpRequest()
    //         xhr.open(method, url)
    //         xhr.responseType = 'json'
    //         xhr.setRequestHeader('Content-Type', 'application/json')
    //         xhr.onload = () => {
    //             if (xhr.status >= 400) {
    //                 reject(xhr.response)
    //             } else {
    //                 resolve(xhr.response)
    //             }
    //         }
    //         xhr.onerror = () => {
    //             reject(xhr.response)
    //         }
    //         xhr.send(JSON.stringify(body))
    //     })
    // }
    //
    // sendRequest('GET', requestURL)
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err))
    //
    //
    // const body = {
    //     name: 'V',
    //     age: 23,
    // }
    //
    // sendRequest('POST', requestURL, body)
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err))


    // const requestURL = 'https://jsonplaceholder.typicode.com/users'
    //
    // function sendRequest(method, url, body = null) {
    //     const headers = {
    //         'Content-Type': 'application/json'
    //     }
    //     return fetch(url, {
    //         method: method,
    //         body: JSON.stringify(body),
    //         headers: headers,
    //     })
    //         .then(response => {
    //             if (response.ok) {
    //                 return response.json()
    //             }
    //             return response.json().then(error => {
    //                 const e = new Error('Что-то пошло не так')
    //                 e.data = error
    //                 throw e
    //             })
    //         })
    // }

    // sendRequest('GET', requestURL)
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err))

    // const body = {
    //     name: 'V',
    //     age: 23,
    // }
    //
    // sendRequest('POST', requestURL, body)
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err))



















    // let a = 12
    // let b = 3
    // let pica = (v, d) => {
    //   let ab = a + b;
    //   return ab
    //
    // }
    // let ab = pica()
    // console.log(ab)





    const [pokemon, setPokemon] = useState(null)

    const fetchData = async () => {
        // const url1 = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20'
        const url2 = 'https://pokeapi.co/api/v2/pokemon/2'
        //const response = await fetch(url2)
        // const json = await response.json()

        const response = await axios.get(url2)



        const pokemon = {
            id: response.data.id,
            name: response.data.name,
            type: response.data.types[0].type.name
        }

        setPokemon(response.data)
    }


    // fetchData()
    // console.log(pokemon)








    return (
        <div>
            
        </div>
    );
};

export default TestApi;