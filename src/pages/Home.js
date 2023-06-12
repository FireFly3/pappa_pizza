import React, {useEffect, useState} from 'react';

import {Categories} from "../components/categories/Categories";
import {Sort} from "../components/sort/Sort";
import Skeleton from "../components/pizzaBlock/Skeleton";
import {PizzaBlock} from "../components/pizzaBlock/PizzaBlock";

const Home = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://646380b94dca1a66135fd25b.mockapi.io/pizzas')
            .then((response) => response.json())
            .then((data) => {
                setItems(data)
                setIsLoading(false)
            })
    }, []);

    return (
        <>
            <div className="content__top">
                <Categories/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ? [...new Array(8)].map((_, index) => <Skeleton key={index}/>) : items.map(pizza =>
                    <PizzaBlock key={pizza.id} pizza={pizza}/>)}
            </div>
        </>
    );
};

export {Home};