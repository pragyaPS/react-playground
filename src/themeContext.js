import React, { createContext, useState } from "react";
export const ThemeContext = createContext();

export default function ThemeContextProvider({children}) {
    const [islightTheme, setIslightTheme] = useState(true);
    function toggleTheme() {
        setIslightTheme(!islightTheme)
    }
    return (
        <ThemeContext.Provider value = { {islightTheme, toggleTheme} }>
            { children }
        </ThemeContext.Provider>
    )
    
}