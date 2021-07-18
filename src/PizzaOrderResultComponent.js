import React, {Component} from "react";

class PizzaOrderResultComponent extends Component {
    render() {
        return (
            <div className="bottom-element">
                <h2>Твоя пицца</h2>
                <p>{this.props.size} {this.props.dough} {this.props.sauce} {this.props.cheese}{this.props.meat}{this.props.vegetables}</p>
                <b>{this.props.price} руб</b>
            </div>
        )
    }
}

export default PizzaOrderResultComponent;