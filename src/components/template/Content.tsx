interface ContentProps{
    children?: any
}

export function Content(props: ContentProps){
    return (
        <div className="mt-8 text-gray-900 dark:text-gray-200">
            {props.children}
        </div>
    )
}