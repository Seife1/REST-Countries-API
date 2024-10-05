import { createContext, useState, useEffect } from "react";

export const CountryContext = createContext(null);

export function CountryProvider({ children }) {
  const [searchCountry, setSearchCountry] = useState("");
  const [loading, setLoading] = useState(false);
  const [countryList, setCountryList] = useState([]);
  const [allDataList, setAllDataList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 12;

  useEffect(() => {
    fetchAllCountries();
  }, []);

  // Fetch all countries for the default display (on page load)
  async function fetchAllCountries() {
    try {
      setLoading(true);
      const res = await fetch('https://restcountries.com/v3.1/all');
      const allData = await res.json();
      setAllDataList(allData);
      setCountryList(allData.slice(0, countriesPerPage)); // Show first page
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  // Fetch countries based on search input
  async function fetchCountry(countryName) {
    if (!countryName) return; // Prevent fetching if no country name is provided

    try {
      setLoading(true);
      const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
      const data = await response.json();

      if (data) {
        setCountryList(data);
      }

      setLoading(false);
      setCurrentPage(1); // Reset pagination to the first page on new search
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  // Pagination: Get countries for the current page
  const paginateCountries = () => {
    const startIndex = (currentPage - 1) * countriesPerPage;
    const paginatedList = allDataList.slice(startIndex, startIndex + countriesPerPage);
    setCountryList(paginatedList);
  };

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    paginateCountries(); // Update displayed countries for the new page
  };

  return (
    <CountryContext.Provider
      value={{
        searchCountry,
        setSearchCountry,
        fetchCountry,
        allDataList,
        loading,
        countryList,
        currentPage,
        handlePageChange,
        countriesPerPage,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
}
