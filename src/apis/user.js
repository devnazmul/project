import axios from "axios";

export const apiGetAllUsers = async (pageNo, dataPerPage, query) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json',
            "Authorization": `Bearer ${JSON.parse(localStorage.getItem('data')).token}`
        },
    };
    return await axios.get(`/dashboard/user/read?pageNo=${pageNo}&dataPerPage=${dataPerPage}&search=${query}`, config)
        .then(res => {
            return res;
        })
}
