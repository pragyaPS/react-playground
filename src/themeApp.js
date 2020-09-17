import React from "react";
import ThemeContextProvider from './themeContext';
import ThemeExample from './themeExample';

export default function ThemeApp() {
    return (<ThemeContextProvider>
        <ThemeExample />
        </ThemeContextProvider>)}