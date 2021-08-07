import React, {Component} from "react";
import PizzaOrder from "./PizzaOrder.js";

class PizzaConfigurator extends Component {
    render() {
        return (
            <div className="App-header">
                <h1>STAGING</h1>
                <div><h1>Собери свою пиццу</h1></div>
                <PizzaOrder/>
                <hr/>
                <button onClick={methodDoesNotExist}>Break the world</button>;
            </div>
        )
    }
}

export default PizzaConfigurator;