import React, { useState } from 'react';

function Hover() {
    const [left, setLeft] = useState(undefined);
    const [top, setTop] = useState(undefined);

    function moveButton(event) {
        setLeft(event.clientX + 1);
        setTop(event.clientY + 1);
    }

    return (
        <button onMouseMove={moveButton} style={{ left, top, position: left ? 'fixed' : 'absolute' }} >
            Hover Me!
        </button>
    )
}

export default Hover;


