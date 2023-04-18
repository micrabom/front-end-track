import React from 'react';

function ClickMe() {
    return (
        <div>
			<button onClick={() => {window.alert(" Hello there!")}}>
				Click Me!
			</button>
        </div>
    );
}

export default ClickMe;
