import { ILogin } from "../../types";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const loginApi = async (user: ILogin) => {
    try {
        const { email, password } = user;
        const auth = getAuth();

        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const loggedInUser = userCredential.user;

        return loggedInUser;
    } catch (error: any) {
        console.error("Đã xảy ra lỗi khi đăng nhập:", error.message);
        throw error;
    }
};
