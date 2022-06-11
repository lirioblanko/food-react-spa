import { Link } from 'react-router-dom'

export function MealItem ({
                            idMeal,
                            strMeal: nameMeal,
                            strMealThumb: imgMeal
}) {

    return (
        <Link to={ `/meal/${idMeal}` } className="card meal-item">
            <div className="card-image meal-img">
                <img src={ imgMeal } alt={ nameMeal } />
            </div>
            <span className="card-title meal-title">{ nameMeal }</span>
        </Link>
    )
}
