import  axios from "axios";

const ApiHolidays = axios.create({
    baseURL: 'https://date.nager.at/api/v3/publicholidays',
    responseType: 'json',
    withCredentials: false,
});


const getHolidays = async (country, year) => {
    try {
        const response = await ApiHolidays.get(`/${year}/${country}`);
        console.log(response, "ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss");
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        return false;
    }
}

export default getHolidays;