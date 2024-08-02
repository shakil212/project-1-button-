import React, { useState } from "react";
import Box from "./box.component.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App () {
    const [ boxes,setBoxes ] = useState([]);


    const createBox = () => { setBoxes((prevBoxes) => [...prevBoxes, 0]) };

    const onIncrement = (id) => {
            setBoxes((prevBoxes) => {
            const newBoxes = [...prevBoxes];
            newBoxes[id]++;
            return newBoxes;
        });
    }

    const onDecrement = (id) => {
            setBoxes((prevBoxes) => {
            const newBoxes = [...prevBoxes];
            newBoxes[id]--;
            return newBoxes;
        });
    }

    const onDelete = (id) => {
        setBoxes((prevBoxes) =>
            prevBoxes.filter((number, index) => index!==id)
        );
    };

        return (
            <div style={{ margin: "20px" }}>
            <button type="button" className="btn btn-primary p-2" onClick={createBox}>
                Add New Box
            </button>
            <br />
            <br />
            {boxes.map((number, index) => (
                <div key={index}>
                    <Box
                        num={number}
                        id={index}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        onDelete={onDelete}
                    />
                    <br />
                </div>
            ))}
        </div>
    );
}
 
export default App;
