import './meal.css';
import { MealItem } from './MealItem'

export function MealList ({ meal = [] }) {

    return (
        <div className='meal-list'>
            {
                meal.length
                    ? meal.map(item => {
                        return <MealItem key = {item.idMeal} { ...item}/>
                        })
                    : <h4>404 ошибка</h4>
            }
        </div>
    )
}
