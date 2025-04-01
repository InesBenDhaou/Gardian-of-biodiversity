import axios from "axios"
import Cookies from 'js-cookie'; 

const baseUrl = 'http://localhost:3000/api';

export const get = async (url, config) => {
    const result = await axios.get(baseUrl + url, config);
    return result.data;
}

export const getOne = async (url, config = {}) => {
    const token = getJwtFromCookie(); // You need to implement getJwtFromCookie function
    const headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
    };
    const result = await axios.get(baseUrl + url, { ...config, headers});
    return result.data;
}

export const getJwtFromCookie = () => {
    return Cookies.get('jwt');
};

export const post = async (url, data, config) => {
    const result = await axios.post(baseUrl + url, data, config);
    return result.data;
}

export const postLogOut = async (url, config) => {
    const result = await axios.post(baseUrl + url, {}, {
        ...config,
        withCredentials: true // Ensure cookies are sent with the request
    });
    return result.data;
}

export const del = async (url, id, config) => {
        const result = await axios.delete(baseUrl + url + `/${id}`, config);
        return result.data;

};

export const update = async (url, data, id, config) => {
    const result = await axios.put(baseUrl + url + `/${id}`, data, config);
    return result.data;

};

