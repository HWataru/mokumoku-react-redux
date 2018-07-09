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
//Simple List State doesn't use now.
interface IState {
    nothing?: string;
}
//Simple Props for List
interface ISimpleListProps {
    list: Item[]
    name: string
}
```

## install Redux

```sh
yarn add react-redux
```

## make Redux Store


## finish
