import React from 'react';
import ClassChild from './ClassChild.js'

class ClassParent extends React.Component{
    render(){
        const greeting = "Hello World";

        return(
           <div>
            <ClassChild child = {greeting}/>
           </div>
        )
    }
}
export default ClassParent;