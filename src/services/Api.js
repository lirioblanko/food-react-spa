const axios = require('axios').default;

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_API_URL;

class Api_Fetch {
    BASE_API;

    constructor(baseUrl) {
        this.BASE_API = baseUrl
    }

    instance = async (url, params = {}) => {
        const res = await fetch(`${this.BASE_API}${url}`, params)
        const data = await res.json()

        return data
    }

    food = {
        getAllCategories: async() => {
            const data = await this.instance(`/categories.php`)

            return data
        },
        getMealById: async (idMeal) => {
            const data = await this.instance(`/lookup.php?i=${idMeal}`)

            return data
        },
        getFilterByCategories: async (categoryName) => {
            const data = await this.instance(`/filter.php?c=${categoryName}`)

            return data
        },
    }
}

class Api_AXIOS {
    instance;

    constructor(baseURL) {
        this.instance = axios.create({
            baseURL: baseURL
        })
    }

    food = {
        getAllCategories: async() => {
            const {data} = await this.instance.get(`/categories.php`)

            return data
        },
        getMealById: async (idMeal) => {
            const {data} = await this.instance.get(`/lookup.php?i=${idMeal}`)

            return data
        },
        getFilterByCategories: async (categoryName) => {
            const {data} = await this.instance.get(`/filter.php?c=${categoryName}`)

            return data
        },
    }
}

// export const api = new Api_Fetch(API_URL+ API_KEY)
export const api = new Api_AXIOS(API_URL+ API_KEY)
