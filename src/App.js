import {Header} from "./components/header/Header";
import {Categories} from "./components/categories/Categories";
import {Sort} from "./components/sort/Sort";
import {PizzaBlock} from "./components/pizzaBlock/PizzaBlock";
import "./scss/app.scss"
import pizzas from "./assets/pizzas.json"
import {useEffect, useState} from "react";


function App() {

    const [items, setItems] = useState();

    useEffect(() => {
        fetch('https://646380b94dca1a66135fd25b.mockapi.io/pizzas')
            .then((response) => response.json())
            .then((data) => {
                setItems(data)
            }, [])
    });


    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories/>
                        <Sort/>
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        {items.map(pizza => <PizzaBlock key={pizza.id} pizza={pizza}/>)}
                        {/*<PizzaBlock/>*/}
                        {/*<PizzaBlock/>*/}
                        {/*<PizzaBlock/>*/}
                        {/*<PizzaBlock/>*/}
                        {/*<PizzaBlock/>*/}
                        {/*<PizzaBlock/>*/}
                        {/*<PizzaBlock/>*/}
                        {/*<PizzaBlock/>*/}
                        {/*<PizzaBlock/>*/}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
