import './categories.css';
import { CategoriesItem } from './CategoriesItem'
import { useNavigate } from 'react-router-dom'

export function CategoriesList ({ catalog = [], setSearchValue }) {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
        setSearchValue('')
    }

    return (
            <div className='categories-list'>
            { catalog.length ? catalog.map(item => {
                return <CategoriesItem key = {item.idCategory} { ...item}/>
            }) : (
                <div>
                    <h4>Ничего не найдено</h4>
                    <button className="btn" onClick={goBack}>Назад</button>
                </div>
            ) }
        </div>
    )
}
