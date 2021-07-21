import React from 'react'
import './styles.css'
import image from './img/image.png'

export default function HomeScreen() {
    return (
        <div className="container">
            <h1>Bem-Vindo ao cadastro do Inventário</h1>
            <img className="image-home" src={image} alt=""/>
        </div>
    )
}