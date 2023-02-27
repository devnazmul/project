import axios from "axios";

export const apiGetAllStates = async (query) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json',
        },
    };
    let link=`/dashboard/state/read-all`

    if (query?.id) {
        link=`/dashboard/state/read-all?id=${query?.id}`
    }
    if (query?.search) {
        link=`/dashboard/city/read-all?search=${query?.search}`
    }
    return await axios.get(link, config)
        .then(res => {
            return res;
        })
} 