import { SET_MENU,SET_OPEN_ITEM,SET_ACTIVE_ITEM } from '../constants/actionTypes';
  
export function setMenu(menu) {
    return {
        type: SET_MENU,
        menu
      };
}
export function setActiveItem(activeItem) {
    return {
        type: SET_ACTIVE_ITEM,
        activeItem
      };
}
export function setOpenItem(openItem) {
    return {
        type: SET_OPEN_ITEM,
        openItem
      };
}