import React, {Component} from "react";
import PizzaOrder from "./PizzaOrder.js";

class PizzaConfigurator extends Component {
    render() {
        return (
            <div className="App-header">
                <div><h1>Собери свою пиццу</h1></div>
                <PizzaOrder/>
            </div>
        )
    }
}

export default PizzaConfigurator;