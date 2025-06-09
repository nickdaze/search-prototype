import React, { useState } from 'react';

const SearchResult = ({ result, isMobile }) => {
  const [faviconError, setFaviconError] = useState(false);

  return (
    <div className={`
      ${isMobile
        ? 'p-4 border-b border-gray-200'
        : 'p-4 hover:bg-gray-50 transition-colors'
      }
    `}>
      <a href={`https://${result.url}`} className="block group">
        <div className={`${isMobile ? 'space-y-1' : 'space-y-1'}`}>
          {/* URL with Favicon */}
          <div className={`text-[13px] text-[#5a5a5a] line-clamp-1 flex items-center gap-2`}>
            {result.thumbnail && !faviconError ? (
              <img
                src={result.thumbnail}
                alt={`${result.title} favicon`}
                className="w-6 h-6 flex-shrink-0 border border-gray-300 rounded-full"
                onError={() => setFaviconError(true)}
              />
            ) : (
              <svg
                className="w-4 h-4 flex-shrink-0 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            )}
            <span className="truncate">{result.url}</span>
          </div>

          {/* Title */}
          <h3 className={`text-[20px] text-[#2015c2] group-hover:underline font-medium`}>
            {result.title}
          </h3>

          {/* Description */}
          <p className={`
            ${isMobile ? 'text-[13px]' : 'text-[15px]'}
            text-[#5a5a5a] leading-relaxed tracking-[-0.2px] line-clamp-2
          `}>
            {result.description}
          </p>
        </div>
      </a>
    </div>
  );
};

export default SearchResult;
