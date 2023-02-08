import React, { useState } from 'react';

function DemoHooks(props) {
    const [Color, setColor] = useState('red')
    const [Counter, setCounter] = useState(0)


    const increment = () => {
        setCounter(Counter + 1)
    }

    const deccrement = () => {
        setCounter(Counter - 1)
    }

    return (
        <React.Fragment>
            <div style={{ backgroundColor: Color }}>
                <h1>THis is Hooks Class</h1>
            </div>
            <br />
            <button type='button' onClick={() => { setColor('blue') }}>Blue</button>
            <button type='button' onClick={() => { setColor('red') }}>Red</button>
            <button type='button' onClick={() => { setColor('green') }}>Green</button>
            <button type='button' onClick={() => { setColor('yellow') }}>Yellow</button>

            <br />

            <div>
                <button onClick={increment}>+</button>
                <h1>{Counter}</h1>
                <button onClick={deccrement}>-</button>
            </div>


        </React.Fragment>
    );
}

export default DemoHooks;