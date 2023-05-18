const Country = ({country, visitedCountries, setVisitedCountries}) => {

    // capital city, the local currency, its (continental) region and a link to the relevant Google Maps page.

    // const currencySymbol = Object.keys(country.currencies)[0];

// input type= checkbox onClick and when when they click it would fire something that



    return (
        <>
            <h3>{country.name.common}:
            <input type = "checkbox" />
            </h3>
            
            <p>Capital City: {country.capital} </p>
            <p> Continent: {country.region}</p>
            {/* <p>{country.currencies[currencySymbol].name}</p> */}
            <p>Flag: {country.flag}</p>
        </>
    )
}

export default Country;