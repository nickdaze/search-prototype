import SearchResult from './SearchResult';
import SearchBar from './SearchBar';
import DynamicDisplay from './DynamicDisplay';

const DesktopView = ({ data, isAnimating }) => {
  return (
    <div className={`bg-white overflow-hidden ${
      isAnimating ? 'animate-fade-content-desktop' : ''
    }`}>
      {/* Search Bar */}
      <SearchBar query={data.query} isMobile={false} />

      {/* Dynamic Display */}
      <DynamicDisplay isMobile={false} />

      {/* Search Results */}
      <div className="divide-y divide-gray-100 ml-[132px] max-w-[608px]">
        {data.results.map((result) => (
          <SearchResult key={result.id} result={result} isMobile={false} />
        ))}
      </div>
    </div>
  );
};

export default DesktopView;
