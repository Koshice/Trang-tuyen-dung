import { ILogin } from "../../types";
import { createUserWithEmailAndPassword } from "firebase/auth"

export const loginApi = async (user: ILogin) => {
    try {
        console.log({user})
    } catch (err: any) {
        return console.log(err.message)
    }
}