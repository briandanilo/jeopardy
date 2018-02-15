import {SET_CATEGORIES, PICK_CATEGORY} from '../actions';
import {combineReducers} from 'redux'

export function categories(state = [], action){
    switch(action.type){
        case SET_CATEGORIES:
            return action.categories
        default:
            return state
    }
}

export function category(state = {}, action){
    switch(action.type){
        case PICK_CATEGORY:
            return action.category
        default:
            return state
    }
}

const rootReducer = combineReducers({
    categories,
    category
})

export default rootReducer