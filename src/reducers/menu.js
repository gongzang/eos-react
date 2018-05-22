import { SET_MENU, SET_OPEN_ITEM, SET_ACTIVE_ITEM } from '../constants/actionTypes';


const initialState = [];

export default function menu(state = initialState, action) {
    switch (action.type) {
        case SET_MENU:
            return { ...state, menuList: action.menu };
            break;
        case SET_OPEN_ITEM:
            return { ...state, openItem: action.openItem };
            break;
        case SET_ACTIVE_ITEM:
            return { ...state, activeItem: action.activeItem };
            break;
        default:
            return state;
    }
}