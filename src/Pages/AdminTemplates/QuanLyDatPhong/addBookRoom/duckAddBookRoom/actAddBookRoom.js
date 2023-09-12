import api from 'Utils/apiUtils';
import {FETCH_ADD_BOOK_ROOM_FAIL,FETCH_ADD_BOOK_ROOM_REQUEST,FETCH_ADD_BOOK_ROOM_SUCCESS} from './_constantsAddBookRoom';



const actAddBookRoomSuccess = (data) => {
    return {
        type:FETCH_ADD_BOOK_ROOM_SUCCESS,
        payload: data
    }
}

const actAddBookRoomFail = (error) => {
    return {
        type: FETCH_ADD_BOOK_ROOM_FAIL,
        payload: error
    }
}

const actAddBookRoomRequest = () => {
    return {
        type: FETCH_ADD_BOOK_ROOM_REQUEST,
    }
}


export const actFetchAddBookRoom = (form) => {
    return (dispatch) => {
        dispatch(actAddBookRoomRequest());
        api
            .post(`dat-phong`,form)
            .then((result) => {
                if (result.status === 201) {
                    // console.log(result.data.content);
                    alert('Đặt Phòng Thành Công!')
                    dispatch(actAddBookRoomSuccess(result.data.content));
                }
            })
            .catch((error) => {
                // console.log("error",error);
                dispatch(actAddBookRoomFail(error));
            })
    }
}

