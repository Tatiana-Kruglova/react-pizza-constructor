import PizzaCheckBox from "./PizzaCheckBox";

const PizzaCheckBoxGroup = (props) => {
    return <div className="bottom-element">
        <p>{props.title}</p>
        {
            props.values.map(option => {
                return <PizzaCheckBox key={option.id} checked={option.checked}
                                      onChange={(value) => props.handleChange(option, value)}
                                      label={option.name}/>
            })
        }
    </div>;
}

export default PizzaCheckBoxGroup;