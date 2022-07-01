import React from 'react';

const Completetask = ({completetask}) => {
    
    const handeldelete=(_id)=>{
        //  console.log(_id)
        if(window.confirm() == true ){
          fetch(`https://dry-spire-73040.herokuapp.com/completedelete/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) =>{
              if(data.deletedCount==1){
        
                // setTimeout(function() { window.location=window.location;},500);
                   
              }
        
            });
          
        }
        else{
         console.log('no delete count')
        }
        }

    return (
        <div>
         <div class="card w-96 bg-neutral text-neutral-content">
      <div class="card-body  ">
        <h2 class="card-title"> <span className='text-sm text-green-400 '>Tasks: </span>{completetask.task}</h2>
     
      </div>
      <button onClick={()=>handeldelete(completetask._id)} class="btn btn-circle btn-outline text-red-500 m-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
       </button>
    </div>
        </div>
    );
};

export default Completetask;