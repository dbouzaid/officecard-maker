import React from 'react';

interface CheckBoxProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    label?: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({ checked, onChange, label }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.checked);
    };

    return (
        <label className="flex items-center space-x-2">
            <input 
                type="checkbox" 
                checked={checked} 
                onChange={handleChange} 
                className="form-checkbox h-5 w-5 text-blue-600"
            />
            {label && <span className="text-gray-700">{label}</span>}
        </label>
    );
};

export default CheckBox;