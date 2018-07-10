# Mokumoku event React-Redux

https://react-redux-mokumoku-bennkyoukai.connpass.com/event/90637/

```sh
npm install -g create-react-app

create-react-app mokumoku --scripts-version=react-scripts-ts
cd mokumoku/
npm start
```

if you got erorrs like, it may be coused by `selenium`

> Uncaught (in promise) {message: "Could not establish connection. Receiving end does not exist."} [browser-polyfill.js:610]

check <https://github.com/aurelia/cli/issues/894>

## install material-ui

```sh
yarn add @material-ui/core @material-ui/icons
```

## make list View

```js
//Simple List State doesn't use now...
//It's better to use SFC ?
interface IState {
    nothing?: string;
}
//Simple Props for List
interface ISimpleListProps {
    list: Item[]
    name: string
}
```

```js
class SimpleList extends React.Component<ISimpleListProps, IState> {
  public constructor(props: ISimpleListProps) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  public handleDelete(event: any){
    if(this.props.delItem){
      this.props.delItem(event);
    }
  }
  public render() {
    return (
      <div>
        <List component="nav">
          {this.props.items.map((item, index) => {
            return (
              <ListItem button={true} key={index}>
                <ListItemText primary={item.name} />
                <ListItemSecondaryAction>
                      <IconButton onClick={this.handleDelete.bind(this,item.id)} aria-label="Delete">
                        <DeleteIcon />
                      </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      </div>
    );
  }
}
```

## install Redux

```sh
yarn add react-redux
yarn add --dev @types/react-redux
```

## make Redux Store

Define new Action

```js

export interface IItemAction{
    type: 'ADD_ITEM' | 'EDIT_ITEM' | 'DELETE_ITEM',
    item?: Item,
    id?: number
}

export const addItem:(item: Item)=>IItemAction = item => ({
    type: 'ADD_ITEM',
    item
})

export const delItem:(id: number) => IItemAction = id => ({
    type: 'DELETE_ITEM',
    id
})

```

reducer recieve old state and action, then return new state.

```js

const simpleList = (state: ISimpleListProps = { items: [] , name: "" }, action: IItemAction) => {
    switch (action.type) {
        case 'ADD_ITEM':
            if(!action.item){
                return state;
            }
            {
                const newItemsAdded: Item[] = [...state.items, action.item];
                return { items: newItemsAdded, name: state.name };
            }
        case 'DELETE_ITEM':
            const id = action.id;
            if(action.id === undefined){
                return state;
            }
            const newItemsDeleted = state.items.filter((item) => (item.id !== id));
            return { items: newItemsDeleted, name: state.name};

        default:
            return state;
    }
}

export default simpleList;

//reducer will combined by combineReducers method.
const reducer = combineReducers({ simpleList });

```

Make store with defaut value (preloadedState).

```js

function configureStore(){
    const preloadedState = {
        simpleList:{
            items: [],
            name: "hoge"
        }
    }
    const store = createStore(reducer, preloadedState);
    return store;
}

```

Connect React-Component and Redux-Store

```js

const stateToProps = (state: IAppState) => state;

const appContainer = connect(
  stateToProps,
  {
    addItem,
    delItem
  }
)(App);

export default appContainer;

```

use Container with Redux-Store

```js
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./containers/appContainer";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);


```

## finish
