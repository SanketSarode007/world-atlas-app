import { useEffect, useTransition, useState } from "react"
import {getCountryData} from "../api/postApi";
import { Loader } from "../Components/UI/Loader";
import { CountryCard } from "../Components/Layout/CountryCard";
import { SearchFilter } from "../Components/UI/SearchFilter";

export const Country = () => {

    const [isPending, startTransition] = useTransition();
    const [country, setCountry] = useState([]);

    const [search, setSearch] = useState();
    const [filter, setFilter] = useState("all");

    const searchCountry = (country) => {
        if(search){
            return country.name.common.toLowerCase().includes(search.toLowerCase());
        }

        return country;
    }

    const filterRegion = (country) => {
        if(filter === 'all') return country;
        return country.region === filter;
    }

    //* here is the main logic
    const filterCountry = country.filter(
        (country) => searchCountry(country) && filterRegion(country) 
    )

    useEffect(() => {
        startTransition( async () => {
            const res = await getCountryData();
            setCountry(res.data);
        })
    } , [])

    if(isPending) return <Loader/>

    return(
        <>
          <section className="section-country">
          <SearchFilter
                 search={search}
                 setSearch={setSearch}
                 filter={filter}
                 setFilter={setFilter}
                 country={country}
                 setCountry={setCountry}
                />
            <ul className="country-details-card grid grid-four-cols">
                {
                    filterCountry.map((curCountry, index) => {
                        return <CountryCard  country={curCountry} key={index}/>
                    })
                }
            </ul>
          </section>
        </>
    )
}