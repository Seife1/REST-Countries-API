import { useContext } from "react";
import { CountryContext } from "../../context";

export default function Pagination() {
  const { currentPage, handlePageChange, allDataList, countriesPerPage } = useContext(CountryContext);

  // Calculate total pages
  const totalPages = Math.ceil(allDataList.length / countriesPerPage);

  return (
    <div className="flex justify-center items-center gap-4 mt-3 mb-6 pb-5">
      {/* Previous Page Button */}
      <button
        onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 bg-white rounded-md hover:bg-gray-300 disabled:opacity-50"
      >
        &lt;
      </button>

      {/* Current Page */}
      <span className="px-4 py-2 bg-white rounded-md">{currentPage}</span>

      {/* Next Page Button */}
      <button
        onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : totalPages)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 bg-white rounded-md hover:bg-gray-300 disabled:opacity-50"
      >
        &gt;
      </button>
    </div>
  );
}
