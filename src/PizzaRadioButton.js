const PizzaRadioButton = ({label, name, value}) => {
    return (
        <label><input type="radio" name={name} value={value} defaultChecked={value === 0}/>{label}</label>
    );
};

export default PizzaRadioButton;