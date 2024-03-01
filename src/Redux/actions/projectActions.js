export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_PAGE_LIMIT = 'SET_PAGE_LIMIT';

// Action creators
export const setCurrentPage = (page) => ({
    type: SET_CURRENT_PAGE,
    payload: page,
});

export const setPageLimit = (limit) => ({
    type: SET_PAGE_LIMIT,
    payload: limit,
});