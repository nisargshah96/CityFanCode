import { makeRequest } from "./utils/AxiosUtil.js";
import { constants, paths } from "./constants/Constants.js";

export async function getTodos(searchBy, searchVal) {
    const response = await makeRequest(constants.GET, paths.Todos, searchBy, searchVal);
    return response.data;
}