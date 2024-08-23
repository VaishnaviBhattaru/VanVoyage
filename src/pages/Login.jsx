import React from "react";
import { Form, useActionData, useLoaderData, useNavigate, redirect } from "react-router-dom";
import { loginUser } from "../api"

export async function loader({request}){
    return new URL(request.url).searchParams.get("message")
}
export async function action({request}){
    const formData = await request.formData();
    const email = formData.get("email")
    const password = formData.get("password")
    const pathname = new URL(request.url).searchParams.get("redirectTo") || "/host"
    try{
        const data = await loginUser({ email, password })
        localStorage.setItem("loggedin", true)
        // return redirect("/host")
        const res = redirect(pathname)
        res.body = true;
        return res
    } catch(err) {
        return err.message
    }

}

export default function Login(){
    // //Code using handle click with hooks and state
    // const [loginInfo, setLoginInfo] = React.useState({email: "", password: ""})
    // function handleSubmit(e) {
    //     e.preventDefault()
    //     console.log(loginInfo)
    // }

    // function handleChange(e) {
    //     const { name, value } = e.target
    //     setLoginInfo(prev => ({
    //         ...prev,
    //         [name]: value
    //     }))
    // }
    const errorMessage = useActionData()
    const message = useLoaderData()
    return(
       <div className="login">
        <h1>Sign in to your account</h1>
        {message && <h3>{message}</h3>}
        {errorMessage && <h3>{errorMessage}</h3>}
        <Form method="post" className="login-form" replace>
            <input 
            name = "email"
            type="email"
            // onChange={handleChange}
            placeholder="Email address"
            // value={loginInfo.email}
             />
            <input 
            name = "password"
            type="password"
            // onChange={handleChange}
            placeholder="Password"
            // value={loginInfo.password}
             />
            <button>Log in</button>
        </Form>

       </div>
    )
}