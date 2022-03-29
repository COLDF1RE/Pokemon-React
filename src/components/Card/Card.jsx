import React from 'react';
import typeColors from '../../helpers/typeColors'
import './Card.css';

function Card({pokemon}) {

    function effectiveType(type) {

        const fire = {
            damage2xTo: ['bug', 'grass', 'ice', 'steel'],
            damage05xTo: ['dragon', 'fire', 'rock', 'water',],
            damage05xFrom: ['bug', 'fairy', 'fire', 'grass', 'ice', 'steel'],
            damage2xFrom: ['ground', 'rock', 'water'],
        }
        const flying = {
            damage2xTo: ['bug', 'fighting', 'grass'],
            damage05xTo: ['electric', 'rock', 'steel'],
            damage05xFrom: ['ground (immune)', 'bug', 'fighting', 'grass'],
            damage2xFrom: ['electric', 'ice', 'rock'],
        }
        const water = {
            damage2xTo: ['fire', 'ground', 'rock'],
            damage05xTo: ['dragon' , 'grass', 'water'],
            damage05xFrom: ['fire', 'ice', 'steel', 'water'],
            damage2xFrom: ['electric', 'grass'],
        }
        const grass = {
            damage2xTo: ['ground', 'rock', 'water'],
            damage05xTo: ['bug', 'dragon', 'fire', 'flying', 'grass', 'poison', 'steel'],
            damage05xFrom: ['electric', 'grass', 'ground', 'water'],
            damage2xFrom: ['bug', 'fire', 'flying', 'ice', 'poison'],
        }
        const electric = {
            damage2xTo: ['flying', 'water' ],
            damage05xTo: [ 'ground (can\'t damage)', 'dragon', 'electric', 'grass'],
            damage05xFrom: ['electric', 'flying', 'steel'],
            damage2xFrom: ['ground'],
        }
        const psychic = {
            damage2xTo: ['fighting', 'poison'],
            damage05xTo: ['dark (can\'t damage)', 'psychic', 'steel'],
            damage05xFrom: ['fighting', 'psychic'],
            damage2xFrom: ['bug',  'dark', 'ghost'],
        }
        const ground = {
            damage2xTo: ['electric', 'fire', 'poison', 'rock', 'steel'],
            damage05xTo: ['flying (can\'t damage)', 'bug', 'grass',],
            damage05xFrom: ['electric(immune)','poison', 'rock'],
            damage2xFrom: ['grass', 'ice', 'water'],
        }
        const poison = {
            damage2xTo: ['grass', 'fairy'],
            damage05xTo: ['steel (can\'t damage)', 'ghost', 'ground', 'poison', 'rock'],
            damage05xFrom: ['bug', 'fairy', 'fighting', 'grass', 'poison'],
            damage2xFrom: ['ground', 'psychic'],
        }
        const fighting = {
            damage2xTo: ['dark', 'ice', 'normal', 'rock', 'steel'],
            damage05xTo: ['ghost (can\'t damage)', 'bug', 'fairy', 'flying', 'poison', 'psychic'],
            damage05xFrom: ['bug', 'dark', 'rock'],
            damage2xFrom: ['fairy', 'flying', 'psychic'],
        }
        const rock = {
            damage2xTo: ['bug', 'fire',  'flying','ice' ],
            damage05xTo: ['fighting', 'ground', 'steel'],
            damage05xFrom: ['fire',  'flying', 'normal', 'poison'],
            damage2xFrom: ['fighting', 'grass', 'ground', 'steel', 'water'],
        }
        const bug = {
            damage2xTo: ['psychic', 'grass', 'dark'],
            damage05xTo: ['fighting', 'fire', 'flying', 'ghost', 'poison', 'steel','fairy'],
            damage05xFrom: ['fighting', 'grass', 'ground'],
            damage2xFrom: ['flying', 'fire', 'rock'],
        }
        const fairy = {
            damage2xTo: [ 'dark', 'dragon', 'fighting'],
            damage05xTo: ['fire', 'poison', 'steel'],
            damage05xFrom: ['dragon (immune)', 'bug', 'dark', 'fighting'],
            damage2xFrom: ['poison', 'steel'],
        }
        const ghost = {
            damage2xTo: ['ghost', 'psychic'],
            damage05xTo: ['normal (can\'t damage)', 'dark'],
            damage05xFrom: ['normal (immune)', 'fighting (immune)', 'bug', 'poison'],
            damage2xFrom:['ghost', 'dark'],
        }
        const dragon = {
            damage2xTo: ['dragon'],
            damage05xTo: ['fairy (can\'t damage)', 'steel'],
            damage05xFrom: ['electric', 'fire', 'grass', 'water'],
            damage2xFrom:['dragon', 'ice', 'fairy'],
        }
        const ice = {
            damage2xTo: ['dragon', 'flying', 'grass', 'ground'],
            damage05xTo: ['fire', 'ice', 'steel', 'water'],
            damage05xFrom: ['ice'],
            damage2xFrom: ['fighting', 'fire', 'rock', 'steel'],
        }
        const steel = {
            damage2xTo: ['fairy', 'ice', 'rock'],
            damage05xTo: ['electric', 'fire', 'steel', 'water'],
            damage05xFrom: ['bug', 'dragon', 'fairy', 'flying', 'grass', 'ice', 'normal' , 'psychic', 'rock' , 'steel'],
            damage2xFrom: ['fighting', 'fire', 'ground'],
        }
        const normal = {
            damage2xTo: ['none'],
            damage05xTo: ['ghost (can\'t damage)', 'rock' , 'steel'],
            damage05xFrom: ['none'],
            damage2xFrom: ['fighting'],
        }
        const dark = {
            damage2xTo: ['psychic', 'ghost'],
            damage05xTo: ['dark', 'fighting', 'fairy'],
            damage05xFrom: ['psychic (immune)', 'dark', 'ghost'],
            damage2xFrom: ['bug' , 'fighting', 'fairy' ],
        }

        function effective(type){
            return (
                <>
                    <div className={'pokemonType'}>
                        {
                            type.damage2xTo.map(t => {
                                return (<p className={'pokemonType__item'} style={{backgroundColor: typeColors[t]  || typeColors.another}}>{t}</p>)
                            })
                        }
                    </div>
                    <div className={'pokemonType'}>
                        {
                            type.damage05xFrom.map(t => {
                                return (<p className={'pokemonType__item'} style={{backgroundColor: typeColors[t]  || typeColors.another}}>{t}</p>)
                            })
                        }
                    </div>
                    <div className={'pokemonType'}>
                        {
                            type.damage05xTo.map(t => {
                                return (<p className={'pokemonType__item'} style={{backgroundColor: typeColors[t]  || typeColors.another}}>{t}</p>)
                            })
                        }
                    </div>
                    <div className={'pokemonType'}>
                        {
                            type.damage2xFrom.map(t => {
                                return (<p className={'pokemonType__item'} style={{backgroundColor: typeColors[t]  || typeColors.another}}>{t}</p>)
                            })
                        }
                    </div>
                </>
            )
        }

        if (type === 'psychic') {
            return effective(psychic)
        }
        if (type === 'fire') {
            return effective(fire)
        }
        if (type === 'flying') {
            return effective(flying)
        }
        if (type === 'water') {
            return effective(water)
        }
        if (type === 'grass') {
            return effective(grass)
        }
        if (type === 'electric') {
            return effective(electric)
        }
        if (type === 'ground') {
            return effective(ground)
        }
        if (type === 'fighting') {
            return effective(fighting)
        }
        if (type === 'rock') {
            return effective(rock)
        }
        if (type === 'bug') {
            return effective(bug)
        }
        if (type === 'fairy') {
            return effective(fairy)
        }
        if (type === 'ghost') {
            return effective(ghost)
        }
        if (type === 'poison') {
            return effective(poison)
        }
        if (type === 'dragon') {
            return effective(dragon)
        }
        if (type === 'ice') {
            return effective(ice)
        }
        if (type === 'steel') {
            return effective(steel)
        }
        if (type === 'normal') {
            return effective(normal)
        }
        if (type === 'dark') {
            return effective(dark)
        }
    }


    return (
        <div className="Card">
            <p className="Card__id">{pokemon.id}</p>
            <div className="Card__container">
                <div className="Card__img">
                    <img src={pokemon.sprites.front_default} alt=""/>
                </div>
                <h4 className="Card__name">
                    {pokemon.name}
                </h4>
            </div>

            <div className="Card__info-container">

            <div className="Card__info">
                <div className="types">Тип покемона</div>
                <div className="type">
                    {
                        pokemon.types.map(type => {
                            return (
                                <div key={type.type.id} className='type__item' style={{backgroundColor: typeColors[type.type.name]}}>{type.type.name}</div>
                            )
                        })
                    }
                </div>
                <div className="effective">Эффективность типа покемона</div>
                <div className="damage">
                    <div className="damage__item">наносит 2х урон по (сильнее)</div>
                    <div className="damage__item">получает 0.5х урона от (сильнее)</div>
                    <div className="damage__item">наносит 0.5х урон по (слабее)</div>
                    <div className="damage__item">получает 2х урона от (слабее)</div>
                </div>
                <div className="damageTypes">
                    {
                        pokemon.types.map(type => {
                            return (effectiveType(type.type.name))
                        })
                    }
                </div>
            </div>
            </div>


            <div className="Card__info2">
                {/*<div className="Card__data Card__data--weight">*/}
                {/*    <h5 className="title">Параметры</h5>*/}
                {/*</div>*/}
                <div className="Card__data Card__data--weight">
                    <h5 className="title">Weight</h5>
                    <p>{pokemon.weight}</p>
                </div>
                <div className="Card__data Card__data--weight">
                    <h5 className="title">Height</h5>
                    <p>{pokemon.height}</p>
                </div>
                {/*<div className="Card__data Card__data--ability">*/}
                {/*    <h5 className="title">Ability</h5>*/}
                {/*    <p>{pokemon.abilities[0].ability.name}</p>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

export default Card;





