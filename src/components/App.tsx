import * as React from "react";
import "./App.css";
import { SimpleList, ISimpleListProps, ItemForm } from "./simpleList";
import logo from "./logo.svg";
import Item from "../models/Item";

interface IAppState {
  simpleList: ISimpleListProps;
}
interface IAppProps {
  simpleList: ISimpleListProps;
  addItem: (item: Item) => any;
  delItem: (id: number) => any;
}

class App extends React.Component<IAppProps, IAppState> {
  public constructor(props: IAppProps) {
    super(props);
    this.state = {
      simpleList: props.simpleList
    };
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }
  public handleAddItem(item: Item) {
    this.props.addItem(item);
  }
  public handleDeleteItem(id: number) {
    this.props.delItem(id);
  }
  public render() {
    const { items, name } = this.props.simpleList;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ItemForm addItem={this.handleAddItem} />
        <SimpleList items={items} name={name} delItem={this.handleDeleteItem} />
      </div>
    );
  }
}

export { App, IAppState, IAppProps };
