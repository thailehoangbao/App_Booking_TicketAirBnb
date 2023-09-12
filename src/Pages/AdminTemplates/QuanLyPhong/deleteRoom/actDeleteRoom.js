import api from 'Utils/apiUtils';
import {FETCH_DELETE_ROOM_FAIL,FETCH_DELETE_ROOM_REQUEST,FETCH_DELETE_ROOM_SUCCESS} from './_constantsDeleteRoom';
import { actFetchDanhSachPhongDat } from 'Pages/HomeTemplates/DetailPage/PopupDatPhong/duckDatPhong/actDatPhong';



const actDeleteRoomSuccess = (data) => {
    return {
        type:FETCH_DELETE_ROOM_SUCCESS,
        payload: data
    }
}

const actDeleteRoomFail = (error) => {
    return {
        type: FETCH_DELETE_ROOM_FAIL,
        payload: error
    }
}

const actDeleteRoomRequest = () => {
    return {
        type: FETCH_DELETE_ROOM_REQUEST,
    }
}


export const actFetchDeleteRoom = (id,navigate) => {
    return (dispatch) => {
        dispatch(actDeleteRoomRequest());
        api
            .delete(`phong-thue/${id}`)
            .then((result) => {
                if (result.status === 200) {
                    alert('Xóa thành công!')
                    dispatch(actDeleteRoomSuccess(result.data.content));
                    navigate('/admin/quanlyphong',{replace: true});
                    dispatch(actFetchDanhSachPhongDat())
                }
            })
            .catch((error) => {
                alert('Xóa không được!');
                console.log("error",error);
                dispatch(actDeleteRoomFail(error));
            })
    }
}

