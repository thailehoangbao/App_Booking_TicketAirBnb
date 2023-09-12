import api from 'Utils/apiUtils';
import {FETCH_DELETE_BOOK_ROOM_FAIL
,FETCH_DELETE_BOOK_ROOM_REQUEST,FETCH_DELETE_BOOK_ROOM_SUCCESS} from './_constantsDeleteBookRoom';
import { actFetchDanhSachBookRoom } from '../../dashboardBookRoom/duckBookRoom/actBookRoom';



const actDeleteBookRoomSuccess = (data) => {
    return {
        type:FETCH_DELETE_BOOK_ROOM_SUCCESS,
        payload: data
    }
}

const actDeleteBookRoomFail = (error) => {
    return {
        type: FETCH_DELETE_BOOK_ROOM_FAIL,
        payload: error
    }
}

const actDeleteBookRoomRequest = () => {
    return {
        type: FETCH_DELETE_BOOK_ROOM_REQUEST,
    }
}


export const actFetchDeleteBookRoom = (id,navigate) => {
    return (dispatch) => {
        dispatch(actDeleteBookRoomRequest());
        api
            .delete(`dat-phong/${id}`)
            .then((result) => {
                if (result.status === 200) {
                    // console.log(result.data.content);
                    alert('Bạn đã xóa thành công!');
                    dispatch(actDeleteBookRoomSuccess(result.data.content));
                    dispatch(actFetchDanhSachBookRoom());
                    navigate('/admin/quanlydatphong')
                }
            })
            .catch((error) => {
                // console.log("error",error);
                dispatch(actDeleteBookRoomFail(error));
            })
    }
}

