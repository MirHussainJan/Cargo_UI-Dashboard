import axios from "axios";
const base_url = 'http://localhost:8080'

const registerUser = async (userData) => {
    const response = await axios.post(`${base_url}/users/register`, userData)
    if (response.data) {
        localStorage.setItem('myUser', JSON.stringify(response.data))
    }
    return response.data
}

const logUser = async (userData) => {
    const response = await axios.post(`${base_url}/users/login`, userData)
    if (response.data) {
        localStorage.setItem('myUser', JSON.stringify(response.data))
    }
    return response.data
}


const getUsers = async () => {
    const response = await axios.get(`${base_url}/get-users`)
    return response.data
}

const bookCargo = async (cargoData) => {
    const response = await axios.post(`${base_url}/api/cargo/book`, cargoData)
    return response.data
}

const getCargo = async () => {
    const response = await axios.get(`${base_url}/get-users`)
    return response.data
}

export const authService = {
    registerUser,
    logUser,
    getUsers,
    bookCargo
}