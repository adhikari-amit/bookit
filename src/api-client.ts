import { RegisterFormData } from "./pages/Register/Register";
import { loginForm } from "./pages/login/Login";


let API_BASE_URL=import.meta.env.VITE_API_BASE_URL
export const register=async(formdata:RegisterFormData)=>{
    const response=await fetch(`${API_BASE_URL}/api/users/register`,{
        method:"POST",
        credentials:"include",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(formdata)
    })

    const responseBody=await response.json()
    if(!response.ok){
        throw new Error(responseBody.message)
    }
}


export const validateToken=async()=>{
    const response=await fetch(`${API_BASE_URL}/api/auth/validate-token`,{
        credentials:'include'
    })

    if(!response.ok){
        throw new Error("Token invalid")
    }

    return response.json()
}

export const login=async(formdata:loginForm)=>{
    const response=await fetch(`${API_BASE_URL}/api/auth/login`,{
        method:'POST',
        credentials:'include',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(formdata)
    })

    const responseBody=await response.json()
    if(!response.ok){
        throw new Error(responseBody.message)
    }
}

export const logout=async()=>{
    const response=await fetch(`${API_BASE_URL}/api/auth/logout`,{
        method:'POST',
        credentials:'include',
        headers:{
            "Content-Type":"application/json"
        }
    })
    if(!response.ok){
        throw new Error("Error during signout")
    }

}