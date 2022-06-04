/* eslint-disable react-hooks/rules-of-hooks */
import type { NextPage } from 'next'
import { useState } from 'react'
import { AuthInput } from '../components/auth/AuthInput'
import { IconWarning } from '../components/icons'

const adjustments: NextPage = () => {
    const [ error, setError ] = useState(null)
    const [ mail, setMail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ mode, setMode ] = useState<'login' | 'register'>('login')

    function displayError(message: any, seconds = 5){
        setError(message)
        setTimeout(() => setError(null), seconds * 1000)
    }

    function submit(){
        if (mode === 'login'){
            console.log('login')
            displayError('Erro no Login')

        } else {
            console.log('register')
            displayError('Erro no Cadastro')
        }
    }

    return (
        <div className='flex h-screen items-center justify-center'>
            <div className='hidden  md:block md:w-1/2 lg:w-2/3'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="https://source.unsplash.com/random"
                    alt="Imagem da tela de autenticação"
                    className='h-screen w-full object-cover'
                
                />
            </div>
            <div className='m-10 w-full md:w-1/2 lg:w-1/3'>
                <h1 className='text-3xl font-bold mb-5'>
                    {mode === 'login' ? 'Entrar com a sua conta' : 'Cadastre-se na plataforma'}
                </h1>
                    {error ? (
                        <div className={`
                            flex items-center
                            bg-red-400 text-white py-3 px-5 my-2
                            border border-red-700 rounded-lg
                        `}>
                            {IconWarning()}
                            <span className='ml-2'>
                                {error}
                            </span>
                        </div>
                    ) : false}

                    <AuthInput
                        label='Email'
                        type="email"
                        value={mail}
                        onChange={setMail}
                        required
                    />
                    <AuthInput
                        label='Senha'
                        type="password"
                        value={password}
                        onChange={setPassword}
                        required
                    />
                    <button onClick={submit} className={`
                        w-full bg-indigo-500 hover:bg-indigo-400
                        text-white rounded-lg px-4 py-3 mt-6
                    `}>
                        {mode === 'login' ? 'Entrar' : 'Cadastrar'}
                    </button>

                    <hr className='my-6 border-gray-300 w-full'/>

                    <button onClick={submit} className={`
                        w-full bg-red-500 hover:bg-red-400
                        text-white rounded-lg px-4 py-3
                    `}>
                        Entrar com o Google
                    </button>

                    { mode === 'login' ? (
                        <p className='mt-8'>
                            Novo por aqui? 
                            <a onClick={() => setMode('register')} className={`
                                text-blue-500 hover:text-blue-700 font-semibold
                                cursor-pointer
                            `}> Crie uma conta gratuitamente</a>
                        </p>
                    ) : (
                        <p className='mt-8'>
                            Já faz parte da nossa comunidade? 
                            <a onClick={() => setMode('login')} className={`
                                text-blue-500 hover:text-blue-700 font-semibold
                                cursor-pointer
                            `}> Entre com suas credenciais</a>
                        </p>
                    ) }
            </div>
        </div>
    )
}

export default adjustments
