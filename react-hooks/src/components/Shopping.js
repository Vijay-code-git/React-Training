import React, {useState} from 'react';
import Child from './Child';

function Shopping() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count +1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return(
        <div>
            <h1>Counter</h1>
            <p>Count : {count}</p>
            <button onClick={increment}>Increment</button> 
            {/* <button onClick={decrement}>Decrement</button> */}
            <Child count={count} decr={decrement}/>
        </div>
    )   
}
export default Shopping;