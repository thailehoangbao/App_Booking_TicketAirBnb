import api from 'Utils/apiUtils';
import {FETCH_EDIT_BOOK_ROOM_FAIL,FETCH_EDIT_BOOK_ROOM_REQUEST,FETCH_EDIT_BOOK_ROOM_SUCCESS} from './_constantsEditBookRoom';



const actEditBookRoomSuccess = (data) => {
    return {
        type:FETCH_EDIT_BOOK_ROOM_SUCCESS,
        payload: data
    }
}

const actEditBookRoomFail = (error) => {
    return {
        type: FETCH_EDIT_BOOK_ROOM_FAIL,
        payload: error
    }
}

const actEditBookRoomRequest = () => {
    return {
        type: FETCH_EDIT_BOOK_ROOM_REQUEST,
    }
}


export const actFetchEditBookRoom = (id,form) => {
    return (dispatch) => {
        dispatch(actEditBookRoomRequest());
        api
            .put(`dat-phong/${id}`,form)
            .then((result) => {
                if (result.status === 200) {
                    // console.log(result.data.content);
                    alert('Bạn đã cập nhật thành công!')
                    dispatch(actEditBookRoomSuccess(result.data.content));
                }
            })
            .catch((error) => {
                console.log("error",error)
                dispatch(actEditBookRoomFail(error));
            })
    }
}

