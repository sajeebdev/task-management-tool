import React, { useEffect, useState } from 'react';
import Completetask from './Completetask';

const Completed = () => {
    const [completetask ,setCompletetask] = useState([]);

    useEffect(()=>{
        fetch("https://dry-spire-73040.herokuapp.com/complete")
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
