import { ISimpleListProps } from '../components/simpleList'
import Item from '../models/Item';
import { IItemAction } from '../actions';

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