import PizzaRadioButton from "./PizzaRadioButton";

const PizzaRadioButtonGroupComponent = (props) => {
    return (
        props.values.map(option => {
            return (
                <PizzaRadioButton label={option.name} name={option.groupName} value={option.id}/>
            )
        })
    );
}

export default PizzaRadioButtonGroupComponent;