import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { api } from '../services/Api'

import { Preloader } from '../components/Preloader'
import { CategoriesList } from '../components/Categories'
import { Search } from "../components/Search";

export function Home() {

    const [catalog, setCatalog] = useState([]);
    const [loading, setLoading] = useState(true)
    const [filteredCatalog, setFilteredCatalog] = useState([])

    const { pathname, search } = useLocation();
    const navigate = useNavigate();

    const handleSearch = (str) => {
        setFilteredCatalog(
            catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase()))
        )
        navigate({
            pathname,
            search: `?search=${str}`
        })
    }

    useEffect(() => {
        api.food.getAllCategories()
            .then(data => {
                data.categories && setCatalog(data.categories.slice(0, data.categories.length-2))
                setLoading(false)
                setFilteredCatalog( search ?
                    data.categories.slice(0, data.categories.length-2).filter(item =>
                        item.strCategory
                            .toLowerCase()
                            .includes(search.split('=')[1].toLowerCase())
                    ) : data.categories.slice(0, data.categories.length-2)
                );
            })
            .catch(err => {
                setLoading(true)
            })
    }, [search])

    return (
        <>
            <Search cb={handleSearch} />
            {
                loading ? <Preloader /> : <CategoriesList catalog={filteredCatalog} />
            }
        </>
    )
}
