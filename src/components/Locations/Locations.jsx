import { useState, useEffect } from "react";
import Map from "./Map.jsx";
import Navbar from "../Layout/Navbar.jsx";
import axios from "axios";

const Locations = () => {
  const [data, setData] = useState(null);
  const [currentBorough, setBorough] = useState("All Borough");
  const borough = [
    "All Borough",
    "Bronx",
    "Brooklyn",
    "Manhattan",
    "Queens",
    "Staten Island",
  ];

  const fetchData = (url) => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // fetch datas
  useEffect(() => {
    fetchData("https://data.cityofnewyork.us/resource/if26-z6xq.json");
  }, []);

  const handleChange = (event) => {
    const selectedBorough = event.target.value;
    setBorough(selectedBorough);
    let url;
    if (selectedBorough != "All Borough") {
      url = `https://data.cityofnewyork.us/resource/if26-z6xq.json?borough=${selectedBorough}`;
    } else {
      url = "https://data.cityofnewyork.us/resource/if26-z6xq.json";
    }
    fetchData(url);
  };

  return (
    <>
      <div className="fixed z-50 bg-white w-full px-10 py-5">
        <Navbar />
        <div class="group inline-block relative py-4">
          <div class="flex items-center ">
            <span className="text-[#DA4C31] text-5xl font-semibold font-inter pr-5">
              {currentBorough}
            </span>

            <div class="w-12 h-12 rounded-full bg-[#DA4C31] flex items-center justify-center">
              <span className="font-semibold text-l text-white">
                {data && data.length}
              </span>
            </div>
            <div class="w-100 tooltip absolute bg-gray-200 text-gray-800 py-1 px-2 rounded text-sm -mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Number of Locations
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="borough"
            className="mr-2 text-[#DA4C31] text-2xl font-semibold inline-block"
          >
            Select Borough:
          </label>
          <select
            id="borough"
            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          >
            {borough.map((item, index) => (
              <option key={index} value={item} className="text-gray-800">
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Map data={data} />
    </>
  );
};

export default Locations;
