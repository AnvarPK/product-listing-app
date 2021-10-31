import { APP_CONSTANTS } from "../../appconsts";
import { GET_CATEGORIES, requestPostOptions } from "../consts";

export const getCategories = (data) => ({
    type: GET_CATEGORIES,
    payload: data
});

export const fetchCategories = () => {
    return async (dispatch) => {
        try {
            const result = await (await fetch(`${APP_CONSTANTS.API.URL}${APP_CONSTANTS.API.ENDPOINTS.CATEGORIES}`)).json();
            dispatch(getCategories(result));
            return result;
        } catch (error) {
            console.log(error);
            return [];
        }
    }
}

export const saveCategory = (data) => {
    return async (dispatch) => {
        try {
            const requestOptions = {
                ...requestPostOptions,
                body: JSON.stringify(data),
            };
            const result = await (await fetch(`${APP_CONSTANTS.API.URL}${APP_CONSTANTS.API.ENDPOINTS.SAVE_CATEGORY}`, requestOptions)).json();
            return result;
        } catch (error) {
            console.log(error);
            return [];
        }
    }
}