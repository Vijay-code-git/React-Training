import React, {useState} from 'react';

function Array(){
    const[item, setItem] = useState([]);

    const addItem = () => {
        setItem([...item, `Item ${item.length + 1}`]);
    };

    return(
        <div>
            <h1>Array State Example</h1>
            <button onClick={addItem}>Add Item</button>
            <ul>
                {item.map((items) => (
                    <li>{items}</li>
                ))}
            </ul>
        </div>
    )
}
export default Array;