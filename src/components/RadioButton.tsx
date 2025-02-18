interface RadioButtonProps {
    id: string;
    name: string;
    label: string;
    value: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ id, name, label, value, checked, onChange }) => {
    return (
        <div className="flex items-center">
            <input type="radio" id={id} name={name} value={value} className="mr-2" checked={checked} onChange={onChange}/>
            <label htmlFor={id} className="text-gray-700">{label}</label>
        </div>
    )
}

export default RadioButton