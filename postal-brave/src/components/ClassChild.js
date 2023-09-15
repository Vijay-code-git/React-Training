import React from 'react';

class ClassChild extends React.Component{
    render(){
        const {child} = this.props;
        return(
            <div>
                <h1>{child}</h1>
            </div>
        )
}
}
export default ClassChild;