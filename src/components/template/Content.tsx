interface ContentProps{
    children?: any
}

export function Content(props: ContentProps){
    return (
        <div>
            {props.children}
        </div>
    )
}