import React from 'react';

function Box (props) {


    const increment = () => { props.onIncrement(props.id); }

    const decrement = () => { props.onDecrement(props.id); }
    
    const handleDelete = () => { props.onDelete(props.id); }

        return (
    
            <div>
                <button type='button' className='btn btn-danger p-2' onClick={decrement}>Decrement</button>
                <span style={{ fontSize:"20px" }} className='p-3'>{ props.num }</span>
                <button type='button' className='btn btn-primary p-2' onClick={increment}>Increment</button>
                <button type='button' className='btn btn-danger p-2 ms-2' onClick={handleDelete}>Delete</button>
            </div>
            
    );
}
 
export default Box;