import React, { useState } from "react";
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


const TextComponent = () => (<div>Text Component</div>);
