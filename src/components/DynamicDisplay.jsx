import React from 'react';
import EditorialBrick from './EditorialBrick';
import UtilityBrick from './UtilityBrick';

const DynamicDisplay = ({ isMobile = false }) => {
  return (
    <div className={`w-full py-4 ${isMobile ? 'px-4' : ''}`} style={!isMobile ? { paddingLeft: '132px', paddingRight: '132px' } : {}}>
            <div
        className="grid grid-cols-12 gap-2"
        style={{
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '8px'
        }}
      >
                        {/* Editorial Brick */}
        <EditorialBrick isMobile={isMobile} />

                {/* Utility Brick */}
        <UtilityBrick isMobile={isMobile} />

        {/* Card 3 */}
        <div
          className="bg-[#FCFBFB] border border-[#CDCDCD] rounded-2xl p-4 flex items-center justify-center"
          style={{ gridColumn: isMobile ? 'span 12' : 'span 4' }}
        >
          <span className="text-gray-600 font-medium">Card 3</span>
        </div>
      </div>
    </div>
  );
};

export default DynamicDisplay;