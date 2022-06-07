import { Title } from "./Title"
import { ButtonSwitchTheme } from "./ButtonSwitchTheme"
import useAppData from "../../data/hook/useAppData"
import { AvatarUser } from './AvatarUser'

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
                flex flex-grow justify-end items-center
            `}>
                <ButtonSwitchTheme theme={theme} switchTheme={switchTheme}/>
                <AvatarUser/>
            </div>
        </div>
        
    )
}