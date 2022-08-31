import React from 'react'
import CardProyects from './card/CardProyects'
import styles from './proyect.module.css'

const ProyectComponent = () => {
  return (
    <div className={styles.container}>
        <CardProyects
            type='frontend'
            titleCard='Frontend Reverse Text'
            descriptionCard='En esta app utilizando react cree una simple interface para utilizar la aplicación de backend que desarrolle.'
            refLink={{ deployed: 'https://frontend-challenge-reac-redux.herokuapp.com/', repository: 'https://github.com/PMolina00/frontend_challenge' }}
        />
        <CardProyects
            type='backend'
            titleCard='Backend Reverse Text'
            descriptionCard='En esta api Rest mediante la utilización de los endpoint correspondientes, se obtiene el texto que le pasemos revertido y en caso de que el texto sea un palíndromo se devuelve en una variable booleana ( Tanto si es como si no lo es ).'
            refLink={{ deployed: 'https://backend-restapi-challenge.herokuapp.com/', repository: 'https://github.com/PMolina00/backend_challenge' }}
        />
        <CardProyects
            type='frontend'
            titleCard='Portfolio'
            descriptionCard='En esta app de NextJs es la misma que están viendo actualmente, en la que utilizando mis conocimientos en react y next, junto a css espero poder mostrar mis conocimientos.'
            refLink={{ deployed: null, repository: 'https://github.com/PMolina00/portfolio' }}
        />
        <CardProyects
            type='backend'
            titleCard='Clean Architecture Backend'
            descriptionCard='En esta app de backend, implementé algunas de las buenas practicas que conozco de momento y mediante programación orientada a objetos logre manejar un CRUD para una Rest api y para una api de GraphQL, con la cual se puede manejar usuarios y notas, que se guardan en una base de datos de MongoDB.'
            refLink={{ deployed: null, repository: 'https://github.com/PMolina00/clean-architecture-backend' }}
        />
    </div>
  )
}

export default ProyectComponent
