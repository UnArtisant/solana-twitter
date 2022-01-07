import axios from "axios";

export const postApi = async (url, data) => {
    return await axios.post(url, data).then(r => r.data)
}