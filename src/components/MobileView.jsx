import SearchResult from './SearchResult';
import SearchBar from './SearchBar';

const MobileView = ({ data }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      {/* Mobile Search Bar */}
      <SearchBar query={data.query} isMobile={true} />

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
