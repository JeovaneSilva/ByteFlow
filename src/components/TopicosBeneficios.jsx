import React from 'react'
import { TopicosBen } from '../styles/styleComponents'

const TopicosBeneficios = ({h3, h4, p}) => {
  return (
    <TopicosBen>
        <div>
            <h3>{h3}</h3>
        </div>
        
        <div>
            <h4>{h4}</h4>
            <p>{p}</p>
        </div>
    </TopicosBen>
  )
}

export default TopicosBeneficios