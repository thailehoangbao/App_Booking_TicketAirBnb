import { SEARCH_BOOK_ROOM_DASHBOARD, FETCH_DANH_SACH_BOOK_ROOM_FAIL, FETCH_DANH_SACH_BOOK_ROOM_REQUEST, FETCH_DANH_SACH_BOOK_ROOM_SUCCESS } from './_constantsBookRoom';

const initialState = {
    loading: false,
    data: null,
    error: null,
    searchData: null,
}

const layDanhSachBookRoomReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DANH_SACH_BOOK_ROOM_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };
        }

        case FETCH_DANH_SACH_BOOK_ROOM_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.searchData = action.payload;
            state.error = null;
            return { ...state };
        }

        case FETCH_DANH_SACH_BOOK_ROOM_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state };
        }

        case SEARCH_BOOK_ROOM_DASHBOARD: {
            state.loading = false;
            state.error = null;
            if (state.data) {
                let dataClone = [...state.data];
                let searchDataClone = dataClone.filter(item => {
                    let key = String(item.id);
                    if (typeof key === 'string') {
                        return key.toLowerCase().includes(action.payload.toLowerCase())
                    }
                })
                state.searchData = searchDataClone;
            }
            
    return { ...state };
}


        default:
return { ...state };
    }
}


export default layDanhSachBookRoomReducer;