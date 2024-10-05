import { Link } from "react-router-dom";
import Pagination from "../pagination";

export default function Country({data}) {
    return (
        <div className="flex-1 flex-col min-w-64 overflow-hidden p-2 m-4 bg-white/75 shadow-xl  border-2 rounded-2xl border-white">
          <div className="h-40 flex justify-center overflow-hidden datas-center rounded-xl">
            <img src={data?.flags.png} alt="flag" className="block w-full" />
          </div>

          <div>
            <span className="text-sm text-cyan-700 font-medium">
              {data?.continents[0]}
            </span>
            <h3 className="font-bold text-2xl truncate text-black">
              {data?.name.common}
            </h3>
          </div>

          <div className="text-left">
            
            <h4 className="font-bold text-sm truncate text-black">
              Capital:  <span className="font-medium">{data?.capital  ? data?.capital : "None"}</span>
            </h4>
            <h4 className="font-bold text-sm truncate text-black">
              Population:  <span className="font-medium">{data?.population}</span>
            </h4>
            <h4 className="font-bold text-sm truncate text-black">
                Languages:  <span className="font-medium">{data?.languages ? Object.values(data.languages).join(", ") : "None"}</span>
            </h4>
          </div>

          <div>
            <Link
              to={`/country/${data?.name.common}`}
              className="text-sm my-3 p-2 px-4 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-cyan-800 text-white"
            >
              Country Details
            </Link>
          </div>

        </div>
      );
    }