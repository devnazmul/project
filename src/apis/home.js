import axios from "axios";

export const getHomeHero = async () => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json',
        },
    };
    return await axios.get(`home/`, config)
        .then(res => {
            return res;
        })
} 