import { useState } from "react"
import toast from "react-hot-toast";

const useSignUp = () => {
    const [loading, setLoading] = useState(false);

    const signup = async({fullName, username, password, confirmPassword, gender}) => {
        if(!fullName || !username || !password || !confirmPassword || !gender){
            toast.error("Please fill all fields")
            return false;
        }

        if(password !== confirmPassword){
            toast.error("Password do not match")
            return false;
        }

        if(password.length < 6){
            toast.error("Password must at least 6 characters")
            return false;
        }

        setLoading(true);

        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({fullName, username, password, confirmPassword, gender})
            });

            const data = await res.json();

            if(data.error){
                throw new Error(data.error);
            }

            toast.success("New user added");
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return { loading, signup }
}

export default useSignUp