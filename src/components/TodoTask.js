import React, { useDebugValue } from 'react';

const TodoTask = ({alltask}) => {

const {_id,task}=alltask;

const handeldelete=()=>{

if(window.confirm() == true ){
  fetch(`http://localhost:5000/task/${_id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) =>{
      if(data.deletedCount==1){
        setTimeout(function() { window.location=window.location;},500);
      }

    });
  
}
else{
 console.log('no delete count')
}
 
}

const handelsunmit =(e)=>{
  e.preventDefault();
  const data = {
     task: e.target.task.value,
   }
  console.log(data);
  fetch(`http://localhost:5000/updatetask/${_id}`, {
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


}


    return (
      <div class="card w-96 bg-neutral text-neutral-content">
      <div class="card-body items-center text-center">
        <h2 class="card-title">{task}</h2>
     
        <div class="card-actions justify-end mt-10 text-sm">
        <label for="my-modal-6" class="btn btn-info">Edit</label>
        
         
          <button class="btn gap-2 btn-outline text-green-500 ">
         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
          complete
        </button>

        <button onClick={handeldelete} class="btn btn-circle btn-outline text-red-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

        </div>
      </div>
      <div className="">
        <input type="checkbox" id="my-modal-6" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
          <form onSubmit={handelsunmit} class="modal-box">
          <input className=' input input-bordered input-warning w-full max-w-xs modal-text ' placeholder="Type here" type='text' name='task' ></input>
          <input className='modal-text btn btn-info'type='submit' value="Update"  ></input>
        
            <div class="modal-action">
              <label for="my-modal-6" class="btn">Close</label>
            </div>
          </form>
        </div>
       </div>
     
    </div>

    );
};

export default TodoTask;