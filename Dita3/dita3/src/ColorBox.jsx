import {useState} from 'react';

function ColorBox() {
    const [color, setColor] = useState('lightblue');
    const changeColor = () => {
        setColor(color === 'lightblue' ? 'lightgreen' : 'lightblue');
    };

    return (
        <div>
            <h2> Kliko butonin per te ndryshuar ngjyren</h2>
            <div
                style={{
                    width: '200px',
                    height: '200px',
                    backgroundColor: color,
                    border: '2px solid black',
                    marginBottom: '10px',
                }}
            ></div>
            
            <button onClick={changeColor}>
                Ndrysho Ngjyren

            </button>
        </div>
    );
}

export default ColorBox;