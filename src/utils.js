import { redirect } from "react-router-dom"

export async function requireAuth(request) {
    const isLoggedIn = localStorage.getItem("loggedin")
    const path = new URL(request.url).pathname
    
    if (!isLoggedIn) {
        const response = redirect(`/login?message=You must log in first.&redirectTo=${path}`)
        Object.defineProperty(response, "body", {value: true})
        throw response
    }
    return null
}