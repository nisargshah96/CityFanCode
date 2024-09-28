import { makeRequest } from "./utils/AxiosUtil.js";
import { constants, paths } from "./constants/Constants.js";

export async function getFanCodeCityUsers() {
    const response = await makeRequest(constants.GET, paths.Users);
    return response.data.filter(user=> (
        parseFloat(user.address.geo.lat) >= -40
        && parseFloat(user.address.geo.lat) <= 5
        && parseFloat(user.address.geo.lng) >= 5
        && parseFloat(user.address.geo.lng) <= 100)
    );
}