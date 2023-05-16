import React, {useState} from 'react';


const Categories = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const categories = [
        'All', 'Meat', 'Vegan', 'Grill', 'Acute', 'Closed'
    ]

    const choseCategory = (index) => {
        setActiveIndex(index)
    }
    return (
        <div className="categories">
            <ul>
                {categories.map((name, index) => (
                    <li key={index} onClick={() => choseCategory(index)}
                        className={activeIndex === index ? 'active' : ''}>{name}</li>
                ))}
                {/*<li onClick={()=> choseCategory(0)} className={activeIndex === 0 ? 'active' : ''}>All</li>*/}
                {/*<li onClick={()=> choseCategory(1)} className={activeIndex === 1 ? 'active' : ''}>Meat</li>*/}
                {/*<li onClick={()=> choseCategory(2)} className={activeIndex === 2 ? 'active' : ''}>Vegan</li>*/}
                {/*<li onClick={()=> choseCategory(3)} className={activeIndex === 3 ? 'active' : ''}>Grill</li>*/}
                {/*<li onClick={()=> choseCategory(4)} className={activeIndex === 4 ? 'active' : ''}>Acute</li>*/}
                {/*<li onClick={()=> choseCategory(5)} className={activeIndex === 5 ? 'active' : ''}>Closed</li>*/}
            </ul>
        </div>
    );
};

export {Categories};