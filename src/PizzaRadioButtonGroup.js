import PizzaRadioButton from "./PizzaRadioButton";

const PizzaRadioButtonGroup = (props) => {
    return (
        <div>
            <p>{props.title}</p>
            {
                props.values.map(option => {
                    return (
                        <PizzaRadioButton key={option.id} value={option.id} name={option.groupName} checked={option.checked}
                                       onChange={() => props.handleChange(option)}
                                       label={option.name}/>
                    )
                })
            }
        </div>
    );
}

export default PizzaRadioButtonGroup;