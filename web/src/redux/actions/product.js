import { APP_CONSTANTS } from "../../appconsts";

export const saveProduct = (data) => {
    return async (dispatch) => {
        try {
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(data),
            };
            const result = await (await fetch(`${APP_CONSTANTS.API.URL}${APP_CONSTANTS.API.ENDPOINTS.SAVE_PRODUCT}`, requestOptions)).json();
            // dispatch(getCategories(result));
            return result;
        } catch (error) {
            console.log(error);
            return [];
        }
    }
}