import { useEffect, useState } from "react"

import api from "../../services/api"

function ListUsers() {

    const [allUsers, setAllUsers] = useState()

    useEffect(()=>{
        async function  loadUsers(){

            const token = localStorage.getItem('token') // Recuperando token da pagina React

            const {data:{user}} = await api.get('./api/listusers', {
                headers:{Authorization:`Bearer ${token}`}
            })

            setAllUsers(user)
            console.log(user)
        }
        
        loadUsers()
    },[])

    return(
        <div className="max-w-2xl mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-md shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Lista de usuarios</h2>
            <ul className="space-y-2">
                { allUsers && allUsers.length > 0 && allUsers.map((user) =>(
                    <li key={user.id} className="bg-gray-100 p-6 rounded-md">
                        <p className="font-semibold" >Nome: {user.name}</p>
                        <p className="font-semibold" >Idade: {user.age}</p>
                        <p className="font-semibold" >Email: {user.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
    
    

}

export default ListUsers