import React, {useState} from 'react';

import css from './style.css'

const Categories = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const choseCategory = (index)=>{
        setActiveIndex(index)
    }
    return (
        <div>
            <ul className='ul'>
                <li onClick={()=> choseCategory(0)} className={activeIndex === 0 ? 'active' : ''}>All</li>
                <li onClick={()=> choseCategory(1)} className={activeIndex === 1 ? 'active' : ''}>Meat</li>
                <li onClick={()=> choseCategory(2)} className={activeIndex === 2 ? 'active' : ''}>Vegan</li>
                <li onClick={()=> choseCategory(3)} className={activeIndex === 3 ? 'active' : ''}>Grill</li>
            </ul>
        </div>
    );
};

export {Categories};