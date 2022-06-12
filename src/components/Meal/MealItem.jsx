import { Link } from 'react-router-dom'

export function MealItem ({
                            idMeal,
                            strMeal: nameMeal,
                            strMealThumb: imgMeal,
                            nameCategory
}) {

    return (
        <Link to={ `/category/${nameCategory}/${idMeal}` } className="card meal-item">
            <div className="card-image meal-img">
                <img src={ imgMeal } alt={ nameMeal } />
            </div>
            <span className="card-title meal-title">{ nameMeal }</span>
        </Link>
    )
}
