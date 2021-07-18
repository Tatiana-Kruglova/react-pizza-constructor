import PizzaRadioButtonGroupComponent from "./PizzaRadioButtonGroupComponent";
import React from "react";

const PizzaSauceComponent = (props) => {
    return (
        <div className="bottom-element" onChange={props.handleRadioButtonChange.bind(this)}>
            <p>Выберите соус</p>
            <PizzaRadioButtonGroupComponent values={props.values}/>
        </div>
    );
}

export default PizzaSauceComponent;