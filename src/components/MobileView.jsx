import SearchResult from './SearchResult';
import SearchBar from './SearchBar';
import DynamicDisplay from './DynamicDisplay';

const MobileView = ({ data, isAnimating }) => {
  return (
    <div className={`bg-white overflow-hidden ${
      isAnimating ? 'animate-fade-content-mobile' : ''
    }`}>
      {/* Mobile Search Bar */}
      <SearchBar query={data.query} isMobile={true} />

      {/* Dynamic Display */}
      <DynamicDisplay isMobile={true} />

      {/* Mobile Search Results */}
      <div className="divide-y divide-gray-200 bg-white max-w-[608px]">
        {data.results.map((result) => (
          <SearchResult key={result.id} result={result} isMobile={true} />
        ))}
      </div>
    </div>
  );
};

export default MobileView;
