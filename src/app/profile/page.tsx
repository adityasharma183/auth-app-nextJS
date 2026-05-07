"use client"
import { useState } from "react"
import axios from "axios"
import Link from "next/link"
import {toast} from "react-hot-toast"
import { useRouter } from "next/navigation"
export default function ProfilePage(){
    const router=useRouter()
    const [data,setData]=useState('nothing')
    const logout= async()=>{
        try {
           await axios.get('/api/users/logout')
           toast.success('Logout successful!!')
           router.push('/login')

        }
        catch(error:any){
            console.log(error.message)
            toast.error(error.message)
        }
    }
    const userDetails =async()=>{
        try {
            const response = await axios.get('/api/users/me')
            console.log(response.data)
            setData(response.data.user._id)
        } catch (error:any) {
            console.log(error.message)
            toast.error(error.message)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <h1>Profile Page</h1>
            <h2 className="p-2 rounded bg-green-600">{data ==='nothing' ? 'No data available' : <Link href={`/profile/${data}`}>{data}</Link>}</h2>
            <hr/>
            <button onClick={logout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-6 rounded" >Logout</button>
            <button onClick={userDetails} className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded mt-6" >Get User Details</button>
        </div>
    )

}