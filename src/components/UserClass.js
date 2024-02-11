
import React from "react";

class UserClass extends React.Component{

    constructor (props){
        super(props);
         this.state={
           userInfo:{
            name: "Rakesh kushwaha  ",
            location: "Prayagraj"
                 },
         };
        //  console.log( this.props.name+"Constructing");
    }

     async componentDidMount(){
        // console.log(this.props.name+"Child Component")

        const data = await fetch("https://api.github.com/users/RAKESHKUSHWAHA7518")
        const json = await data.json();
       
        this.setState({userInfo: json,
        });
        console.log(json);
    }

      componentDidUpdate(){
        console.log("componentDidUpdate")
      }

      componentWillUnmount(){
        console.log("componentWillUnmount")
      }
    render(){

    //  const {name} = this.props;
     
    //  console.log (this.props.name+" child render")
       const {name,location,id,avatar_url  } = this.state.userInfo;

        return ( 
          <div className="  place-content-center  ">
            <div className="user-card m-4 p-4 border  rounded-lg bg-blue-200  justify-center">
            
            <img className="bg-gray-200 place-content-center  hover:bg-green-200"src={avatar_url}></img>
            
        {/* <h2 className=" j"> Name :Rakesh kushwaha1</h2> */}
        <h2 className="font-bold"> Name : { name}</h2>
        <h3 className="font-light"> location : Akabar shahpur Meja Prayagraj</h3>
        <h3 className="font-light"> location : {location}</h3>
        <h3 className="font-light"> Id: {id}</h3>
         
        <h4>Contact : rk7518329420@gmail.com</h4>
         </div>
         </div>
         )

    }
}

export default UserClass;