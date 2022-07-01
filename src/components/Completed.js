import React, { useEffect, useState } from 'react';
import Completetask from './Completetask';

const Completed = () => {
    const [completetask ,setCompletetask] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/complete")
        .then(res=>res.json())
        .then(data=>setCompletetask(data))
    },[completetask])
    return (
        <div className='display-view'>  
               <div className="card-items">
                {
                   completetask.map(completetask=><Completetask
                    key={completetask._id}
                    completetask={completetask}

                   ></Completetask>)
               }

                </div>
           
        </div>
    );
};

export default Completed;
