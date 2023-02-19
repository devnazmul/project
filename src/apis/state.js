import axios from "axios";

export const getStates = async () => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json',
        },
    };
    return await axios.get(`/states`, config)
        .then(res => {
            return res;
        })
} 