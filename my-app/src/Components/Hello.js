import React from 'react'

const Hello = () => {
    // return(
    //     <di>
    //         <h1>Hello Vijay</h1>
    //     </di>
    // )

    return React.createElement('div',{id:"hello", className:"dummy class"},React.createElement('h1',null,'Hello Vijay'))
}
export default Hello