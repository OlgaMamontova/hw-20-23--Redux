import React, { Component } from "react";
import Form from "./Form";
import Posts from "./Posts";

class Home extends Component{
   render(){
    return (
        <div>
            <Form />
            <Posts />
        </div>
    );
   }
}

export default Home;