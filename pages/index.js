import Head from "next/head";
import axios from "axios";
import { useState } from "react";
import logo from "./../assets/logo-long.png"
import Image from 'next/image';

export default function Home() {
  const [countryName, setCountryName] = useState(null);
  const [response, setResponse] = useState(null);

  const getSearchResults = async () => {
    try {
      const res = await axios.get("api/countries/", {
        params: { countryName },
      });
      console.log(res);
      const { data } = res;
      setResponse(data.data.countries.edges);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    
    <div className="flex flex-col relative font-roboto items-center min-h-screen ">
     
      {/* <div> */}

      <Image
        src={logo}
        width={710}
        height={156}
        alt="Logo"
        className="mt-10"
      />
          
      <div className="mt-3 sm:mx-auto justify-center sm:w-full sm:flex padder">
        <style jsx>{`
        .padder {
          padding-left: 2em !important;
          padding-right: 2em !important;
          text-align: center !important; 
        }
      `}</style>
        <h3 className="text-2xl mt-6 font-roboto">
          Query the GraphQL API by inputting a Country name below.
        </h3>
      </div>

      <div className="mt-12 sm:mx-auto justify-center sm:w-full sm:flex">
        <input
          type="text"
          className="block border border-transparent rounded-md px-5 py-3 text-base text-background shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-active"
          placeholder="Search for any country using full name or first few letters"
          onChange={(e) => setCountryName(e.target.value)}
        />

        <div className="mt-4 sm:mt-0 sm:ml-3">
          <button
            className="block w-full rounded-md px-5 py-3 bg-active text-base font-bold text-background focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
            onClick={() => getSearchResults()}
          >
            Search
          </button>
        </div>
      </div>

      {response && (
        
        <div className="sm:mx-auto justify-center sm:w-full sm:flex">
          
          
          <div className="mt-6 grid grid-cols-1 gap-8">
          
          {/* <h3 className="text-secondary text-2xl clearfix">Search Results</h3> */}

            {response.map((item) => (
              <div key={item.node.name} className="mt-6 pt-6 grid">
                <div className="bg-secondary rounded-lg px-4 pb-8">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center">
                      <span className=" rounded-md shadow-lg">
                        <img
                          src={item.node.flagImageUri}
                          width={140}
                          height={140}
                          alt="flag"
                        />
                      </span>
                    </div>
                    <div className="text-center justify-center items-center text-background">
                      <h3 className="mt-2 text-2xl text-center font-bold tracking-tight">
                        {item.node.name}
                      </h3>
                      <span className="ml-2 mt-2 mb-4 text-base font-bold block">
                        {item.node.capital}
                      </span>
                      Currency:
                      <span className="ml-2 font-bold text-base">
                        {item.node.currencyCodes[0]}
                        {console.log(item.node)}
                      </span>
                      
                      {/* Calling Code:
                      <span className="ml-2 font-bold text-base">
                        {item.node.callingCode}
                      </span>
                      Region:
                      <span className="ml-2 font-bold text-base">
                        {item.node.region}
                      </span> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* </div> */}
    </div>
  );
}
