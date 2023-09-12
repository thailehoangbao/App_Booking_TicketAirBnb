import {FETCH_BINHLUAN_THEOPHONG_FAIL,FETCH_BINHLUAN_THEOPHONG_REQUEST,FETCH_BINHLUAN_THEOPHONG_SUCCESS,FETCH_BINHLUAN_FAIL,FETCH_BINHLUAN_REQUEST,FETCH_BINHLUAN_SUCCESS,MA_PHONG} from './_constantsBL';

const initialState = {
    loading: false,
    data: null,
    error: null,
    vitri: null,
    listBinhLuan: null,
    maPhong: null,
}

const binhLuanThueReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BINHLUAN_THEOPHONG_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };
        }

        case FETCH_BINHLUAN_THEOPHONG_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state };
        }

        case FETCH_BINHLUAN_THEOPHONG_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state };
        }

        //lấy list bình luận

        case FETCH_BINHLUAN_REQUEST: {
            state.loading = true;
            state.listBinhLuan = null;
            state.error = null;
            return { ...state };
        }

        case FETCH_BINHLUAN_SUCCESS: {
            state.loading = false;
            let listBinhLuanClone = [...action.payload];
            let newListBinhLuanClone = listBinhLuanClone.filter(item => item.maPhong == state.maPhong)
            state.listBinhLuan = newListBinhLuanClone;
            state.error = null;
            return { ...state };
        }

        case FETCH_BINHLUAN_FAIL: {
            state.loading = false;
            state.listBinhLuan = null;
            state.error = action.payload;
            return { ...state };
        }

        case MA_PHONG: {
            state.maPhong = action.payload;
            return { ...state };
        }

        default:
            return { ...state };
    }
}


export default binhLuanThueReducer;