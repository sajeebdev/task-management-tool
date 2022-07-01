import React from 'react';
import { Link } from 'react-router-dom';

const ShortTodo = ({alltask}) => {
    const {_id,task}=alltask;
    return (
      <div class="card w-96 bg-neutral text-neutral-content">
      <div class="card-body ">
        <h2 class="card-title"> <span className='text-sm text-green-400 '>Tasks: </span>{task}</h2>
     
        <div class="card-actions justify-end mt-8">
          <Link to="/todo" class="text-info text-sm">Go Todo for more.. </Link>
         
        </div>
      </div>
    </div>
    );
};

export default ShortTodo;