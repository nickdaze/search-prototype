const SearchResult = ({ result, isMobile }) => {
  return (
    <div className={`
      ${isMobile
        ? 'p-4 border-b border-gray-200'
        : 'p-4 hover:bg-gray-50 transition-colors'
      }
    `}>
      <a href={`https://${result.url}`} className="block group">
        <div className={`${isMobile ? 'space-y-1' : 'space-y-1'}`}>
          {/* URL */}
          <div className={`text-[13px] text-[#5a5a5a] line-clamp-1`}>
            {result.url}
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
