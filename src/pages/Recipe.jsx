import {useState, useEffect} from "react";
import { useParams, useNavigate } from 'react-router-dom'

import { api } from '../services/Api'
import {Preloader} from "../components/Preloader";

export function Recipe() {
    const { idRecipe } = useParams();
    const [recipe, setRecipe] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        api.food.getMealById(idRecipe)
            .then(data => {
                setRecipe(data.meals[0])
            })
            .catch(err => {
                console.log('err')
            })
    }, [idRecipe])

    return (
        <>
            {
                !recipe.idMeal ? (
                    <Preloader />
                ) : (
                <div className="card categories-item">
                    <div className="card-image">
                        <img src={ recipe.strMealThumb } alt={ recipe.strMeal } />
                    </div>
                    <h6>Category: {recipe.strCategory}</h6>
                    {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
                    <h1 className="card-title">{ recipe.strMeal }</h1>
                    <table className='centered'>
                        <thead>
                        <tr>
                            <th>Ingredient</th>
                            <th>Measure</th>
                        </tr>
                        </thead>
                        <tbody>
                        {Object.keys(recipe).map((key) => {
                            if (key.includes('Ingredient') && recipe[key]) {
                                return (
                                    <tr key={key}>
                                        <td>{recipe[key]}</td>
                                        <td>
                                            {
                                                recipe[
                                                    `strMeasure${key.slice(
                                                        13
                                                    )}`
                                                    ]
                                            }
                                        </td>
                                    </tr>
                                );
                            }
                            return null;
                        })}
                        </tbody>
                    </table>
                    <p>{ recipe.strInstructions }</p>
                </div>
            )}
            <button onClick={() => navigate(-1)}>Back</button>
        </>
    )
}
