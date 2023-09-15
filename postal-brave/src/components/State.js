import React from "react";

class State extends React.Component{
    greeting={
        name : "Hello CTP"
    }

    updateName(){
        this.setState(this.greeting=
            {name:"Good Morning"}
        )
    }

    revertMsg() {
        
            this.setState(this.greeting=
                {name:"Hi There!"},2000)

      }

    render(){
        return(
            <div>
                <h1>{this.greeting.name}</h1>

                <button onClick={()=>setTimeout(()=>{this.updateName(()=>setTimeout(this.revertMsg()),3000)},2000)}>Update</button>
            </div>
        )
    }
}
export default State;