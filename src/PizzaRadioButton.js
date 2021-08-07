const PizzaRadioButton = ({label, name, value, checked, onChange}) => {
    return (
        <label><input type="radio" name={name} value={value} checked={checked} onChange={() => onChange(this)}/>{label}</label>
    );
};

export default PizzaRadioButton;