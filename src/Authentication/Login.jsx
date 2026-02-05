import { useState } from 'react'
import axios from 'axios';

function Login() {
    const [loginFrom,setLoginFrom] = useState({
        email:"",
        password:""
    })

    const handleLoginData = (e) => {
        setLoginFrom({...loginFrom,[e.target.name]:e.target.value})
    }

    const submitLoginData = async () => {
        try{
            const fetchData = await axios.post(process.env.LOGIN_API,loginFrom)
             alert(fetchData.data.message || "Signup Successful");
             setCheckLogin(true);
        }catch(err){
             alert(err.response?.data?.message || "Signup Failed");
        }
    };
    return (
        <>
            <div className="w-full h-screen bg-linear-to-br from-black to-neutral-800 grid place-items-center">
                <form onSubmit={submitLoginData}
                className="w-[90%] md:w-[35%] h-auto shadow shadow-indigo-600 bg-black rounded-xl p-8 grid gap-8">

                    {/* Title */}
                    <h1 className="text-4xl font-medium text-neutral-100 text-center">
                        Login Page
                    </h1>

                    {/* Email */}
                    <div>
                        <h1 className='text-neutral-100 text-sm font-medium ml-1'>Email</h1>
                        <input
                            type="email"
                            placeholder="amit@gmail.com"
                            name='email'
                            onChange={handleLoginData}
                            required
                            className="w-full bg-neutral-800 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <h1 className='text-neutral-100 text-sm font-medium ml-1'>Password</h1>
                        <input
                            type="password"
                            placeholder="******"
                            name='password'
                            onChange={handleLoginData}
                            required
                            className="w-full bg-neutral-800 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        />
                    </div>

                    {/* Button */}
                    <button type='submit'
                        className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 hover:scale-[1.02] transition duration-300 cursor-pointer tracking-widest"
                    >
                        Submit
                    </button>

                </form>
            </div>
        </>
    )
}

export default Login
