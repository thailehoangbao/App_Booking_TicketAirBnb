import api from 'Utils/apiUtils';
import {FETCH_EDIT_VITRI_FAIL,FETCH_EDIT_VITRI_REQUEST,FETCH_EDIT_VITRI_SUCCESS} from './_constantsEditVitri';
import { actFetchDanhSachViTri } from '../../dashboardViTri/duckViTri/actDashboardViTri';




const actEditViTRiSuccess = (data) => {
    return {
        type:FETCH_EDIT_VITRI_SUCCESS,
        payload: data
    }
}

const actEditViTRiFail = (error) => {
    return {
        type: FETCH_EDIT_VITRI_FAIL,
        payload: error
    }
}

const actEditViTRiRequest = () => {
    return {
        type: FETCH_EDIT_VITRI_REQUEST,
    }
}


export const actFetchEditViTRi = (id,form,navigate) => {
    return (dispatch) => {
        dispatch(actEditViTRiRequest());
        api
            .put(`vi-tri/${id}`,form)
            .then((result) => {
                if (result.status === 200) {
                    // console.log(result.data.content);
                    alert('Bạn cập nhật vị trí thành công !');
                    dispatch(actEditViTRiSuccess(result.data.content));
                    navigate('/admin/quanlyvitri/dashboard-vitri');
                    dispatch(actFetchDanhSachViTri())
                }
            })
            .catch((error) => {
                alert('Sửa Thất Bại !');
                // console.log("error",error);
                dispatch(actEditViTRiFail(error));
            })
    }
}

