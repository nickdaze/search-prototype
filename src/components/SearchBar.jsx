const SearchBar = ({ query, isMobile }) => {
  return (
    <div className={`${isMobile ? 'p-4' : 'py-6 pl-[132px]'} border-b border-gray-200`}>
      <div className="relative font-medium text-sm bg-white max-w-[608px]">
        <input
          type="text"
          value={query}
          readOnly
          className={`
            w-full border text-black border-gray-300 rounded-full focus:outline-none focus:border-blue-500
            ${isMobile
              ? 'px-4 py-2.5 pr-10'
              : 'px-4 py-3 pr-12'
            }
          `}
        />
        <button className={`
          absolute right-1 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-gray-700
        `}>
          <svg
            className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;