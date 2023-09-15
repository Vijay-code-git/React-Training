import React from 'react';
import ChildProps from './ChildProps';
import ChildTwoProps from './ChildTwoProps';
import State from './State';


function ParentProps(){
    const message = "Hello World!";
    return(
        <div>
            <ChildProps props = {message}/>
            <ChildTwoProps propsone = {message}/>
            <State state = {message}/>
        </div>
    )
   
}
export default ParentProps;