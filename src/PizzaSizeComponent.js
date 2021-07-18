import PizzaRadioButtonGroupComponent from "./PizzaRadioButtonGroupComponent";
import React from "react";

const PizzaSizeComponent = (props) => {
    return (
        <div className="left-element" onChange={props.handleRadioButtonChange.bind(this)}>
            <p>Размер</p>
            <PizzaRadioButtonGroupComponent values={props.values}/>
        </div>
    );
}

export default PizzaSizeComponent;
