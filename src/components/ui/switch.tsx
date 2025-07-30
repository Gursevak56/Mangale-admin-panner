"use client";

import { useState } from "react";

interface SwitchProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
}

export function Switch({ checked = false, onChange }: SwitchProps) {
    const [isChecked, setIsChecked] = useState(checked);

    const toggle = () => {
        const newValue = !isChecked;
        setIsChecked(newValue);
        onChange?.(newValue);
    };

    return (
        <button
            onClick={toggle}
            className={`w-10 h-5 flex items-center rounded-full p-1 transition-colors duration-300 ${isChecked ? "bg-yellow-500" : "bg-gray-300"
                }`}
        >
            <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform duration-300 ${isChecked ? "translate-x-5" : ""
                    }`}
            />
        </button>
    );
}
