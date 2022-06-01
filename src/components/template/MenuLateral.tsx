import { IconAdjustments, IconBell, IconHome, IconLogout } from "../icons"
import { MenuItem } from "./MenuItem"
import Image from "next/image"

export function MenuLateral(){
    return(
        <aside className={`
            flex flex-col
            bg-white dark:bg-gray-900
        `}>
            <div className={`
                flex flex-col justify-center items-center
                bg-gradient-to-r from-indigo-500 to-purple-800
                w-20 h-20
            `}>
                <Image src="/rocket.png" alt="Logo" width={45} height={45} />
            </div>
            <ul className={`
                flex-grow
            `}>
                <MenuItem url="/" text="Home" icon={IconHome}></MenuItem> 
                <MenuItem url="/adjustments" text="Ajustes" icon={IconAdjustments}></MenuItem> 
                <MenuItem url="/notifications" text="Notificações" icon={IconBell}></MenuItem>   
            </ul>
            <ul>
                <MenuItem onclick={() => console.log('Logout')} text="Sair" icon={IconLogout}
                    className={`
                        text-red-600 dark:text-red-500
                        hover:bg-red-400 dark:hover:text-white
                    `}
                ></MenuItem>   
            </ul>
        </aside>
    )
}