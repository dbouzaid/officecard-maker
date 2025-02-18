import React from 'react';
import RadioButton from './RadioButton';

interface RadioButtonGroupProps {
    options: { label: string; value: string, name: string }[];
    name: string;
    selectedValue: string;
    onChange: (value: string) => void;
}

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({ options, name, selectedValue, onChange }) => {
    return (
        <div>
            {options.map((option, index) => (
            <RadioButton
                key={option.value}
                name={option.name}
                value={option.value}
                label={option.label}
                checked={selectedValue === option.value}
                onChange={() => onChange(option.value)} 
                id={`${name}-${index}`}
            />
            ))}
        </div>
    );
};

export default RadioButtonGroup;
