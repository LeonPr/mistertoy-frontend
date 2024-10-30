

//* Toys
export const SET_TOYS = 'SET_TOYS'
export const REMOVE_TOY = 'REMOVE_TOY'
export const ADD_TOY = 'ADD_TOY'
export const UPDATE_TOY = 'UPDATE_TOY'
export const TOY_UNDO = 'TOY_UNDO'

const initialState = {
    toys: []
}

export function toyReducer(state = initialState, action = []) {
    switch (action.type) {
        case SET_TOYS:
            return { ...state, toys: state.toys }


        default:
            return state
    }
}