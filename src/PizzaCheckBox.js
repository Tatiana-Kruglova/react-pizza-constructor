const PizzaCheckBox = ({checked, onChange, label}) => {
    return <label><input type="checkbox" checked={checked} onChange={ev => onChange(ev.target.checked)}/>{label}</label>;
};

export default PizzaCheckBox;