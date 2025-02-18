import React, { useState } from 'react';

interface TooltipProps {
    text: string;
    children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
    const [visible, setVisible] = useState(false);

    const showTooltip = () => setVisible(true);
    const hideTooltip = () => setVisible(false);

    return (
        <div className="relative inline-block" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
            {children}
            {visible && (
                <div className="absolute bottom-full mb-2 w-max bg-gray-700 text-white text-sm rounded py-1 px-2">
                    {text}
                </div>
            )}
        </div>
    );
};

export default Tooltip;