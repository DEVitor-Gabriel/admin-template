import { createContext, useState } from "react";

type Theme  = 'dark' | ''

interface AppContextProps{
    theme?: Theme;
    switch_theme?: () => void;
}

interface AppProviderProps{
    children?: any;
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props:AppProviderProps){
    const [theme, setTheme] = useState<Theme>('dark')

    function switch_theme(){
        setTheme(theme === '' ? 'dark' : '')
    }

    return(
        <AppContext.Provider value={{
            theme,
            switch_theme
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext