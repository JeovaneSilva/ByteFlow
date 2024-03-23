import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import { FAQ } from '../styles/styleComponents'

const FAQs = ({pergunta}) => {
  return (
    <FAQ>
        <p>{pergunta}</p>
        <FaAngleRight />
    </FAQ>
  )
}

export default FAQs