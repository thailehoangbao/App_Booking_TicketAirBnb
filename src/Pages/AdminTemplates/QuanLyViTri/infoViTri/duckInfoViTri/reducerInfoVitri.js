import {FETCH_INFO_VITRI_FAIL,FETCH_INFO_VITRI_REQUEST,FETCH_INFO_VITRI_SUCCESS} from './_constantsInfoViTri';

const initialState = {
    loading: false,
    data: null,
    error: null,
}

const layInfoViTriReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_INFO_VITRI_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };
        }

        case FETCH_INFO_VITRI_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state };
        }

        case FETCH_INFO_VITRI_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state };
        }


        default:
            return { ...state };
    }
}


export default layInfoViTriReducer;