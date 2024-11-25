import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'ebf5a3b6beb841bf831f4409ff274afa'
    }
})
