"use client"
import { useState } from "react"
import { useRouter } from 'next/navigation'
export default function Userform() {
    const [error, setError] = useState({})
    const [loading, setLoading] = useState(true)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const router = useRouter()
    const addUser = async () => {
        // router.push('/form/login')
        if(!email || !name || !password){
            alert('error')
            return false
        }
        let response = await fetch("http://localhost:3000/api/users/signup", {
            method: "POST",
            body: JSON.stringify({ "email": email, "password": password, "username": name })
        })
        response = await response.json()
        if ('Empty' in response) {
            setError(response)
            setLoading(true)
        }else{
            router.push('/form/login')
        }
    }
    if(loading){
        return (
            <main className="flex min-h-screen flex-row items-center justify-between p-24">
                <div className="mx-auto bg-emerald-50 p-7 border-4	border-emerald-400 rounded-2xl	">

                    <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-1xl lg:text-1xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Registration Form</span> By Devansh.</h1>
                    {
                        "Empty" in error ?
                            <>
                                <div className="bg-red-100 my-3 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                    <strong className="font-bold">Error Ocurred !</strong>
                                    <span className="block sm:inline">{error.Empty}</span>
                                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                                        <svg onClick={(e) => setError({})} className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                                    </span>
                                </div>
                            </> :
                            <></>
                    }
                    <div className="max-w-md mx-auto">
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} name="name" id="floating_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your name</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                        </div>
                        <button onClick={addUser} className="text-white bg-emerald-500 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </div>

                </div>
            </main>
        )
    }else{
        return (
            <main>

            </main>
        )
    }
}