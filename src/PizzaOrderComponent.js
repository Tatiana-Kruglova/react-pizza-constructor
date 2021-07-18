import {Component} from "react";
import React from "react";
import PizzaSizeComponent from "./PizzaSizeComponent";
import PizzaDoughComponent from "./PizzaDoughComponent";
import PizzaSauceComponent from "./PizzaSauceComponent";
import PizzaCheckBoxGroupComponent from "./PizzaCheckBoxGroupComponent";
import PizzaOrderResultComponent from "./PizzaOrderResultComponent";

const addComponentIncrease = 29;
const sizeIncrease = 50;
const defaultPrice = 200;
const sauceValues = [{id: 0, name: 'Томатный', groupName: 'sauce'}, {id: 1, name: 'Белый', groupName: 'sauce'},
    {id: 2, name: 'Острый', groupName: 'sauce'}];
const doughValues = [{id: 0, name: 'Тонкое', comment: 'на тонком тесте', groupName: 'dough'},
    {id: 1, name: 'Пышное', comment: 'на пышном тесте', groupName: 'dough'}];
const sizeValues = [{id: 0, name: '30 см', groupName: 'size'}, {id: 1, name: '35 см', groupName: 'size'}];
const cheeseValues = [{id: 0, checked: false, name: 'Моцарелла'}, {id: 1, checked: false, name: 'Чеддер'},
    {id: 2, checked: false, name: 'Дор Блю'}];
const vegetablesValues =  [{id: 0, checked: false, name: 'Помидор'}, {id: 1, checked: false, name: 'Грибы'},
    {id: 2, checked: false, name: 'Перец'}];
const meatValues = [{id: 0, checked: false, name: 'Бекон'}, {id: 1, checked: false, name: 'Пепперони'},
    {id: 2, checked: false, name: 'Ветчина'}];

class PizzaOrderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showResultOrder: false,
            showOrderForm: true,
            size: 0,
            price: defaultPrice,
            dough: 0,
            sauce: 0,
            cheese: cheeseValues,
            vegetables: vegetablesValues,
            meat: meatValues
        };
        this.setPizzaSize = this.setPizzaSize.bind(this);
        this.setPizzaDough = this.setPizzaDough.bind(this);
        this.setPizzaSauce = this.setPizzaSauce.bind(this);
        this.setPizzaCheese = this.setPizzaCheese.bind(this);
        this.setPizzaVegetables = this.setPizzaVegetables.bind(this);
        this.setPizzaMeat = this.setPizzaMeat.bind(this);
        this.handleOrder = this.handleOrder.bind(this);
    }

    setPizzaSize(event) {
        let size = event.target.value;
        this.setState({
            size: size
        }, () => this.getFinalPrice())
    }

    setPizzaDough(event) {
        let dough = event.target.value;
        this.setState({
            dough: dough
        })
    }

    setPizzaSauce(event) {
        let sauce = event.target.value;
        this.setState({
            sauce: sauce
        })
    }

    setPizzaCheese(checked, option) {
        const {cheese} = this.state;

        let cheeseValues = this.calculateCheckboxValues(cheese, option, checked);
        this.setState({
            cheese: cheeseValues
        }, () => this.getFinalPrice());
    }

    setPizzaVegetables(checked, option) {
        const {vegetables} = this.state;

        let vegetablesValues = this.calculateCheckboxValues(vegetables, option, checked);
        this.setState({
            vegetables: vegetablesValues
        }, () => this.getFinalPrice());
    }

    setPizzaMeat(checked, option) {
        const {meat} = this.state;

        let meatValues = this.calculateCheckboxValues(meat, option, checked);
        this.setState({
            meat: meatValues
        }, () => this.getFinalPrice());
    }

    calculateCheckboxValues(stateValues, option, checked) {
        let values = [...stateValues];
        for (let i in values) {
            if (values[i].id === option.id) {
                values[i].checked = checked;
            }
        }
        return values;
    }

    getFinalPrice() {
        let finalPrice = defaultPrice + (this.state.size == 1 ? sizeIncrease : 0);
        finalPrice = this.calculateCheckBoxPrice(finalPrice, this.state.cheese);
        finalPrice = this.calculateCheckBoxPrice(finalPrice, this.state.vegetables);
        finalPrice = this.calculateCheckBoxPrice(finalPrice, this.state.meat);

        this.setState({
            price: finalPrice
        })
    }

    calculateCheckBoxPrice(finalPrice, values) {
        for (let i in values) {
            let value = values[i];
            if (value.checked) {
                finalPrice += addComponentIncrease;
            }
        }
        return finalPrice;
    }

    getPizzaOrderSize() {
        return sizeValues[this.state.size].name;
    }

    getPizzaOrderDough() {
        return doughValues[this.state.dough].comment;
    }

    getPizzaOrderSauce() {
        return sauceValues[this.state.sauce].name + ' соус';
    }

    getPizzaOrderCheese() {
        return this.state.cheese.map(value => value.checked ? value.name + ' ' : '')
    }

    getPizzaOrderMeat() {
        return this.state.meat.map(value => value.checked ? value.name + ' ' : '')
    }

    getPizzaOrderVegetables() {
        return this.state.vegetables.map(value => value.checked ? value.name + ' ' : '')
    }

    handleOrder() {
        this.setState({
            showResultOrder: true,
            showOrderForm: false
        });
    }

    renderResultOrder() {
        if (!this.state.showResultOrder) {
            return '';
        }
        return (
            <PizzaOrderResultComponent size={this.getPizzaOrderSize()} dough={this.getPizzaOrderDough()}
                                       sauce={this.getPizzaOrderSauce()} cheese={this.getPizzaOrderCheese()}
                                       meat={this.getPizzaOrderMeat()}
                                       vegetables={this.getPizzaOrderVegetables()} price={this.state.price}/>
        );
    }

    renderOrderForm() {
        if (!this.state.showOrderForm) {
            return '';
        }
        return <div>
            <form>
                <PizzaSizeComponent handleRadioButtonChange={this.setPizzaSize} values={sizeValues}/>
                <PizzaDoughComponent handleRadioButtonChange={this.setPizzaDough} values={doughValues}/>
                <PizzaSauceComponent handleRadioButtonChange={this.setPizzaSauce} values={sauceValues}/>
                <PizzaCheckBoxGroupComponent handleCheckboxChange={this.setPizzaCheese}
                                             values={this.state.cheese}
                                             title={"Добавьте сыр"}/>
                <PizzaCheckBoxGroupComponent handleCheckboxChange={this.setPizzaVegetables}
                                             values={this.state.vegetables} title={"Добавьте овощи"}/>
                <PizzaCheckBoxGroupComponent handleCheckboxChange={this.setPizzaMeat}
                                             values={this.state.meat} title={"Добавьте мясо"}/>
                <button type="button" className="orderbutton" onClick={this.handleOrder}>Заказать
                    за {this.state.price}</button>
            </form>
        </div>;
    }

    render() {
        return (
            <div>
                {this.renderOrderForm()}
                {this.renderResultOrder()}
            </div>
        );
    }
}

export default PizzaOrderComponent;