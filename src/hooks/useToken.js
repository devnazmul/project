import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (email) => {
    const [token, setToken] = useState('');
    useEffect(() => {
        if (email) {
            axios.get(`/jwt?email=${email}`)
                .then(res => {
                    if (res.data.accessToken) {
                        localStorage.setItem('accessToken', res.data.accessToken);
                        setToken(res.data.accessToken);
                    }
                });
        }
    }, [email]);
    return [token];
}

export default useToken;