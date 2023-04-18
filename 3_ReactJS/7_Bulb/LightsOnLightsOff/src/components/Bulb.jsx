import React, { useState } from 'react';
import '../assets/css/bulb.css';
import lightOff from '../assets/images/light-bulb_0.png';
import lightsOn from '../assets/images/light-bulb_1.png';

function Bulb() {
    const [isOn, setIsOn] = useState(false);

    const handleSwitch = () => {
        setIsOn(!isOn);
    };

    return (
        <>
            <div className="container">
                <img
                    id="switch"
                    src={isOn ? lightsOn : lightOff}
                    alt=""
                    onClick={handleSwitch}
                />
                <div className="indicator">
                    <p className="status">{isOn ? 'ON' : 'OFF'}</p>
                </div>
            </div>
        </>
    );
}

export default Bulb;
