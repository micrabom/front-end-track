import React, { useState } from 'react';

const ControlledForm = () => {
    const [username, setUsername] = useState('');

    const changeEventHandler = (event) => {
        setUsername(event.target.value);
    }

    return (
        <form>
            Username:<input type="username" name="username" value={username} onChange={changeEventHandler} />
        </form>
    );
};

export default ControlledForm;
