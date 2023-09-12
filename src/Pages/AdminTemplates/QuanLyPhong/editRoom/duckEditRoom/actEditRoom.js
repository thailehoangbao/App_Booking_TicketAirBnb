import api from 'Utils/apiUtils';
import {FETCH_EDIT_ROOM_FAIL,FETCH_EDIT_ROOM_REQUEST,FETCH_EDIT_ROOM_SUCCESS} from './_constantsEditRoom';
import { actFetchDanhSachPhongDat } from 'Pages/HomeTemplates/DetailPage/PopupDatPhong/duckDatPhong/actDatPhong';



const actEditRoomSuccess = (data) => {
    return {
        type:FETCH_EDIT_ROOM_SUCCESS,
        payload: data
    }
}

const actEditRoomFail = (error) => {
    return {
        type: FETCH_EDIT_ROOM_FAIL,
        payload: error
    }
}

const actEditRoomRequest = () => {
    return {
        type: FETCH_EDIT_ROOM_REQUEST,
    }
}


export const actFetchEditRoom = (id,form,navigate) => {
    return (dispatch) => {
        dispatch(actEditRoomRequest());
        api
            .put(`phong-thue/${id}`,form)
            .then((result) => {
                if (result.status === 200) {
                    alert('Bạn chỉnh sử phòng thành công !');
                    dispatch(actEditRoomSuccess(result.data.content));
                    navigate('/admin/quanlyphong/dashboard-room')
                    dispatch(actFetchDanhSachPhongDat());
                }
            })
            .catch((error) => {
                alert('Chỉnh Sửa Thất Bại!');
                console.log("error",error);
                dispatch(actEditRoomFail(error));
            })
    }
}

