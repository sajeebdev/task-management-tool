import React from 'react';
import { NavLink ,Link} from "react-router-dom";
import "./Navber.css";

const Navber = () => {
    let activeStyle = {
        textDecoration: "active",
      };
    
      let activeClassName = "active";
    return (
        <div class="navbar bg-gray-700 px-10">
        <div class="navbar-start">
       
          <Link to="/" class="logo font-serif font-bold "> Tasks</Link>
          
        </div>
     
        <div class="navbar-end">

      
      <ul class="navber" >
        <li>
          <NavLink
            to="completed"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
        completed
          </NavLink>
        </li>
        <li>
          <NavLink
            to="todo"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            todo
          </NavLink>
        </li>
        <li>
          <NavLink to="calendar">
            {({ isActive }) => (
              <span
                className={
                  isActive ? activeClassName : undefined
                }
              >
                calendar
              </span>
            )}
          </NavLink>
        </li>
      </ul>
 
        </div>
      </div>
    );
};

export default Navber;