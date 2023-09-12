import api from 'Utils/apiUtils';
import {FETCH_INFO_ROOM_FAIL,FETCH_INFO_ROOM_REQUEST,FETCH_INFO_ROOM_SUCCESS} from './_constantsInfoRoom';




const actInfoRoomSuccess = (data) => {
    return {
        type:FETCH_INFO_ROOM_SUCCESS,
        payload: data
    }
}

const actInfoRoomFail = (error) => {
    return {
        type: FETCH_INFO_ROOM_FAIL,
        payload: error
    }
}

const actInfoRoomRequest = () => {
    return {
        type: FETCH_INFO_ROOM_REQUEST,
    }
}


export const actFetchInfoRoom = (id) => {
    return (dispatch) => {
        dispatch(actInfoRoomRequest());
        api
            .get(`phong-thue/${id}`)
            .then((result) => {
                if (result.status === 200) {
                    // console.log(result.data.content);
                    dispatch(actInfoRoomSuccess(result.data.content));
                }
            })
            .catch((error) => {
                // console.log("error",error);
                dispatch(actInfoRoomFail(error));
            })
    }
}
