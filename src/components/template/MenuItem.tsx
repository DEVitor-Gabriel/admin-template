interface MenuItemProps {
    url: string;
    text: string;
    icon: any;
}

export function MenuItem(props : MenuItemProps){
    return (
        <li>
            {props.icon}
        </li>
    )
}