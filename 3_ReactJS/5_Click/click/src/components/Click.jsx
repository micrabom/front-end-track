import React, { useState } from 'react';
import '../assets/css/click.css';

const Click = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div className="click">
            <div className="click-wrapper">
                <input type="button" className='click_btn' value='Click Me' onClick={handleClick} />
                <h3 className="counter">Total of Clicks: {count}</h3>
            </div>
        </div>
    );
}

export default Click;
