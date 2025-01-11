import { Link, useNavigate } from "react-router-dom"
import {useRef} from "react"

import api from "../../services/api.js"

function Login(){

    const emailRef= useRef()
    const passwordRef= useRef()
    const navigate = useNavigate()

    async function handleSubmit(event) {
        event.preventDefault()

        try {
            
            const {data:token} = await api.post('./api/login', {
            // await api.post('./api/login', {
                email: emailRef.current.value,
                password: passwordRef.current.value,
            })

            console.log(token) // para verificar dados do JWT.
            localStorage.setItem('token', token)

            alert("Login Ok")

            navigate('/listusers')

        } catch (error) {
            alert("Senha ou email incorretos")
        }

    }

    return(
        <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
            <h2 className=" text-2xl font-bold mb-6 text-center text-gray-800 " >Login</h2>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" ref={emailRef}/>
                <input type="password" placeholder="Senha" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" ref={passwordRef}/>
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-400" >Login</button>
            </form>
            <Link to='/' className="text-blue-700 hover:underline mt-4 block text-center" >Não tem uma conta? Cadastre-se</Link>
        </div>
    )
}

export default Login
