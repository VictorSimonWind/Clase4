import React from 'react'

export default function FunctionComponent(props) {
    console.log(props);
    return (
        
        <div className='FunctionComponent box'>
            <h2>{props.titulo}</h2>
            <p>{props.descripcion}</p>
        </div>
    )
}
