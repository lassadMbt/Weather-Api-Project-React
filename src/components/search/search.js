import {AsyncPaginate} from "react-select-async-paginate";
import {useState} from "react";
import {Geo_API_URL, geoApiOptions} from './api'
const Search = ({onSearcheChange}) => {

    const [search, setSearch] = useState(null)
    const handleOnChange = (searchData) => {
      setSearch(searchData);
        onSearcheChange(searchData);
    }
    const loadOptions = async (inputValue) => {


        try {
            const response = await fetch(`${Geo_API_URL}/cities?namePrefix=${inputValue}`, geoApiOptions);
            const result = await response.json();

            return{
                options: result.data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode} `,
                    };
                })
            }

        } catch (error) {
            console.error(error);
            return { options: [] };
        }

    }

    return(
        <AsyncPaginate
            placeholder="search for city"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    );
}


export default Search;