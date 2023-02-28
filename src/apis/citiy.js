import axios from "axios";

export const apiGetAllCities = async (state_id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json',
        },
    };
    return await axios.get(`/dashboard/city/read-all?state_id=${state_id}`,config)
        .then(res => {
            return res;
        }).catch(err => {
            throw err;
        })
}