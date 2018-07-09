import { connect } from "react-redux";
import { App,IAppState } from "../components/App";
import { addItem, delItem } from "../actions";

const stateToProps = (state: IAppState) => state;

const appContainer = connect(
  stateToProps,
  {
    addItem,
    delItem
  }
)(App);

export default appContainer;
