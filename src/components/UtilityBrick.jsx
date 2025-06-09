import React, { useState } from 'react';

const UtilityBrick = ({ isMobile = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`bg-[#FCFBFB] border border-[#CDCDCD] rounded-2xl p-4 flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out ${
        isExpanded ? 'h-full' : 'h-[72px]'
      }`}
      style={{ gridColumn: isMobile ? 'span 12' : 'span 4' }}
      onClick={handleClick}
    >
      <span className="text-gray-600 font-medium">
        Card 2 {isExpanded ? '(Expanded)' : '(Click to expand)'}
      </span>
    </div>
  );
};

export default UtilityBrick;