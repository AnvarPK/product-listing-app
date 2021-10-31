import { createStore, applyMiddleware, combineReducers } from 'redux';
import CategotReducer from './reducers/category';
import thunk from 'redux-thunk';


const configStore = () => {
    const store = createStore(
        combineReducers({
            category: CategotReducer
        }),
        applyMiddleware(thunk)
    );

    return store;
}

export default configStore;