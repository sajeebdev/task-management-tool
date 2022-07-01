import React, { useEffect, useState } from 'react';
import ShortTodo from './ShortTodo';
import './Home.css';
const Home = () => {
    const [alltask ,setAlltask] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/task")
        .then(res=>res.json())
        .then(data=>setAlltask(data))
    },[alltask])
  

    return (
        <div className='display-view'>
             
            <div className="text-center my-5">
               <input className='input input-bordered input-warning w-full max-w-xs ' placeholder="Type here" onKeyPress={(ev) => {
                  if (ev.key === "Enter") {
                   ev.preventDefault();
                   const data = {
                    task : ev.target.value
                   }
                   console.log (data);
                   const url = `http://localhost:5000/addtask`;
                   fetch(url, {
                       method:'POST',
                       headers: {
                           'content-type':'application/json'
                       },
                       body: JSON.stringify(data)
                   })
                    .then(res=>res.json())
                    .then(result=> {
                        console.log(result);
                      
                    } )
                   ev.target.value="";

                   }
                   
                 }} 
                
                />
                <p className='text-sm font-serif  mt-3  press'>Press Enter to add tasks</p>
               </div>
                <div className="card-items">
                {
                   alltask.map(alltask=><ShortTodo
                    key={alltask._id}
                    alltask={alltask}

                   ></ShortTodo>)
               }

                </div>
           
        </div>
    );
};

export default Home;