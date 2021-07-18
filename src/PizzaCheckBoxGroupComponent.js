import PizzaCheckBox from "./PizzaCheckBox";

const PizzaCheckBoxGroupComponent = (props) => {
    return (
        <div className="bottom-element">
            <p>{props.title}</p>
            {
                props.values.map(option => {
                    return (
                        <PizzaCheckBox key={option.id} checked={option.checked}
                                       onChange={value => props.handleCheckboxChange(value, option)}
                                       label={option.name}/>
                    )
                })
            }
        </div>
    );
}

export default PizzaCheckBoxGroupComponent;