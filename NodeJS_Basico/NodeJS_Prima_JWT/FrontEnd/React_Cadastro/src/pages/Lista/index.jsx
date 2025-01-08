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
        <div>
            <h2>Lista de usuarios</h2>
            <ul>
                { allUsers && allUsers.length > 0 && allUsers.map((user) =>(
                    <li key={user.id}>
                        <p>{user.name}</p>
                        <p>{user.age}</p>
                        <p>{user.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
    
    

}

export default ListUsers