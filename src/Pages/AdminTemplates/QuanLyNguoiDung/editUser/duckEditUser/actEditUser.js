import api from 'Utils/apiUtils';
import {FETCH_EDIT_USER_FAIL,FETCH_EDIT_USER_REQUEST,FETCH_EDIT_USER_SUCCESS} from './_constantsEditUser';
import { actFetchDanhSachNguoiDung } from '../../dashboardUser/duckDashboardUser/actDashboadUser';



const actEditUserrSuccess = (data) => {
    return {
        type:FETCH_EDIT_USER_SUCCESS,
        payload: data
    }
}

const actEditUserrFail = (error) => {
    return {
        type: FETCH_EDIT_USER_FAIL,
        payload: error
    }
}

const actEditUserrRequest = () => {
    return {
        type: FETCH_EDIT_USER_REQUEST,
    }
}


export const actFetchEditUser = (id,form,navigate) => {
    return (dispatch) => {
        dispatch(actEditUserrRequest());
        api
            .put(`users/${id}`,form)
            .then((result) => {
                if (result.status === 200) {
                    alert('Cập Nhật Thông Tin Người Dùng Thành Công!')
                    dispatch(actEditUserrSuccess(result.data.content));
                    navigate('/admin/quanlynguoidung/dashboard')
                    dispatch(actFetchDanhSachNguoiDung());
                }
            })
            .catch((error) => {
                alert('Cập Nhật Thất Bại!')
                dispatch(actEditUserrFail(error));
            })
    }
}
