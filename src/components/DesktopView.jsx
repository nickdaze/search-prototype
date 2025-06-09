import SearchResult from './SearchResult';
import SearchBar from './SearchBar';

const DesktopView = ({ data }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      {/* Search Bar */}
      <SearchBar query={data.query} isMobile={false} />

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
