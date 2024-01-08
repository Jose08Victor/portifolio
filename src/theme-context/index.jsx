import { createContext, useState } from "react";

export const themes = {
    colors: ['rgb(255, 255, 0)', 'rgb(0, 255, 255)', 'rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(255,0,181)', 'rgb(255, 90, 0)', 'rgb(0,94,255)', 'rgb(0,255,132)', 'rgb(148,0,291)', 'rgb(255,255,255)', 'rgb(165,255,0)', 'rgb(85,107,47)', 'rgb(123,154,238)', 'rgb(144,238,144)'],
    index: Math.floor(Math.random() * 14)
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