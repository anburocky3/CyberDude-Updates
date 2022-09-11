import Button from "@components/commons/buttons/Button"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthCheck, InputEvent, LoginCredentials } from "types/Global"
import Image from "../assets/img/login-banner.svg"
import { loginWithEmail } from "../firebase/functions"


export default function Login({ isAuthenticated , loading } : AuthCheck) {
    const [ data , setData ] = useState<LoginCredentials>({
        user: "",
        pass: ""
    })
    const navigate = useNavigate()
    function handleChange(e : InputEvent): void {
        setData({
            ...data,
            [e.target.name] : e.target.value,
        })
    }

    function handleSubmit(e : { preventDefault : CallableFunction}) {
        e.preventDefault()
        loginWithEmail(data)
        .then(e => {
            navigate('/sessions')
        })
    }

    useEffect(() => {
        isAuthenticated ? navigate('/sessions') : ""
    },[])
    return <div className=" ">
        <div className="min-h-[calc(100vh-82px)] -my-[41px] p-5 flex container mx-auto">
            <div className="m-auto h-full w-full 2xl:w-3/4 2xl:h-hull bg-white shadow-lg">
                <div className="md:grid grid-cols-2 h-full">
                    <div className="orange-gradient md:flex h-full w-full hidden">
                        <img src={Image} className="h-1/2 m-auto" alt="Login Banner" />
                    </div>
                    <div className="xl:p-10 md:p-5 px-5 py-10">
                        <p className="text-primary font-bold text-2xl xl:text-3xl 2xl:text-4xl">CYBERDUDE</p>
                        <p className="mt-16 font-bold xl:text-3xl 2xl:text-4xl text-xl">Who is this?</p>
                        <p className="text-gray-500 text-md mt-2 2xl:mt-4">Didn't know before? <span className="text-blue-800 cursor-not-allowed">Sign up</span></p>
                        <form action="" className="mt-16 spay-8" onSubmit={(e) => handleSubmit(e)}>
                            <label className="jump-label">
                                <input
                                value={data.user}
                                onChange={(e) => handleChange(e as InputEvent)}
                                name="user"
                                className={`jump-input mb-16 border-b w-full ${data.user !== '' ? 'has-value' : ''}`}
                                type="text"
                                required
                                />
                                <span className="jump-span">
                                    What's your username
                                </span>
                            </label>
                            <label className="jump-label">
                                <input
                                value={data.pass}
                                onChange={(e) => handleChange(e as InputEvent)}
                                name="pass"
                                className={`jump-input border-b w-full ${data.pass !== '' ? 'has-value' : ''}`}
                                type="text"
                                required
                                />
                                <span className="jump-span">
                                    Enter your password
                                </span>
                            </label>
                            <div className="grid grid-cols-3 mt-20">
                                <div className="col-span-2 mt-auto">
                                    <p className="text-gray-500 text-xs md:text-sm 2xl:mt-4">Forgot password? <span className="text-blue-800 cursor-not-allowed inline md:block lg:inline">Reset password</span></p>
                                </div>
                                <div className="flex">
                                    <div className="ml-auto">
                                        <input type="submit" value="Login" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
}


