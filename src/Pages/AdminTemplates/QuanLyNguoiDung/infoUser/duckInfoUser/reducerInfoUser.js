import {FETCH_INFO_USER_FAIL,FETCH_INFO_USER_REQUEST,FETCH_INFO_USER_SUCCESS} from './_constantsInfoUser';

const initialState = {
    loading: false,
    data: null,
    error: null,
}

const layInfoUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_INFO_USER_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };
        }

        case FETCH_INFO_USER_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state };
        }

        case FETCH_INFO_USER_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state };
        }


        default:
            return { ...state };
    }
}


export default layInfoUserReducer;