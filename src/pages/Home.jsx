import React, { useState, useEffect } from 'react'

import { api } from '../services/Api'

import { Preloader } from '../components/Preloader'
import {CategoriesList} from '../components/Categories'

export function Home() {

    const [catalog, setCatalog] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        api.food.getAllCategories()
            .then(data => {
                data.categories && setCatalog(data.categories.slice(0, data.categories.length-2))
                setLoading(false)
            })
            .catch(err => {
                setLoading(true)
            })
    }, [])

    return (
        <>
            {
                loading ? <Preloader /> : <CategoriesList catalog={catalog} />
            }
        </>
    )
}
