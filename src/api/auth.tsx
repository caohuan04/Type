import { Auth } from "../interfaces/auth"
import instance from "./instance"

export const postregister = async (data: Auth) => {
    const uri = "users"
    return instance.post(uri, data)
}
export const postlogin = async (data: Auth) => {
    const uri = "users"
    return instance.post(uri, data)
}