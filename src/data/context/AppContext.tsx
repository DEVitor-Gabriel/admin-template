import { createContext, useEffect, useState } from "react";

// type Theme  = 'dark' | ''

interface AppContextProps{
    theme?: string | null;
    switchTheme?: () => void;
}

interface AppProviderProps{
    children?: any;
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props:AppProviderProps){
    const [theme, setTheme] = useState<string | null>('dark')

    function switchTheme(){
        const newTheme = theme === '' ? 'dark' : ''
        setTheme(newTheme)
        localStorage.setItem('tema', newTheme)
    }

    useEffect(()=>{
        const savedTheme = localStorage.getItem('tema')
        setTheme(savedTheme)
    },[])

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