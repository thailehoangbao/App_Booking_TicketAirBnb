import api from 'Utils/apiUtils';
import {FETCH_CHITIET_PHONGTHUE_FAIL,FETCH_CHITIET_PHONGTHUE_REQUEST,FETCH_CHITIET_PHONGTHUE_SUCCESS,FETCH_CHITIET_VITRI_FAIL,FETCH_CHITIET_VITRI_REQUEST,FETCH_CHITIET_VITRI_SUCCESS} from './_constantsDetail';



const actChiTietPhongThueSuccess = (data) => {
    return {
        type:FETCH_CHITIET_PHONGTHUE_SUCCESS,
        payload: data
    }
}

const actChiTietPhongThueFail = (error) => {
    return {
        type: FETCH_CHITIET_PHONGTHUE_FAIL,
        payload: error
    }
}

const actChiTietPhongThueRequest = () => {
    return {
        type: FETCH_CHITIET_PHONGTHUE_REQUEST,
    }
}


export const actFetchChiTietPhongThue = (id) => {
    return (dispatch) => {
        dispatch(actChiTietPhongThueRequest());
        api
            .get(`phong-thue/${id}`)
            .then((result) => {
                if (result.status === 200) {
                    // console.log(result.data.content);
                    dispatch(actChiTietPhongThueSuccess(result.data.content));
                    dispatch(actFetchChiTietViTri(result.data.content.maViTri));
                }
            })
            .catch((error) => {
                console.log("error",error)
                dispatch(actChiTietPhongThueFail(error));
            })
    }
}

// Tìm vị trí chính xác

const actChiTietViTriSuccess = (data) => {
    return {
        type:FETCH_CHITIET_VITRI_SUCCESS,
        payload: data
    }
}

const actChiTietViTriFail = (error) => {
    return {
        type: FETCH_CHITIET_VITRI_FAIL,
        payload: error
    }
}

const actChiTietViTriRequest = () => {
    return {
        type: FETCH_CHITIET_VITRI_REQUEST,
    }
}


export const actFetchChiTietViTri = (id) => {
    return (dispatch) => {
        dispatch(actChiTietViTriRequest());
        api
            .get(`vi-tri/${id}`)
            .then((result) => {
                if (result.status === 200) {
                    // console.log(result.data.content);
                    dispatch(actChiTietViTriSuccess(result.data.content));
                }
            })
            .catch((error) => {
                console.log("error",error)
                dispatch(actChiTietViTriFail(error));
            })
    }
}