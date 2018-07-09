import { createStore } from 'redux';
import reducer from '../reducer'

function configureStore(){
    const preloadedState = {
        simpleList:{
            items: [],
            name: "hoge"
        }
    }
    const store = createStore(reducer, preloadedState);
    console.log("store.getState()", store.getState())
    return store;
}

export default configureStore;