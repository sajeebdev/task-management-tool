import React, { useDebugValue, useEffect, useState } from 'react';

const TodoTask = () => {

// const {_id,task}=alltask;
const [alltask ,setAlltask] = useState([]);
const [updateid, setUpdateid] = useState('');

useEffect(()=>{
    fetch("https://dry-spire-73040.herokuapp.com/task")
    .then(res=>res.json())
    .then(data=>setAlltask(data))
},[alltask])

const handeldelete=(_id)=>{
//  console.log(_id)
if(window.confirm() == true ){
  fetch(`https://dry-spire-73040.herokuapp.com/task/${_id}`, {
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

const getid = (_id)=>{
  console.log(_id);
  setUpdateid(_id);


}
// console.log(updateid);
const handelsunmit = (e) =>{

  e.preventDefault();
  
  const data = {
     task: e.target.task.value,
   }
  
  fetch(`https://dry-spire-73040.herokuapp.com/updatetask/${updateid}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

    });
    e.target.task.value="";

}

//complate 
const handelcomplete =(task)=>{
const id = task._id;

  const data = {
    complateid: id,
    task:task.task,
  }
  console.log(data,id);
  fetch(`https://dry-spire-73040.herokuapp.com/complete/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
     console.log(data);
    });
}


    return (
      <>
      {
        alltask.map(task=>
      <div class="card w-96 bg-neutral text-neutral-content">
           <div class="card-body "
        key={task._id}>
        <h2 class="card-title"> <span className='text-sm text-green-400 '>Tasks: </span>{task.task}</h2>
     
        <div class="card-actions justify-end mt-10 text-sm">
        <label onClick={()=>getid(task._id)}  for="my-modal-6" class="btn btn-info">Edit</label>
        
         
          <button  onClick={()=>handelcomplete(task)} class="btn gap-2 btn-outline text-green-500 ">
         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
          complete
        </button>

        <button  onClick={()=>handeldelete(task._id)} class="btn btn-circle btn-outline text-red-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

        </div>
      </div>
      
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
          <form onSubmit={handelsunmit}  class="modal-box">
          <input className=' input input-bordered input-warning w-full max-w-xs modal-text ' placeholder="Type here" type='text' name='task' ></input>
          <p>{task._id}</p>
          <input className='modal-text btn btn-info'type='submit' value="Update"  ></input>
        
            <div class="modal-action">
              <label for="my-modal-6" class="btn">Close</label>
            </div>
          </form>
        </div>
     
     
    </div>
  )}

     
  </>
    );
};

export default TodoTask;