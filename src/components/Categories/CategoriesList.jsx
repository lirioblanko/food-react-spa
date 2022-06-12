import './categories.css';
import { CategoriesItem } from './CategoriesItem'

export function CategoriesList ({ catalog = [] }) {

    return (
            <div className='categories-list'>
            { catalog.length ? catalog.map(item => {
                return <CategoriesItem key = {item.idCategory} { ...item}/>
            }) : <h4>404 ошибка</h4> }
        </div>
    )
}
