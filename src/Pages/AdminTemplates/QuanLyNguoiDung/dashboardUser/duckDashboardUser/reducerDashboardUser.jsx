import {FETCH_DANH_SACH_NGUOI_DUNG_FAIL,FETCH_DANH_SACH_NGUOI_DUNG_REQUEST,FETCH_DANH_SACH_NGUOI_DUNG_SUCCESS} from './_constantsUser';
import {FETCH_SEARCH_DANH_SACH_NGUOI_DUNG_FAIL,FETCH_SEARCH_DANH_SACH_NGUOI_DUNG_REQUEST,FETCH_SEARCH_DANH_SACH_NGUOI_DUNG_SUCCESS} from './../../searchUser/duckSearchUser/_constantsSearch';
const initialState = {
    loading: false,
    data: null,
    error: null,
}

const layDanhSachNguoiDungReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DANH_SACH_NGUOI_DUNG_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };
        }

        case FETCH_DANH_SACH_NGUOI_DUNG_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state };
        }

        case FETCH_DANH_SACH_NGUOI_DUNG_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state };
        }


        //Search

        case FETCH_SEARCH_DANH_SACH_NGUOI_DUNG_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };
        }

        case FETCH_SEARCH_DANH_SACH_NGUOI_DUNG_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state };
        }

        case FETCH_SEARCH_DANH_SACH_NGUOI_DUNG_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state };
        }

        default:
            return { ...state };
    }
}


export default layDanhSachNguoiDungReducer;