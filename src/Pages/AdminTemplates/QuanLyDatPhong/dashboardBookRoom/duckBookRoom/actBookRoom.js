import api from 'Utils/apiUtils';
import {SEARCH_BOOK_ROOM_DASHBOARD,FETCH_DANH_SACH_BOOK_ROOM_FAIL,FETCH_DANH_SACH_BOOK_ROOM_REQUEST,FETCH_DANH_SACH_BOOK_ROOM_SUCCESS} from './_constantsBookRoom';



const actDanhSachBookRoomSuccess = (data) => {
    return {
        type:FETCH_DANH_SACH_BOOK_ROOM_SUCCESS,
        payload: data
    }
}

const actDanhSachBookRoomFail = (error) => {
    return {
        type: FETCH_DANH_SACH_BOOK_ROOM_FAIL,
        payload: error
    }
}

const actDanhSachBookRoomRequest = () => {
    return {
        type: FETCH_DANH_SACH_BOOK_ROOM_REQUEST,
    }
}


export const actSearchBookRoomDashboard = search => {
    return {
        type: SEARCH_BOOK_ROOM_DASHBOARD,
        payload: search
    }
}

export const actFetchDanhSachBookRoom = () => {
    return (dispatch) => {
        dispatch(actDanhSachBookRoomRequest());
        api
            .get(`dat-phong`)
            .then((result) => {
                if (result.status === 200) {
                    // console.log(result.data.content);
                    dispatch(actDanhSachBookRoomSuccess(result.data.content));
                }
            })
            .catch((error) => {
                // console.log("error",error);
                dispatch(actDanhSachBookRoomFail(error));
            })
    }
}

