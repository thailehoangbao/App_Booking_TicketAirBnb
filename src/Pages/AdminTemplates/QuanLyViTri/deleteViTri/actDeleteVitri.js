import api from 'Utils/apiUtils';
import {FETCH_DELETE_VITRI_FAIL,FETCH_DELETE_VITRI_REQUEST,FETCH_DELETE_VITRI_SUCCESS} from './_constantsDeleteVitri';
import { actFetchDanhSachViTri } from '../dashboardViTri/duckViTri/actDashboardViTri';





const actDeleteViTRiSuccess = (data) => {
    return {
        type:FETCH_DELETE_VITRI_SUCCESS,
        payload: data
    }
}

const actDeleteViTRiFail = (error) => {
    return {
        type: FETCH_DELETE_VITRI_FAIL,
        payload: error
    }
}

const actDeleteViTRiRequest = () => {
    return {
        type: FETCH_DELETE_VITRI_REQUEST,
    }
}


export const actFetchDeleteViTRi = (id,navigate) => {
    return (dispatch) => {
        dispatch(actDeleteViTRiRequest());
        api
            .delete(`vi-tri/${id}`)
            .then((result) => {
                if (result.status === 200) {
                    alert('Bạn Xóa vị trí thành công !');
                    dispatch(actDeleteViTRiSuccess(result.data.content));
                }
            })
            .catch((error) => {
                alert('Xóa Thất Bại !');
                // console.log("error",error);
                dispatch(actDeleteViTRiFail(error));
            })
    }
}

