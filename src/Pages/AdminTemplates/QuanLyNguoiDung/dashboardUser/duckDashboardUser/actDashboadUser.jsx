import api from 'Utils/apiUtils';
import {FETCH_DANH_SACH_NGUOI_DUNG_FAIL,FETCH_DANH_SACH_NGUOI_DUNG_REQUEST,FETCH_DANH_SACH_NGUOI_DUNG_SUCCESS} from './_constantsUser';
import {FETCH_SEARCH_DANH_SACH_NGUOI_DUNG_FAIL,FETCH_SEARCH_DANH_SACH_NGUOI_DUNG_REQUEST,FETCH_SEARCH_DANH_SACH_NGUOI_DUNG_SUCCESS} from './../../searchUser/duckSearchUser/_constantsSearch';



const actDanhSachNguoiDungSuccess = (data) => {
    return {
        type:FETCH_DANH_SACH_NGUOI_DUNG_SUCCESS,
        payload: data
    }
}

const actDanhSachNguoiDungFail = (error) => {
    return {
        type: FETCH_DANH_SACH_NGUOI_DUNG_FAIL,
        payload: error
    }
}

const actDanhSachNguoiDungRequest = () => {
    return {
        type: FETCH_DANH_SACH_NGUOI_DUNG_REQUEST,
    }
}


export const actFetchDanhSachNguoiDung = (search) => {
    if (search) {
        return (dispatch) => {
            dispatch(actSearchDanhSachNguoiDungRequest());
            api
                .get(`users/search/${search}`)
                .then((result) => {
                    // console.log(result);
                    if (result.status === 200) {
                        console.log(result.data.content);
                        dispatch(actSearchDanhSachNguoiDungSuccess(result.data.content));
                    }
                })
                .catch((error) => {
                    // console.log("error",error);
                    dispatch(actSearchDanhSachNguoiDungFail(error));
                })
        }
    }
    return (dispatch) => {
        dispatch(actDanhSachNguoiDungRequest());
        api
            .get(`users`)
            .then((result) => {
                // console.log(result);
                if (result.status === 200) {
                    // console.log(result.data.content);
                    dispatch(actDanhSachNguoiDungSuccess(result.data.content));
                }
            })
            .catch((error) => {
                // console.log("error",error);
                dispatch(actDanhSachNguoiDungFail(error));
            })
    }
}


const actSearchDanhSachNguoiDungSuccess = (data) => {
    return {
        type:FETCH_SEARCH_DANH_SACH_NGUOI_DUNG_SUCCESS,
        payload: data
    }
}

const actSearchDanhSachNguoiDungFail = (error) => {
    return {
        type: FETCH_SEARCH_DANH_SACH_NGUOI_DUNG_FAIL,
        payload: error
    }
}

const actSearchDanhSachNguoiDungRequest = () => {
    return {
        type: FETCH_SEARCH_DANH_SACH_NGUOI_DUNG_REQUEST,
    }
}