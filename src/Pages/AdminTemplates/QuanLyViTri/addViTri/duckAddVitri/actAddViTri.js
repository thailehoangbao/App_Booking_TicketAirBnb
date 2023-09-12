import api from 'Utils/apiUtils';
import {FETCH_ADD_VITRI_FAIL,FETCH_ADD_VITRI_REQUEST,FETCH_ADD_VITRI_SUCCESS} from './_constantsAddVitri';
import { actFetchDanhSachViTri } from '../../dashboardViTri/duckViTri/actDashboardViTri';



const actAddViTRiSuccess = (data) => {
    return {
        type:FETCH_ADD_VITRI_SUCCESS,
        payload: data
    }
}

const actAddViTRiFail = (error) => {
    return {
        type: FETCH_ADD_VITRI_FAIL,
        payload: error
    }
}

const actAddViTRiRequest = () => {
    return {
        type: FETCH_ADD_VITRI_REQUEST,
    }
}


export const actFetchAddViTRi = (form,navigate) => {
    return (dispatch) => {
        dispatch(actAddViTRiRequest());
        api
            .post(`vi-tri`,form)
            .then((result) => {
                if (result.status === 201) {
                    // console.log(result.data.content);
                    alert('Bạn thêm vị trí thành công !');
                    dispatch(actAddViTRiSuccess(result.data.content));
                    navigate('/admin/quanlyvitri/dashboard-vitri');
                    dispatch(actFetchDanhSachViTri())
                }
            })
            .catch((error) => {
                alert('Bạn Thêm Vị Trí Thất Bại !');
                console.log("error",error);
                dispatch(actAddViTRiFail(error));
            })
    }
}

