import axios from "axios";

export const apiGetAllBrands = async (pageNo, dataPerPage, query) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json',
            "Authorization": `Bearer ${JSON.parse(localStorage.getItem('data')).token}`
        },
    };
    console.log({pageNo})
    return await axios.get(`/dashboard/brand/read?pageNo=${pageNo}&dataPerPage=${dataPerPage}&search=${query}`, config)
        .then(res => {
            return res;
        })
}