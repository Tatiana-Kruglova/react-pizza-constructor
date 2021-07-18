import React, {Component} from "react";
import PizzaOrderComponent from "./PizzaOrderComponent.js";

class PizzaConfiguratorComponent extends Component {
    render() {
        return (
            <div className="App-header">
                <div><h1>Собери свою пиццу</h1></div>
                <PizzaOrderComponent/>
            </div>
        )
    }
}

export default PizzaConfiguratorComponent;