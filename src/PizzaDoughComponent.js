import PizzaRadioButtonGroupComponent from "./PizzaRadioButtonGroupComponent";
import React from "react";

const PizzaDoughComponent = (props) => {
    return (
        <div className="right-element" onChange={props.handleRadioButtonChange.bind(this)}>
            <p>Тесто</p>
            <PizzaRadioButtonGroupComponent values={props.values}/>
        </div>
    );
}

export default PizzaDoughComponent;