import {FETCH_USER_LIST_PHONGDADAT_FAIL,FETCH_USER_LIST_PHONGDADAT_REQUEST,FETCH_USER_LIST_PHONGDADAT_SUCCESS} from './_constantsUserDatPhong';

const initialState = {
    loading: false,
    data: null,
    error: null,
}

const listPhongDaDatUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_LIST_PHONGDADAT_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };
        }

        case FETCH_USER_LIST_PHONGDADAT_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state };
        }

        case FETCH_USER_LIST_PHONGDADAT_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state };
        }

        default:
            return { ...state };
    }
}


export default listPhongDaDatUserReducer;