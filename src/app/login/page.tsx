"use client"
import Link from "next/link"
import React from "react"
import { useRouter } from "next/navigation"
import { axios } from "axios"

export default function LoginPage(){
    const [user,setUser]=React.useState({
        email:"",
        password:"",
        
    })

    const onLogin = async ()=>{

    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Login nigga</h1>
            <hr />
            

            <label htmlFor="email">email</label>
            <input 
            className="p-2 mb-2 focus:outline-none focus:border-gray-600 border border-gray-300 rounded-lg "
            id="email"
            type="text"
            value={user.email}
            onChange={(e)=>setUser({...user,email:e.target.value})}
            placeholder="email"
            
            />

            <label htmlFor="password">password </label>
            <input 
            className="p-2 mb-2 focus:outline-none focus:border-gray-600 border border-gray-100 rounded-lg "
            id="password"
            type="text"
            value={user.password}
            onChange={(e)=>setUser({...user,password:e.target.value})}
            placeholder="password"
            
            />
            <button onClick={onLogin} className="p-2 mb-2 focus:outline-none focus:border-gray-600 border border-gray-300 rounded-lg ">Signup Here</button>
            <Link href="/signup">Visit Signup Page</Link>
            
        </div>
    )
}