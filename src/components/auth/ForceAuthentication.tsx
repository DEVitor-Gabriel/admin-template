import Image from "next/image"
import gifLoading from '../../../public/images/loading.gif'
import useAuth from "../../data/hook/useAuth"
import Router from "next/router"
import Head from "next/head"

export function ForceAuthentication(props : any){

    const {user, loading} = useAuth()

    function renderContent(){
        return(
            <>
                <Head>
                    <script
                        dangerouslySetInnerHTML={{
                            __html:`
                                if(!document.cookie.includes("admin-template-auth")){
                                    window.location.href = "/authentication"
                                }
                            `
                        }}
                    />
                </Head>
                {props.children}
            </>
        )
    }

    function renderLoading(){
        return(
            <div
                className="flex justify-center items-center h-screen"
            >
                <Image src={gifLoading} alt="Carregando"/>
            </div>
        )
    }

    if (!loading && user?.email){
        return renderContent()
    } else if (loading){
        return renderLoading()
    } else {
        Router.push("/authentication")
        return null
    }
}