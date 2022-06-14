import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { api } from '../services/Api'

import { Preloader } from '../components/Preloader'
import { CategoriesList } from '../components/Categories'
import { Search } from "../components/Search";

export function Home() {

    const [catalog, setCatalog] = useState([]);
    const [loading, setLoading] = useState(true)
    const [searchValue, setSearchValue] = useState('')
    const [filteredCatalog, setFilteredCatalog] = useState([])

    const { pathname, search } = useLocation();
    const navigate = useNavigate();

    const handleSearch = (str) => {
        setFilteredCatalog(
            catalog.filter(item =>
                item.strCategory
                    .toLowerCase()
                    .includes(str.toLowerCase()))
        )
        navigate({
            pathname,
            search: `?search=${str}`
        })
    }

    useEffect(() => {
        api.food.getAllCategories()
            .then(data => {
                const showAllCategories = data.categories.slice(0, data.categories.length-2)

                data.categories && setCatalog(showAllCategories)
                setLoading(false)
                setFilteredCatalog( search ?
                    showAllCategories.filter(item =>
                        item.strCategory
                            .toLowerCase()
                            .includes(search.split('=')[1].toLowerCase())
                    ) : showAllCategories
                );
            })
            .catch(err => {
                setLoading(true)
            })
    }, [search])

    return (
        <>
            <Search cb={handleSearch} searchValue={searchValue} setSearchValue={setSearchValue}/>
            {
                loading ? <Preloader /> : <CategoriesList catalog={filteredCatalog} searchValue={searchValue} setSearchValue={setSearchValue}/>
            }
        </>
    )
}
