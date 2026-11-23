import { useState } from "react";

function User(props){
    console.log("functional Component rendered");
    const {name, rollNo,aclass}=props;
    const [count,setCount]=useState(0);
    return (
        <div className="m-5 p-3 border-2 border-black w-40 rounded-md shadow-2xl 
         hover:scale-105 duration-300 bg-pink-200">
            <button onClick={()=>setCount(count+1)}
             className="bg-green-300 border-2 p-2 rounded-lg font-mono
              hover:bg-green-400 cursor-pointer"
            >Count: {count}</button>
            <h2 className="font-bold font-mono">{name}</h2>
            <p>Roll No: {rollNo}</p>
            <p>Class: {aclass}</p>
        </div>
    )
}

export default User;