import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
    const [loading, setLoading] = useState(false);

    const {authUser, setAuthUser} = useAuthContext();

    const login = async (username, password) => {
        if(!username || !password){
            toast.error("Please fill all fields")
            return false;
        }

        setLoading(true);

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            });

            const data = await res.json();

            if(data.error){
                throw new Error(data.error);
            }

            localStorage.setItem("user", JSON.stringify(data));
            setAuthUser(data);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return { loading, login }
}

export default useLogin