import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CountryContext } from "../../context";

export default function Details() {
    const { id } = useParams(); // Country name from URL
    console.log(id);
    const { countryList, loading } = useContext(CountryContext); // Access the global country data context
    const [countryDetails, setCountryDetails] = useState(null); // Local state to store specific country details
    const [error, setError] = useState(null);
    console.log(countryList);

    // Attempt to find the country in the local context (countryList) first
    useEffect(() => {
        const country = countryList?.find(
            (country) => country.name.common.toLowerCase() === id.toLowerCase()
        );

        if (country) {
            setCountryDetails(country);
        } else {
            // If the country is not found locally, fetch it from the API
            fetchCountryDetails();
        }
    }, [id, countryList]);

    // Function to fetch country details if not found in local context
    async function fetchCountryDetails() {
        try {
            const response = await fetch(`https://restcountries.com/v3.1/name/${id}`);
            if (!response.ok) {
                throw new Error("Country not found");
            }
            const data = await response.json();
            setCountryDetails(data[0]); // Assuming the first result is the most relevant
        } catch (error) {
            console.error(error);
            setError(error.message);
        }
    }

    if (loading) {
        return (
            <div className="text-center py-8">
                <div className="text-lg">Loading...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-8">
                <div className="text-lg text-red-600">Error: {error}</div>
            </div>
        );
    }

    if (!countryDetails) {
        return (
            <div className="text-center py-8">
                <div className="text-lg">Country not found.</div>
            </div>
        );
    }

    console.log(countryDetails?.maps?.openStreetMaps);

    return (
        <div className="flex items-center justify-center h-full bg-white">
            <div className="container mx-auto pt-39 py-10 grid grid-cols-1 lg:grid-cols-3 gap-28 ">

                <div className="lg:col-span-1  bg-white">
                    <div className="h-fit w-fit py-3 overflow-hidden rounded-xl group bg-white shadow-md">
                        <div className="w-96 h-48 flex justify-center items-center overflow-hidden rounded-md">
                            <img
                                src={countryDetails?.flags?.png}
                                alt={`${countryDetails?.name?.common} flag`}
                                className="shadow-xl rounded-xl object-cover group-hover:scale-105 duration-300"
                            />
                        </div>

                        <div className="p-4">
                            <a
                                href={countryDetails?.maps?.openStreetMaps}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block mt-4 text-blue-600 underline"
                            >
                                View on OpenStreetMap
                            </a>
                        </div>
                    </div>
                </div>


                <div className="lg:col-span-2 bg-white">
                    <span className="text-cyan-700 font-medium">
                        {countryDetails?.continents[0]}
                    </span>
                    <h3 className="font-bold text-2xl truncate text-black">
                        {countryDetails?.name?.common}
                        <span className="text-sm">
                        {countryDetails?.name?.nativeName
                            ? ` (${Object.values(countryDetails.name.nativeName)[0]?.official})`
                            : ""}
                        </span>
                        
                    </h3>
                    <div className="text-left m-8">
                        <h4 className="font-bold text-sm truncate text-black">
                            Languages: <span className="font-medium">
                                {countryDetails?.languages
                                    ? Object.values(countryDetails.languages).join(", ")
                                    : "None"}
                            </span>
                        </h4>

                        <h4 className="font-bold text-sm truncate text-black">
                            Capital: <span className="font-medium">
                                {countryDetails?.capital ? countryDetails.capital : "None"}
                            </span>
                        </h4>

                        <h4 className="font-bold text-sm truncate text-black">
                            Population: <span className="font-medium">
                                {countryDetails?.population}
                            </span>
                        </h4>

                        <h4 className="font-bold text-sm truncate text-black">
                            Area: <span className="font-medium">
                                {countryDetails?.area} km²
                            </span>
                        </h4>

                        <h4 className="font-bold text-sm truncate text-black">
                            Timezones: <span className="font-medium">
                                {countryDetails?.timezones ? countryDetails.timezones.join(", ") : "None"}
                            </span>
                        </h4>

                        <h4 className="font-bold text-sm truncate text-black">
                            Calling Codes: <span className="font-medium">
                                {countryDetails?.idd?.root && countryDetails?.idd?.suffixes
                                    ? `${countryDetails.idd.root}${countryDetails.idd.suffixes[0]}`
                                    : "None"}
                            </span>
                        </h4>

                        <h4 className="font-bold text-sm truncate text-black">
                            Currencies: <span className="font-medium">
                                {countryDetails?.currencies
                                    ? Object.values(countryDetails.currencies)
                                        .map((currency) => currency.name)
                                        .join(", ")
                                    : "None"}
                            </span>
                        </h4>
                    </div>

                </div>
            </div>
        </div>
    );
}
