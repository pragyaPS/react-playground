import React from "react";
import { ThemeContext } from './themeContext';
import { theme } from './theme';

export default function ThemeExample() {
    return (<ThemeContext.Consumer>
        {(context) =>{
            const { islightTheme, toggleTheme } = context;
            const pageTheme = islightTheme ? theme.light : theme.dark;
            return (<div>
            <button onClick={toggleTheme}>toggle theme</button>
            <div style = {{backgroundColor: pageTheme.bg, color: pageTheme.color}}>Theme </div>
            </div>)
        }}
        </ThemeContext.Consumer>)
        }