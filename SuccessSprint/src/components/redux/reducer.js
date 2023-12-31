import { ADD_TODO, DARK_MODE, DELETE_TODO, } from "./actionTypes";

const initialState = {
    todo: [],
    darkMode:""
}

const myReducer = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {
        case ADD_TODO:
            return {
                ...state,
                todo: [...payload]
            }

        case DELETE_TODO:
            return {
                ...state,
                todo: state.todo.filter((ele, index) => index !== payload),
            };

        case DARK_MODE:
            return{
                ...state,
                darkMode:payload
            }
        default:
            return state
    }
}

export default myReducer