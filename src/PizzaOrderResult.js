import React, {Component} from "react";

class PizzaOrderResult extends Component {
    render() {
        return (
            <div className="bottom-element">
                <h2>Твоя пицца</h2>
                <p>{this.props.description}</p>
                <b>{this.props.price} руб</b>
            </div>
        )
    }
}

export default PizzaOrderResult;