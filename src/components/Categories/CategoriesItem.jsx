import { Link } from 'react-router-dom'
import {useEffect, useState} from "react";

export function CategoriesItem ({
                                 idCategory,
                                 strCategory: nameCategory,
                                 strCategoryDescription: descriptionCategory,
                                 strCategoryThumb: imgCategory,
}) {
    const namesColor = ['color-one', 'color-two', 'color-three', 'color-four'];
    const [classItem, setClassItem] = useState('')

    useEffect(() => {
        const randomColor = namesColor[Math.floor(Math.random() * namesColor.length)]
        setClassItem(`card categories-item` + ' ' + randomColor);
    }, [])

    return (
            <Link to={ `/category/${nameCategory}` } className={classItem}>
                <div className="categories-img">
                    <img className='categories-img' src={ imgCategory } alt={ nameCategory } />
                </div>
                <span className="card-title categories-title">{ nameCategory }</span>
            </Link>
        )
}
