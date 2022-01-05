import axios from "axios";

export const fetchApi = async (url) => {
    return await axios.get(url).then(r => r.data)
}