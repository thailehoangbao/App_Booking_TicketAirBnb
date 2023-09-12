import {FETCH_CHITIET_PHONGTHUE_FAIL,FETCH_CHITIET_PHONGTHUE_REQUEST,FETCH_CHITIET_PHONGTHUE_SUCCESS,FETCH_CHITIET_VITRI_FAIL,FETCH_CHITIET_VITRI_REQUEST,FETCH_CHITIET_VITRI_SUCCESS} from './_constantsDetail';

const initialState = {
    loading: false,
    data: null,
    error: null,
    vitri: null,
}

const chiTietPhongThueReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CHITIET_PHONGTHUE_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };
        }

        case FETCH_CHITIET_PHONGTHUE_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state };
        }

        case FETCH_CHITIET_PHONGTHUE_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state };
        }

        case FETCH_CHITIET_VITRI_REQUEST: {
            state.loading = true;
            state.vitri = null;
            state.error = null;
            return { ...state };
        }

        case FETCH_CHITIET_VITRI_SUCCESS: {
            state.loading = false;
            state.vitri = action.payload;
            state.error = null;
            return { ...state };
        }

        case FETCH_CHITIET_VITRI_FAIL: {
            state.loading = false;
            state.vitri = null;
            state.error = action.payload;
            return { ...state };
        }

        default:
            return { ...state };
    }
}


export default chiTietPhongThueReducer;