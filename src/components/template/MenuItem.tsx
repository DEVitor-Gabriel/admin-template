import Link from 'next/link'

interface MenuItemProps {
    url?: string;
    text: string;
    icon: any;
    className?: string;
    onclick?: (event: any) => void;
}

export function MenuItem(props : MenuItemProps){

    function renderLink(){
        return (
            <a className={`
                flex flex-col justify-center items-center
                text-gray-600 dark:text-gray-400
                h-20 w-20
                ${props.className}
            `}>
                {props.icon}
                <span className={` font-light text-xs `}>
                    {props.text}
                </span>

            </a>
        )
    }

    return (
        <li onClick={props.onclick} className={`
            hover:bg-gray-100 dark:hover:bg-gray-800
            cursor-pointer
        `}>
            {props.url ? (
                <Link href={props.url!}>
                    {renderLink()}
                </Link>
            ) : (
                    renderLink()
                )
            }
        </li>
    )
}