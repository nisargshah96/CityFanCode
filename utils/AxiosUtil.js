import { constants, hosts } from '../constants/Constants.js';
import axios from "axios";

export async function makeRequest(requestType, path, searchBy = null, searchVal = null) {
    let response;
    let data;
    let pathParam;
    try{
        switch(requestType){
            case constants.GET:
                if(searchBy && searchVal) {
                    response = await axios.get(`${hosts.JSONPlaceHolder}/${path}?${searchBy}=${searchVal}`);
                } else {
                    response = await axios.get(`${hosts.JSONPlaceHolder}/${path}`);
                }
                break;

            case constants.POST:
                data = {};
                response = await axios.post(`${hosts.JSONPlaceHolder}/${path}/${pathParam}`, data);
                break;

            case constants.UPDATE:
                data = {};
                response = await axios.post(`${hosts.JSONPlaceHolder}/${path}/${pathParam}`, data);
                break;

            case constants.DELETE:
                response = await axios.delete(`${hosts.JSONPlaceHolder}/${path}`);
                break;

            default:
                console.error("Unsupported RequestType passed: ", requestType); // Custom Logger can be implemented for reusability.
                break;
        }
            
    } catch(err) {
        console.error('Error making %s request: %s', requestType, err); // Custom Logger can be implemented for reusability.
    }
    return response;
}
