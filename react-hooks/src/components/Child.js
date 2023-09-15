import React from 'react';

export default function Child({count, decr}){
    return(
        <div>
            <h2>Child Component</h2>
            <p>Received Count from Parent : {count}</p>      
            <button onClick={decr}>Decrement</button>
        </div>
    )
}