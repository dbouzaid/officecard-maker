import React, { useState } from 'react';

interface TextInputProps {
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ placeholder = '', value = '', onChange }) => {
    const [inputValue, setInputValue] = useState(value);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

    return (
        <input
            type="text"
            placeholder={placeholder}
            value={inputValue}
            onChange={handleChange}
            className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    );
};

export default TextInput;