
import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import  UserContext  from "../utils/UserContext"

class  About   extends React.Component{

    constructor(props){
        super(props);
        // console.log(" Parent Construct")
    }

    componentDidMount(){
        // console.log(" parent Component is mounted");
    }
    render(){
        // console.log(" Parent Rendering...");


       

        return (
            <div>
                <h1 className="m-4 px-4  font-bold">About class </h1>

                <div> 
                    loggedIn User

                    <UserContext.Consumer>
                        {({loggedInUser})=> <h1 className="font-bold p-6">{ loggedInUser}</h1>}
                    </UserContext.Consumer>
                    

                     

                </div>
                <h2 className="m-4 px-4 font-bold"> Namaste React Student</h2>
                {/* <User name = {"Rakesh Kushwaha(fuctional)"}/> */}
    
                 
                <UserClass name = {"Rakesh Kushwaha (class base component) "} />
                 
            </div>
        );
    }
}


// const About =() =>{
//     return(
//         <div>
//             <h1>About</h1>
//             <h2> Namaste React Student</h2>
//             <User name = {"Rakesh Kushwaha(fuctional)"}/>

             
//             <UserClass name = {"Rakesh Kushwaha (class base component) "} />
//         </div>
//     );
// }

export default About;