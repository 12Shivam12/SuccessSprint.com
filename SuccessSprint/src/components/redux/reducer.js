import {
    ADD_TODO,
    DARK_MODE,
    DROP_IN_PROGRESS,
    ADD_IN_PROGRESS,
    DROP_IN_DONE,
    DELETE_TODO_FROM_PROGRESS,
    DELETE_TODO_FROM_TODO,
    DELETE_TODO_FROM_DONE, // Add this line
} from "./actionTypes";

const initialState = {
    todo: [],
    darkMode: "",
    inProgress: [],
    done: [],
};

const myReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_TODO:
            return {
                ...state,
                todo: [...payload],
            };

        case DELETE_TODO_FROM_TODO:
            // console.log(pay)
            return {
                ...state,
                todo: state.todo.filter((ele, index) => index !== payload),
            };

        case DELETE_TODO_FROM_PROGRESS:
            // console.log(pay)
            return {
                ...state,
                inProgress: state.inProgress.filter((ele, index) => index !== payload),
            };

        case DELETE_TODO_FROM_DONE:
            // console.log(pay)
            return {
                ...state,
                done: state.done.filter((ele, index) => index !== payload),
            };

        case DARK_MODE:
            return {
                ...state,
                darkMode: payload,
            };

        case DROP_IN_PROGRESS:
            return {
                ...state,
                inProgress: [...state.inProgress, payload.task],
            };

        case DROP_IN_DONE:
            return {
                ...state,
                done: [...state.done, payload.task],
            };

        case ADD_IN_PROGRESS: // Add this case
            return {
                ...state,
                inProgress: [...state.inProgress, payload],
            };

        default:
            return state;
    }
};

export default myReducer;
