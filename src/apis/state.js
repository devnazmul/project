import axios from "axios";

export const apiGetAllStates = async () => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json',
        },
    };
    let link=`/dashboard/state/read-all`
    return await axios.get(link, config)
        .then(res => {
            return res;
        })
} 