import './styles.css'
import React from 'react'

const Card = (props: any) => {
    return(
        <div className="card">
            <div className="text">
                <h1>{props.name}</h1>
                <p>{props.text}</p>
            </div>
            <img src={props.img} alt="" />
        </div>
    )
}

export default Card