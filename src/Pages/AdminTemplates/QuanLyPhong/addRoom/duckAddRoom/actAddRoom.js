import api from 'Utils/apiUtils';
import {FETCH_ADD_ROOM_FAIL,FETCH_ADD_ROOM_REQUEST,FETCH_ADD_ROOM_SUCCESS} from './_constantsAddRoom';
import { actFetchDanhSachPhongDat } from 'Pages/HomeTemplates/DetailPage/PopupDatPhong/duckDatPhong/actDatPhong';



const actAddRoomSuccess = (data) => {
    return {
        type:FETCH_ADD_ROOM_SUCCESS,
        payload: data
    }
}

const actAddRoomFail = (error) => {
    return {
        type: FETCH_ADD_ROOM_FAIL,
        payload: error
    }
}

const actAddRoomRequest = () => {
    return {
        type: FETCH_ADD_ROOM_REQUEST,
    }
}


export const actFetchAddRoom = (form,navigate) => {
    return (dispatch) => {
        dispatch(actAddRoomRequest());
        api
            .post(`phong-thue`,form)
            .then((result) => {
                if (result.status === 201) {
                    // console.log(result.data.content);
                    alert('Bạn thêm phòng thành công !');
                    dispatch(actAddRoomSuccess(result.data.content));
                    navigate('/admin/quanlyphong/dashboard-room');
                    dispatch(actFetchDanhSachPhongDat())
                }
            })
            .catch((error) => {
                alert('Thêm Phòng Thất Bại!');
                console.log("error",error);
                dispatch(actAddRoomFail(error));
            })
    }
}

