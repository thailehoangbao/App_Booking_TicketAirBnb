import {FETCH_EDIT_BOOK_ROOM_FAIL,FETCH_EDIT_BOOK_ROOM_REQUEST,FETCH_EDIT_BOOK_ROOM_SUCCESS} from './_constantsEditBookRoom';

const initialState = {
    loading: false,
    data: null,
    error: null,
}

const layDanhSachBookRoomReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EDIT_BOOK_ROOM_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };
        }

        case FETCH_EDIT_BOOK_ROOM_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state };
        }

        case FETCH_EDIT_BOOK_ROOM_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state };
        }


        default:
            return { ...state };
    }
}


export default layDanhSachBookRoomReducer;