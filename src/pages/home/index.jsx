import { useContext } from "react";
import { CountryContext } from "../../context";
import Country from "../../components/country";
import Pagination from "../../components/pagination";

export default function Home() {

  const { countryList, allDataList, loading } = useContext(CountryContext);

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <div className="pt-8 flex flex-wrap justify-between">
        {countryList && countryList.length > 0 ? (
          countryList.map((data) => <Country key={data.cca3} data={data} />)
        ) : (
          <div>
            {allDataList && allDataList.length > 0 ? (
              allDataList.map((data) => <Country key={data.cca3} data={data} />)
            ) : (
              <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
                Nothing to show. Please search something
              </p>
            )}
          </div>

        )}
      </div>
      <Pagination />
    </>

  );
}