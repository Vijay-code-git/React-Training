import React, {useState} from 'react';

function String() {
    let[name, setName] = useState('');

    const morning = () => {
        setName(name = "Wakes up at 6am");
    };

    const night = () => {
        setName(name = "Sleeps at 10pm");
    };

    return(
        <div>
            <p><h2>Vijay {name}</h2></p>
            <button onClick={morning}>Morning</button>
            <button onClick={night}>Night</button>
        </div>
    )
}
export default String;