import { createStore } from "redux";
import reducer from "../reducer";

function configureStore() {
  const preloadedState = {
    simpleList: {
      items: [],
      name: "hoge"
    }
  };
  const store = createStore(reducer, preloadedState);
  return store;
}

export default configureStore;
