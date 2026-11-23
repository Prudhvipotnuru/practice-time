import { Component } from "react";

class UserClass extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
        console.log("class Component constructor");
    }
    componentDidUpdate(){
        console.log("class component updated");
    }
    componentDidMount(){
        console.log("class component mounted");
    }
    render(){
        console.log("class Component rendered");
        const {name, rollNo}=this.props;
        const {count} = this.state;
        return (
            <div className="m-5 p-3 border-2 w-40 rounded-md bg-amber-200 shadow-amber-400
            hover:scale-110 duration-300">
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }} className="bg-blue-300 p-2 border-2 rounded-l-2xl 
                rounded-r-lg font-serif hover:bg-blue-500 cursor-not-allowed">Count: {count}</button>
                <h2>{name}</h2>
                <p>Roll No: {rollNo}</p>
                <p>Class: 5th</p>
            </div>
        )
    }
}
export default UserClass;