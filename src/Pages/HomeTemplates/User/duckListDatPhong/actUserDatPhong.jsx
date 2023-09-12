import {FETCH_USER_LIST_PHONGDADAT_FAIL,FETCH_USER_LIST_PHONGDADAT_REQUEST,FETCH_USER_LIST_PHONGDADAT_SUCCESS,FETCH_DELETE_PHONGDADAT_FAIL,FETCH_DELETE_PHONGDADAT_REQUEST,FETCH_DELETE_PHONGDADAT_SUCCESS} from './_constantsUserDatPhong';

import api from 'Utils/apiUtils';

const actUserListPhongDaDatSuccess = (data) => {
    return {
        type:FETCH_USER_LIST_PHONGDADAT_SUCCESS,
        payload: data
    }
}
const actUserListPhongDaDatFail = (error) => {
    return {
        type: FETCH_USER_LIST_PHONGDADAT_FAIL,
        payload: error
    }
}

const actUserListPhongDaDatRequest = () => {
    return {
        type: FETCH_USER_LIST_PHONGDADAT_REQUEST,
    }
}


export const actFetchUserListPhongDaDat = (maNguoiDung) => {
    return (dispatch) => {
        dispatch(actUserListPhongDaDatRequest());
        api
            .get(`dat-phong/lay-theo-nguoi-dung/${maNguoiDung}`)
            .then((result) => {
                if (result.status === 200) {
                    // console.log("Thành Công",result.data);
                    dispatch(actUserListPhongDaDatSuccess(result.data.content));
                }
            })
            .catch((error) => {
                // console.log(error);
                dispatch(actUserListPhongDaDatFail(error));
            })
    }
}


//--------- delete user ------------------------

const actDeletePhongDaDatSuccess = (data) => {
    return {
        type:FETCH_DELETE_PHONGDADAT_SUCCESS,
        payload: data
    }
}
const actDeletePhongDaDatFail = (error) => {
    return {
        type: FETCH_DELETE_PHONGDADAT_FAIL,
        payload: error
    }
}

const actDeletePhongDaDatRequest = () => {
    return {
        type: FETCH_DELETE_PHONGDADAT_REQUEST,
    }
}


export const actFetchDeletePhongDaDat = (id,maNguoiDung) => {
    return (dispatch) => {
        dispatch(actDeletePhongDaDatRequest());
        api
            .delete(`dat-phong/${id}`)
            .then((result) => {
                if (result.status === 200) {
                    // console.log("Thành Công",result.data);
                    dispatch(actDeletePhongDaDatSuccess(result.data.content));
                    dispatch(actFetchUserListPhongDaDat(maNguoiDung))
                }
            })
            .catch((error) => {
                // console.log(error);
                dispatch(actDeletePhongDaDatFail(error));
            })
    }
}