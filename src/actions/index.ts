import Item from "../models/Item";

export interface IItemAddAction {
  type: "ADD_ITEM";
  payload: Item | Error;
  error?: true;
}

export interface IItemDeleteAction {
  type: "DELETE_ITEM";
  payload: number | Error;
  error?: true;
}

export const addItem: (item: Item) => IItemAddAction = item => ({
  type: "ADD_ITEM",
  payload: item
});

export const delItem: (id: number) => IItemDeleteAction = id => ({
  type: "DELETE_ITEM",
  payload: id
});
