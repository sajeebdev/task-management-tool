import React, { useEffect, useState } from 'react';
import TodoTask from './TodoTask';
import "./Todo.css";
const Todo = () => {
    const [alltask ,setAlltask] = useState([]);

    useEffect(()=>{
        fetch("https://dry-spire-73040.herokuapp.com/task")
        .then(res=>res.json())
        .then(data=>setAlltask(data))
    },[alltask])
  
    return (
        <div className='display-view'>

            <div className=" card-items">
            <TodoTask/>
           </div>
          

            </div>
         
    );
};

export default Todo;