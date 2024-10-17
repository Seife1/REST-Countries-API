import { NavLink } from "react-router-dom";
import { CountryContext } from "../../context";
import { useContext } from "react";

export default function Navbar() {
  const { searchCountry, setSearchCountry, fetchCountry, fetchAllCountries } = useContext(CountryContext);

  // Function to handle search submission
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCountry(searchCountry); // Fetch the country based on the search input
    setSearchCountry(""); // Clear the search input after submission
  };

  return (
    <nav className="flex justify-between items-center py-3 w-full fixed top-0 left-0 bg-white shadow-md z-50 px-4 lg:px-8">
      <h2 className="text-2xl font-semibold">
        <NavLink
          onClick={fetchAllCountries}
          to={"/"}>REST Countries API
        </NavLink>
      </h2>

      {/* Search Form */}
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={searchCountry}
          onChange={(e) => setSearchCountry(e.target.value)}
          placeholder="Search for a country..."
          className="bg-white/75 p-3 px-8 outline-none lg:w-96 shadow-lg rounded-full shadow-red-100 focus:shadow-red-200"
        />
        {/* Search button inside the input */}
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-black"
        >
          🔍
        </button>
      </form>

      {/* Navigation Links */}
      <ul className="flex gap-5">
        <li>
          <NavLink
            onClick={fetchAllCountries}
            to="/"
            className="text-black hover:text-gray-700 duration-300">
            Home
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
