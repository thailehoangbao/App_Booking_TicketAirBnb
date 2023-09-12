import {FETCH_VTRI_TIMKIEM_FAIL,FETCH_VTRI_TIMKIEM_REQUEST,FETCH_VTRI_TIMKIEM_SUCCESS} from './_constantsViTri';

const initialState = {
    loading: false,
    data: null,
    error: null,
}

const viTriTimKiemReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_VTRI_TIMKIEM_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };
        }

        case FETCH_VTRI_TIMKIEM_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state };
        }

        case FETCH_VTRI_TIMKIEM_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state };
        }

        default:
            return { ...state };
    }
}


export default viTriTimKiemReducer;