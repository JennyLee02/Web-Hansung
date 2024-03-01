import { SET_CURRENT_PAGE, SET_PAGE_LIMIT } from "../actions/projectActions";

const initialState = {
    currentPage: 1,
    pageLimit: 24,
};

const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            };
        case SET_PAGE_LIMIT:
            return {
                ...state,
                pageLimit: action.payload,
            };
        default:
            return state;
    }
};

export default projectReducer;
