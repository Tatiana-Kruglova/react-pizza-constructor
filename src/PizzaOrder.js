import React, {useEffect, useState} from "react";
import PizzaCheckBoxGroup from "./PizzaCheckBoxGroup";
import PizzaOrderResult from "./PizzaOrderResult";
import {DEFAULT_PRICE, PizzaData} from './PizzaData'
import PizzaRadioButtonGroup from "./PizzaRadioButtonGroup";

export const PizzaOrder = () => {
    const [pizzaSize, setPizzaSize] = useState(PizzaData.size);
    const [pizzaDough, setPizzaDough] = useState(PizzaData.dough);
    const [pizzaSauce, setPizzaSauce] = useState(PizzaData.sauce);
    const [pizzaCheese, setPizzaCheese] = useState(PizzaData.cheese);
    const [pizzaVegetables, setPizzaVegetables] = useState(PizzaData.vegetables);
    const [pizzaMeat, setPizzaMeat] = useState(PizzaData.meat);
    const [price, setPrice] = useState(DEFAULT_PRICE);
    const [showResultOrder, setShowResultOrder] = useState(false);
    const [showOrderForm, setShowOrderForm] = useState(true);

    useEffect(() => {
        calculateFinalPrice();
        // eslint-disable-next-line
    }, [pizzaSize, pizzaDough, pizzaSauce, pizzaCheese, pizzaVegetables, pizzaMeat]);

    const calculateValues = (setter, stateValue, option, checked) => {
        let values = [...stateValue.values];
        for (let i in values) {
            if (values[i].id === option.id) {
                values[i].checked = checked;
            } else if (stateValue.type === 0) {
                values[i].checked = false;
            }
        }
        setter({
            ...stateValue,
            values: values
        });
    }

    function getPizzaValues() {
        return Object.values([...pizzaSize.values, ...pizzaDough.values, ...pizzaSauce.values,
            ...pizzaCheese.values, ...pizzaVegetables.values, ...pizzaMeat.values]);
    }

    const calculateFinalPrice = () => {
        let finalPrice = getPizzaValues()
            .filter(value => value.checked)
            .reduce((r, {increase}) => r + increase, DEFAULT_PRICE);
        setPrice(finalPrice);
    }

    const calculatePizzaOrderResult = () => {
        return getPizzaValues()
            .filter(value => value.checked)
            .map(value => (value.description ? value.description : value.name) + " ");
    }

    const handleOrder = () => {
        setShowOrderForm(false);
        setShowResultOrder(true)
    }

    const renderResultOrder = () => {
        if (!showResultOrder) {
            return '';
        }
        return <PizzaOrderResult description={calculatePizzaOrderResult()} price={price}/>;
    }

    const renderOrderForm = () => {
        if (!showOrderForm) {
            return '';
        }
        return <div>
            <form>
                <div className="left-element">
                    <PizzaRadioButtonGroup
                        handleChange={(option) => calculateValues(setPizzaSize, pizzaSize, option, true)}
                        title={"Размер"}
                        values={pizzaSize.values}/>
                </div>
                <div className="right-element">
                    <PizzaRadioButtonGroup
                        handleChange={(option) => calculateValues(setPizzaDough, pizzaDough, option, true)}
                        title={"Тесто"}
                        values={pizzaDough.values}/>
                </div>
                <div className="bottom-element">
                    <PizzaRadioButtonGroup
                        handleChange={(option) => calculateValues(setPizzaSauce, pizzaSauce, option, true)}
                        title={"Выберите соус"}
                        values={pizzaSauce.values}/>
                </div>
                <PizzaCheckBoxGroup
                    handleChange={(option, checked) => calculateValues(setPizzaCheese, pizzaCheese, option, checked)}
                    values={pizzaCheese.values}
                    title={"Добавьте сыр"}/>
                <PizzaCheckBoxGroup
                    handleChange={(option, checked) => calculateValues(setPizzaVegetables, pizzaVegetables, option, checked)}
                    values={pizzaVegetables.values} title={"Добавьте овощи"}/>
                <PizzaCheckBoxGroup
                    handleChange={(option, checked) => calculateValues(setPizzaMeat, pizzaMeat, option, checked)}
                    values={pizzaMeat.values} title={"Добавьте мясо"}/>
                <button type="button" className="orderbutton" onClick={handleOrder}>Заказать
                    за {price}</button>
            </form>
        </div>;
    }

    return <div>
        {renderOrderForm()}
        {renderResultOrder()}
    </div>;

}

export default PizzaOrder;