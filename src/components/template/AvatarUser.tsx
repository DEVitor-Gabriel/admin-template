/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import useAuth from "../../data/hook/useAuth";

interface AvatarUserProps {
    children?: string
}

export function AvatarUser(props: AvatarUserProps){
    const { user } = useAuth()

    return(
        <Link href='/profile'>
            <img
                src={ user?.imgUrl ?? "/images/avatar.svg"}
                alt="Avatar do usuário"
                className={`
                    h-10 w-10 rounded-full cursor-pointer ml-3
                `}
            />
        </Link>
    )
}