import React, { useState, useEffect } from 'react';

export function FormComponent() {
    const [ firstName, setFirstName ] = useState('');
    function handleChange(evt) {
        setFirstName(evt.target.value);
    }
    return (
        <div>
        <input value= { firstName } onChange={handleChange} />
        {firstName}
        </div>
    )
}
export default function DependencyArray() {
    const [count, setCount] = useState(0)
    function handleClick() {
        setCount(count + 1);
    }
    return(
        <>
        <button onClick = {handleClick}>{count}</button>
        <FormComponent />
        </>
    )
}