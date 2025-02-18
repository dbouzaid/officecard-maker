import React from 'react';
import CheckBox from './CheckBox';

interface CheckBoxGroupProps {
    options: { label: string; value: string }[];
    selectedValues: string[];
    onChange: (selectedValues: string[]) => void;
}

const CheckBoxGroup: React.FC<CheckBoxGroupProps> = ({ options, selectedValues, onChange }) => {
    const handleCheckboxChange = (value: string) => {
        if (selectedValues.includes(value)) {
            onChange(selectedValues.filter((selectedValue) => selectedValue !== value));
        } else {
            onChange([...selectedValues, value]);
        }
    };

    return (
        <div className="flex flex-col space-y-2">
            {options.map((option) => (
                <CheckBox
                    key={option.value}
                    label={option.label}
                    checked={selectedValues.includes(option.value)}
                    onChange={() => handleCheckboxChange(option.value)}
                />
            ))}
        </div>
    );
};

export default CheckBoxGroup;