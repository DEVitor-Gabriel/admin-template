interface ContentProps{
    children?: any
}

export function Content(props: ContentProps){
    return (
        <div className="mt-8">
            {props.children}
        </div>
    )
}