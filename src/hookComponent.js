import React, { useState, useEffect } from "react";
export default function HookComponent(){
    const [flag, setFlag] = useState(false);
    function handleChange() {
        setFlag(!flag)
    }
    return (
        <>
        <button onClick = { handleChange }>{ flag ? 'on' : 'off'}</button>
        { flag && <TextComponent /> }
        </>
    )
};


const TextComponent = () => {
    useEffect(() => {
        console.log('mount');
        return () => {
            console.log('unmount');
        }
    })
    
    return (<div>Text Component</div>)};
