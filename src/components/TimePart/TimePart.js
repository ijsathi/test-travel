import React, { useState } from 'react';
import './TimePart.css';

const TimePart = () => {
    let time = new Date().toLocaleTimeString();

    const [Ctime, setCtime] = useState(time);

    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    }
    setInterval(updateTime, 1000)
    return (
        <div className='time'>
            <div className='time2'>
                <h1>{time}</h1>
            </div>
        </div>
    );
};

export default TimePart;