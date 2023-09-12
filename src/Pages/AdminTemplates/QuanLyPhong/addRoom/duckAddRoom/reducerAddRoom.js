import {FETCH_ADD_ROOM_FAIL,FETCH_ADD_ROOM_REQUEST,FETCH_ADD_ROOM_SUCCESS} from './_constantsAddRoom';

const initialState = {
    loading: false,
    data: null,
    error: null,
}

const layAddRoomReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ADD_ROOM_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };
        }

        case FETCH_ADD_ROOM_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state };
        }

        case FETCH_ADD_ROOM_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state };
        }


        default:
            return { ...state };
    }
}


export default layAddRoomReducer;