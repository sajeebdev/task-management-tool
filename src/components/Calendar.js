import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calendar = () => {
    const [date,setDate]= useState(new Date());

    return (
        <div className='display-view text-center flex items-center  justify-center'>
      <div className="">
      <DayPicker
                 mode="single"
                 selected={date}
                 onSelect={setDate}
           />
           <h1>You Selected: {format(date, 'PP')}</h1>
      </div>
        </div>
    );
};

export default Calendar;