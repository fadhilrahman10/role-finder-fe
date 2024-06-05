import axios from "axios";

const API_URL = 'https://staging.ina17.com/data.json';

export const fetchData = async () => {
    try {
        const response = await axios.get(API_URL);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error("Error fetching data", error);
        return [];
    }
};
