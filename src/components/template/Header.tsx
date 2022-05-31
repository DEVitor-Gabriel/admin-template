interface HeaderProps{
    title: string
    subtitle: string
}

export function Header(props: HeaderProps){
    return (
        <div>
            <h1>
                {props.title}
            </h1>
            <h2>
                {props.subtitle}
            </h2>
        </div>
    )
}