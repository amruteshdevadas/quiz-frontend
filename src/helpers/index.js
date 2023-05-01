
import jwt_decode from "jwt-decode";

export function getLoggedInUser() {
    let token = localStorage.getItem('token')
    if(!token) return
    return jwt_decode(token);
}