import React, { useState, useEffect } from 'react'

import { api } from '../services/Api'

import { Preloader } from '../components/Preloader'
import { CategoriesList } from '../components/Categories'
import { Search } from "../components/Search";

export function Home() {

    const [catalog, setCatalog] = useState([]);
    const [loading, setLoading] = useState(true)
    const [filteredCatalog, setFilteredCatalog] = useState([])

    const handleSearch = (str) => {
        setFilteredCatalog(
            catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase()))
        )
    }

    useEffect(() => {
        api.food.getAllCategories()
            .then(data => {
                data.categories && setCatalog(data.categories.slice(0, data.categories.length-2))
                setLoading(false)
                setFilteredCatalog(data.categories.slice(0, data.categories.length-2))
            })
            .catch(err => {
                setLoading(true)
            })
    }, [])

    return (
        <>
            <Search cb={handleSearch} />
            {
                loading ? <Preloader /> : <CategoriesList catalog={filteredCatalog} />
            }
        </>
    )
}
