import React, { useState } from 'react';

function Forms() {
    const [name, setName] = useState('');

    function handleChange(event) {
        setName(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        // handle submit events
        // setName('');

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </>
    );
}

export default Forms;
