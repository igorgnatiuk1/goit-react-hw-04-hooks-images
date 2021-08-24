
import axios from "axios";


axios.defaults.baseURL = "https://pixabay.com/api/";
const KEY = "21950649-7cbe36f37fba3febe32b90827";

const fetchHits = ({ searchQuery = "", currentPage = 1, pageSize = 12 }) => {
    return axios
        .get(
            `/?key=${KEY}&q=${searchQuery}&page=${currentPage}&image_type=photo&orientation=horizontal&per_page=${pageSize}`
        )
        .then((response) => response.data.hits);
};


export { fetchHits };