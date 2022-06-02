import { createContext, useState } from "react";

type Theme  = 'dark' | ''

interface AppContextProps{
    theme?: Theme;
    switchTheme?: () => void;
}

interface AppProviderProps{
    children?: any;
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props:AppProviderProps){
    const [theme, setTheme] = useState<Theme>('dark')

    function switchTheme(){
        setTheme(theme === '' ? 'dark' : '')
    }

    return(
        <AppContext.Provider value={{
            theme,
            switchTheme
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext