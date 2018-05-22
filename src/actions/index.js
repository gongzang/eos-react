import { SET_MENU } from '../constants/actionTypes';
  
export function setMenu(menu) {
    return {
        type: SET_MENU,
        menu
      };
}