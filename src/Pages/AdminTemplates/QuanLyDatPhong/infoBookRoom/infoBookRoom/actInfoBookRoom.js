import api from 'Utils/apiUtils';
import {FETCH_INFO_BOOK_ROOM_FAIL
,FETCH_INFO_BOOK_ROOM_REQUEST
,FETCH_INFO_BOOK_ROOM_SUCCESS} from './_constantsInfoBookRoom';



const actInfoBookRoomSuccess = (data) => {
    return {
        type:FETCH_INFO_BOOK_ROOM_SUCCESS,
        payload: data
    }
}

const actInfoBookRoomFail = (error) => {
    return {
        type: FETCH_INFO_BOOK_ROOM_FAIL,
        payload: error
    }
}

const actInfoBookRoomRequest = () => {
    return {
        type: FETCH_INFO_BOOK_ROOM_REQUEST,
    }
}


export const actFetchInfoBookRoom = (id) => {
    return (dispatch) => {
        dispatch(actInfoBookRoomRequest());
        api
            .get(`dat-phong/${id}`)
            .then((result) => {
                if (result.status === 200) {
                    // console.log(result.data.content);
                    dispatch(actInfoBookRoomSuccess(result.data.content));
                }
            })
            .catch((error) => {
                // console.log("error",error);
                dispatch(actInfoBookRoomFail(error));
            })
    }
}

