import { APP_CONSTANTS } from "../../appconsts";
import { GET_CATEGORIES } from "../consts";

export const getCategories = (data) => ({
    type: GET_CATEGORIES,
    payload: data
});

export const fetchCategories = () => {
    return async (dispatch) => {
        try {
            const result = await fetch(`${APP_CONSTANTS.API.URL}${APP_CONSTANTS.API.ENDPOINTS.CATEGORIES}`);
            console.log(result);
        } catch (error) {
            console.log(error);
            return [];
        }
    }
}