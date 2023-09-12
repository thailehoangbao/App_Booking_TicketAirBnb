import {FETCH_PHONGTHUE_THEO_MAVITRI_FAIL,FETCH_PHONGTHUE_THEO_MAVITRI_REQUEST,FETCH_PHONGTHUE_THEO_MAVITRI_SUCCESS} from './_constantsSearchPage';

const initialState = {
    loading: false,
    data: null,
    error: null,
    vitri: null,
}

const phongThueTheoMaViTriReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PHONGTHUE_THEO_MAVITRI_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };
        }

        case FETCH_PHONGTHUE_THEO_MAVITRI_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state };
        }

        case FETCH_PHONGTHUE_THEO_MAVITRI_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state };
        }

        default:
            return { ...state };
    }
}


export default phongThueTheoMaViTriReducer;