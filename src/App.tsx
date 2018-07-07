import * as React from 'react';
import './App.css';
import { SimpleList, ISimpleListProps } from './components/SimpleList';
import Item from './data/Item'

import logo from './logo.svg';

interface IAppState {
  listState: ISimpleListProps
}

class App extends React.Component<any, IAppState> {
  public constructor(){
    super({})

    const itemList = [new Item("hoge", 1)];
    this.state = {
      listState: {
        list: itemList,
        name: "hoge"
      }
    }
  }
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <SimpleList list={this.state.listState.list} name={this.state.listState.name}/>
      </div>
    );
  }
}

export default App;
