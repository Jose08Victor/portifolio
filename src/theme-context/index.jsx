import { createContext, useState } from "react";

export const themes = {
    light: {
        primary: 'rgba(255, 255, 0, 1)',
        secondary: 'rgba(0, 219, 255, 1)',
        
        reverse: {
            primary: 'rgba(0, 219, 255, 1)',
            secondary: 'rgba(255, 255, 0, 1)'
        }

    },
    BlueOrange: {
        primary: 'rgba(0, 14, 255, 1)',
        secondary: 'rgba(255, 150, 0, 1)'
    },

    RedGreen: {
        primary: 'rgba(255, 0, 0, 1)',
        secondary: 'rgba(188, 255, 60, 1)'

    },

    GreenYellow: {
        primary: 'rgba(5, 255, 0, 1)',
        secondary: 'rgba(255, 243, 145, 1)'

    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (Props) => {

    const [theme, setTheme] = useState(themes.light)

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {Props.children}
        </ThemeContext.Provider>
    )
}