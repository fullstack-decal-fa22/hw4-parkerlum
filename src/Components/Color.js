import React from 'react';

/* TODO: Translate the below class component to a functional component! */
const Color  = (props) => {
    /* TODO */

    return (
        <button onClick={() => props.onClick(props.color)}>Post {props.color}</button>
        
    );
}



export default Color;