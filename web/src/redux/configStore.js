import { createStore } from 'redux';
import CategotReducer from './reducers/category';

const configStore = () => {
    const store = createStore(CategotReducer);
    return store;
}

export default configStore;