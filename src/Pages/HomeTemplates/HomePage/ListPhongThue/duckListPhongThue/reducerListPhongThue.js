import {FETCH_LISTPHONGTHUE_FAIL,FETCH_LISTPHONGTHUE_REQUEST,FETCH_LISTPHONGTHUE_SUCCESS} from './_constantsListPhongThue';

const initialState = {
    loading: false,
    data: null,
    error: null,
}

const listPhongThueReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LISTPHONGTHUE_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };
        }

        case FETCH_LISTPHONGTHUE_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state };
        }

        case FETCH_LISTPHONGTHUE_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state };
        }

        default:
            return { ...state };
    }
}


export default listPhongThueReducer;