import React from 'react'
import ButtonAcessarProjeto from './ButtonAcessarProjeto'
import { DivCards } from '../styles/styleComponents'

const Cards = ({src, title, paragrafo, card}) => {
  return (
    <DivCards card={card}>

        <img src={src} alt="" />
        
        <h3>{title}</h3>
        <p>{paragrafo}</p>
        <ButtonAcessarProjeto/>
    </DivCards>
  )
}

export default Cards