import { useEffect, useState } from "react";
import Country from "../components/Country";

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedContries, setVisitedCountries] = useState([]);

    const fetchREST = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all")
        const jsonData = await response.json();
        
        setCountries(jsonData);
    
    }
    
    useEffect(() => {
        fetchREST();
    }, [])


    const countryComponents = countries.map((country, index) => {
        return <Country country={country} key={index} />
    })

    return(
        <>
            {countryComponents}
        </>
    );
}


export default Countries;