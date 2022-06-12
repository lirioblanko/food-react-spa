import './meal.css';
import { MealItem } from './MealItem'

export function MealList ({ meal = [], nameCategory }) {

    return (
        <div className='meal-list'>
            {
                meal.length
                    ? meal.map(item => {
                        return <MealItem key = {item.idMeal}{ ...item} nameCategory={nameCategory} />
                        })
                    : <h4>404 ошибка</h4>
            }
        </div>
    )
}
