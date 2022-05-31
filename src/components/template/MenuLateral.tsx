import { IconAdjustments, IconBell, IconHome } from "../icons"
import { MenuItem } from "./MenuItem"

export function MenuLateral(){
    return(
        <aside>
            <ul>
                <MenuItem url="/" text="Home" icon={IconHome}></MenuItem> 
                <MenuItem url="/adjustments" text="Ajustes" icon={IconAdjustments}></MenuItem> 
                <MenuItem url="/notifications" text="Notificações" icon={IconBell}></MenuItem>   
            </ul>
        </aside>
    )
}