import { ADDRESS_SUGG_URL } from "../constants/constants";

const useSearchLocation = async(searchQuery, setSearchData) => {
    try {
        if (searchQuery!== "" && searchQuery?.length > 2) {
            fetch(`${ADDRESS_SUGG_URL}${searchQuery}`)
                .then((data) => data.json())
                .then((data)=> {
                    setSearchData(data?.data);
                })
        }
        else if (searchQuery === "") {
            setSearchData([]);
        }
    } catch (error) {
        console.log('error-from-useSearchLocation',error);
    }
}

export default useSearchLocation;