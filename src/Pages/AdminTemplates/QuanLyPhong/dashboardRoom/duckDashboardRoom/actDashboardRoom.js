import api from 'Utils/apiUtils';
import {SEARCH_ROOM_DASHBOARD,FETCH_DANH_SACH_ROOM_FAIL,FETCH_DANH_SACH_ROOM_REQUEST,FETCH_DANH_SACH_ROOM_SUCCESS} from './_constantsDashboardRoom';



const actDanhSachRoomSuccess = (data) => {
    return {
        type:FETCH_DANH_SACH_ROOM_SUCCESS,
        payload: data
    }
}

const actDanhSachRoomFail = (error) => {
    return {
        type: FETCH_DANH_SACH_ROOM_FAIL,
        payload: error
    }
}

const actDanhSachRoomRequest = () => {
    return {
        type: FETCH_DANH_SACH_ROOM_REQUEST,
    }
}

export const actSearchRoomDashboard = (search) => {
    return {
        type: SEARCH_ROOM_DASHBOARD,
        payload: search
    }
}


export const actFetchDanhSachRoom = () => {
    return (dispatch) => {
        dispatch(actDanhSachRoomRequest());
        api
            .get(`phong-thue`)
            .then((result) => {
                if (result.status === 200) {
                    // console.log(result.data.content);
                    dispatch(actDanhSachRoomSuccess(result.data.content));
                }
            })
            .catch((error) => {
                // console.log("error",error);
                dispatch(actDanhSachRoomFail(error));
            })
    }
}

