import {useState, useEffect} from "react";
import { useParams} from 'react-router-dom'

import { api } from '../services/Api'

import {Preloader} from "../components/Preloader";
import {MealList} from "../components/Meal";

export function Category() {
    const { nameCategory } = useParams();
    const [meal, setMeal] = useState([])

    useEffect(() => {
        api.food.getFilterByCategories(nameCategory)
            .then(data => {
                setMeal(data.meals)
            })
            .catch(err => {
                console.log('err')
            })
    }, [nameCategory])

    return (
        <>
            {
                !meal.length ? <Preloader /> : <MealList meal={meal} />
            }
        </>
    )
}
