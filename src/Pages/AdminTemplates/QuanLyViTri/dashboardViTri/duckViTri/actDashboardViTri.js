import api from 'Utils/apiUtils';
import {SEARCH_VITRI_DASHBOARD,FETCH_DANH_SACH_VITRI_FAIL,FETCH_DANH_SACH_VITRI_REQUEST,FETCH_DANH_SACH_VITRI_SUCCESS} from './_constantsDashboardViTri';



const actDanhSachViTriSuccess = (data) => {
    return {
        type:FETCH_DANH_SACH_VITRI_SUCCESS,
        payload: data
    }
}

const actDanhSachViTriFail = (error) => {
    return {
        type: FETCH_DANH_SACH_VITRI_FAIL,
        payload: error
    }
}

const actDanhSachViTriRequest = () => {
    return {
        type: FETCH_DANH_SACH_VITRI_REQUEST,
    }
}

export const actSearchViTriDashboard = (search) => {
    return {
        type: SEARCH_VITRI_DASHBOARD,
        payload: search
    }
}


export const actFetchDanhSachViTri = () => {
    return (dispatch) => {
        dispatch(actDanhSachViTriRequest());
        api
            .get(`vi-tri`)
            .then((result) => {
                if (result.status === 200) {
                    // console.log(result.data.content);
                    dispatch(actDanhSachViTriSuccess(result.data.content));
                }
            })
            .catch((error) => {
                // console.log("error",error);
                dispatch(actDanhSachViTriFail(error));
            })
    }
}

