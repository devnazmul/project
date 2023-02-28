import axios from "axios";

export const apiGetAllCities = async (pageNo) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json',
        },
    };
    console.log({ pageNo })
    return await axios.get(`/dashboard/city/all-read`, config)
        .then(res => {
            return res;
        }).catch(err => {
            throw err;
        })
}