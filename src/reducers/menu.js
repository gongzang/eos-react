import { SET_MENU } from '../constants/actionTypes';
import {Map, List} from 'immutable';
  
  
const initialState = [];

export default function menu(state = initialState, action) {
    switch(action.type) {
        case SET_MENU:
            return action.menu;
        default:
            return state;
    }
}