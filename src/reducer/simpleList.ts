import { ISimpleListProps } from "../components/simpleList";
import Item from "../models/Item";
import { IItemAddAction, IItemDeleteAction } from "../actions";

const simpleList = (
  state: ISimpleListProps = { items: [], name: "" },
  action: IItemAddAction | IItemDeleteAction
) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!action.payload || !(action.payload instanceof Item)) {
        return state;
      }
      {
        const newItemsAdded: Item[] = [...state.items, action.payload];
        return { items: newItemsAdded, name: state.name };
      }
    case "DELETE_ITEM":
      const id = action.payload;
      if (id === undefined || typeof id !== "number") {
        return state;
      }
      const newItemsDeleted = state.items.filter(item => item.id !== id);
      return { items: newItemsDeleted, name: state.name };

    default:
      return state;
  }
};

export default simpleList;
