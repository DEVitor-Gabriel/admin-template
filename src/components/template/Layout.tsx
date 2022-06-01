import { MenuLateral  } from './MenuLateral'
import { Header  } from './Header'
import { Content  } from './Content'


interface LayoutProps{
    title: string
    subtitle: string
    children?: any
}

export function Layout(props: LayoutProps){
    return (
        <div className={`
            dark
            flex
            h-screen
            w-screen
        `}>
            <MenuLateral />
            <div className={`
                flex
                flex-col
                w-full
                p-7
                bg-gray-300 dark:bg-gray-800
            `}>      
                <Header title={props.title} subtitle={props.subtitle}/>
                <Content>
                    {props.children}
                </Content>
            </div>
            
        </div>
    )
}