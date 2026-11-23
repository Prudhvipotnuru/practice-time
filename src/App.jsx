import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class App extends Component{
  constructor(){
    super();
    console.log("Parent class Constructor")
  }
  componentDidUpdate(){
    console.log("Parent Class component updated");
  }
  componentDidMount(){
    console.log("Parent Class component mounted");
  }
  render(){
    console.log("Parent class render");
    return (
      <div>
        <h1>This is practice time...</h1>
        <div className="flex">
          <User name={"Deepthi Kuppili"} rollNo={1} aclass={"4th"}></User>
          <UserClass name={"Sudheer Potnuru"} rollNo={34}></UserClass>
        </div>
      </div>
    )
  }
}

export default App;