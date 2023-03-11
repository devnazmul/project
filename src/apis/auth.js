import axios from "axios";

export const apiTokenValidation = async () => {
    const data = JSON.parse(localStorage.getItem('data'))
    console.log(data?.token);
    const config = {
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json',
            "Authorization": `Bearer ${JSON.parse(localStorage.getItem('data')).token}`
        },
    };
    return await axios.get('/auth/checkJWTvalidation', { name: JSON.parse(localStorage.getItem('data')).user?.name }, config)
    // .then(res => {
    //     return res;
    // })
    // return await axios.get('/auth/checkJWTvalidation', { name: JSON.parse(localStorage.getItem('data')).user?.name }, config)
    //     .then(res => {
    //         return res;
    //     })
}

export const apiUserRegistration = async (data) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json',
        },
    };
    return await axios.post('/auth/registration', data, config)
        .then(res => {
            localStorage.setItem('data', JSON.stringify(res.data.data))
            return res.data;
        })
}


export const apiUserLogin = async (data) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json',
        },
    };
    return await axios.post('/auth/login', data, config)
        .then(res => {
            return res.data;
        })
}