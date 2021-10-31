import { APP_CONSTANTS } from "../../appconsts";
import { requestPostOptions} from '../consts';

export const saveProduct = (data) => {
    return async (dispatch) => {
        try {
            const requestOptions = {
                ...requestPostOptions,
                body: JSON.stringify(data),
            };
            const result = await (await fetch(`${APP_CONSTANTS.API.URL}${APP_CONSTANTS.API.ENDPOINTS.SAVE_PRODUCT}`, requestOptions)).json();
            return result;
        } catch (error) {
            console.log(error);
            return [];
        }
    }
}

export const fetchProducts = () => {
    return async (dispatch) => {
        try {
            const result = await (await fetch(`${APP_CONSTANTS.API.URL}${APP_CONSTANTS.API.ENDPOINTS.PRODUCTS}`)).json();
            // dispatch(getCategories(result));
            return result;
        } catch (error) {
            console.log(error);
            return [];
        }
    }
}