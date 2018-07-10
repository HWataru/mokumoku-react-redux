import { connect } from "react-redux";
import { addItem, delItem } from "../actions";
import { SimpleList } from "../components/simpleList";
import { IAppState } from "../components/App";

const stateToProps = (state: IAppState) => state.simpleList;

const simpleListContainer = connect(
  stateToProps,
  {
    addItem,
    delItem
  }
)(SimpleList);

export default simpleListContainer;
