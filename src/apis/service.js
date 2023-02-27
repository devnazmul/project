import axios from "axios";

export const apiGetAllServices = async (pageNo, dataPerPage, query) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json',
            "Authorization": `Bearer ${JSON.parse(localStorage.getItem('data')).token}`
        },
    };
    console.log({pageNo})
    return await axios.get(`/dashboard/service/read?pageNo=${pageNo}&dataPerPage=${dataPerPage}&search=${query}`, config)
        .then(res => {
            return res;
        })
}