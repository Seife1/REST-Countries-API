import { createContext, useState, useEffect } from "react";

export const CountryContext = createContext(null);

export function CountryProvider({ children }) {
  const [searchCountry, setSearchCountry] = useState("");
  const [loading, setLoading] = useState(false);
  const [countryList, setCountryList] = useState([]);
  const [allDataList, setAllDataList] = useState([]);
  const [filteredDataList, setFilteredDataList] = useState([]); // New state for filtered results
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
      setFilteredDataList(allData); // Initialize filtered list
      setCountryList(allData.slice(0, countriesPerPage)); // Show first page
      setLoading(false);
      setSearchCountry(""); // Clear search input
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  // Fetch countries based on search input
  async function fetchCountry(countryName) {
    if (!countryName) {
      setFilteredDataList(allDataList); // Reset filtered list when search is empty
      setCountryList(allDataList.slice(0, countriesPerPage)); // Reset to first page of all data
      setCurrentPage(1);
      setSearchCountry(""); // Clear search input
      return; 
    }

    try {
      setLoading(true);
      const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
      const data = await response.json();

      if (data) {
        setFilteredDataList(data); // Update filtered list with search results
        setCountryList(data.slice(0, countriesPerPage)); // Show first page of search results
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
    const paginatedList = filteredDataList.slice(startIndex, startIndex + countriesPerPage);
    setCountryList(paginatedList);
  };

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    paginateCountries(); // Update displayed countries for the new page
  };

  useEffect(() => {
    paginateCountries(); // Re-run pagination whenever currentPage or filteredDataList changes
  }, [currentPage, filteredDataList]);

  return (
    <CountryContext.Provider
      value={{
        searchCountry,
        setSearchCountry,
        fetchCountry,
        fetchAllCountries,
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
