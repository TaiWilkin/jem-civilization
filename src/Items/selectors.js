import {createSelector} from 'reselect';
import { NAME } from './constants';

const getItems = (state) => state.instructionalDesign[NAME].items;
const getItemList = (state) => state.instructionalDesign[NAME].itemList;

export const getItemsArray = createSelector(
  [getItems, getItemList],
  (items, itemList) => itemList.map(id => ({ id, ...items[id] }))
);
