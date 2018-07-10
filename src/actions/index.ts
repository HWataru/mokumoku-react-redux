import Item from '../models/Item';

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
