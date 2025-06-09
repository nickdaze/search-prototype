import React from 'react';

const EditorialBrick = ({ isMobile = false }) => {
  return (
    <div
      className="bg-black rounded-2xl p-4 flex items-center justify-center aspect-square"
      style={{ gridColumn: isMobile ? 'span 12' : 'span 4' }}
    >
      <span className="text-white font-medium">Card 1</span>
    </div>
  );
};

export default EditorialBrick;