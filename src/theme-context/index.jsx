import { createContext, useState } from "react";

export const themes = {
    colors: ['rgb(255, 255, 0)', 'rgb(0, 255, 255)', 'rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(255, 100, 0)', 'rgb(255,0,181)', 'rgb(0,94,255)', 'rgb(0,255,132)', 'rgb(128,0,255)', 'rgb(255,255,255)', 'rgb(165,255,0)'],
    index: Math.floor(Math.random() * 11)
}

export const ThemeContext = createContext({})

export const ThemeProvider = (Props) => {

    const [theme, setTheme] = useState({ color: themes.colors[themes.index], opacity: .6 })
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {Props.children}
        </ThemeContext.Provider>
    )
}