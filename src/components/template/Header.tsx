import { Title } from "./Title"
import { ButtonSwitchTheme } from "./ButtonSwitchTheme"
import useAppData from "../../data/hook/useAppData"

interface HeaderProps{
    title: string
    subtitle: string
}

export function Header(props: HeaderProps){
    const { theme, switchTheme } = useAppData()

    return (
        <div className={`
            flex
        `}>
            <Title title={props.title} subtitle={props.subtitle}/>
            <div className={`
                flex flex-grow justify-end
            `}>
                <ButtonSwitchTheme theme={theme} switchTheme={switchTheme}/>
            </div>
        </div>
        
    )
}