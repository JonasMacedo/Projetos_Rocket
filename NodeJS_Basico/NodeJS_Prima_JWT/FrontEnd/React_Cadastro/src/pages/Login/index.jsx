import { Link } from "react-router-dom"
import {useRef} from "react"

import api from "../../services/api.js"

function Login(){


    async function handleSubmit(event) {
        event.preventDefault()
    }

    return(
        <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
            <h2 className=" text-2xl font-bold mb-6 text-center text-gray-800 " >Cadastro</h2>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" ref={emailRef}/>
                <input type="password" placeholder="Senha" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" ref={passwordRef}/>
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-400  " >Cadastrar-se</button>
            </form>
            <Link to='/login' className="text-blue-700 hover:underline mt-4 block text-center" >Já tem uma conta? Faça login</Link>
        </div>
    )
}

export default Login