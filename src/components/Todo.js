import React, { useEffect, useState } from 'react';
import TodoTask from './TodoTask';
import "./Todo.css";
const Todo = () => {
    const [alltask ,setAlltask] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/task")
        .then(res=>res.json())
        .then(data=>setAlltask(data))
    },[])
  
    return (
        <div>

            <div className=" card-items">
            {
                   alltask.map(alltask=><TodoTask
                    key={alltask._id}
                    alltask={alltask}

                   ></TodoTask>)
               }
           </div>

            </div>
         
    );
};

export default Todo;