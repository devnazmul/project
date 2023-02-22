import axios from "axios";

export const apiGetAllStates = async (query) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json',
        },
    };
    let link=`/dashboard/state/read`

    if (query?.id) {
        link=`/dashboard/state/read?id=${query?.id}`
    }
    if (query?.search) {
        link=`/dashboard/city/read?search=${query?.search}`
    }
    return await axios.get(link, config)
        .then(res => {
            return res;
        })
} 