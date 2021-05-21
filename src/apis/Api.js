import axiox from 'axios'

const API = axiox.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

export default API