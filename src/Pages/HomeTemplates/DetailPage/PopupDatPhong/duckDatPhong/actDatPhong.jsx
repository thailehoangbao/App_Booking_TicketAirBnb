import api from 'Utils/apiUtils';
import {THONG_BAO_DA_DAT, FETCH_DANHSACH_PHONGDAT_FAIL,FETCH_DANHSACH_PHONGDAT_REQUEST,FETCH_DANHSACH_PHONGDAT_SUCCESS,MA_PHONG_DAT,FETCH_BUTTON_PHONGDAT_FAIL,FETCH_BUTTON_PHONGDAT_REQUEST,FETCH_BUTTON_PHONGDAT_SUCCESS} from './_constantsDatPhong';



const actDanhSachPhongDatSuccess = (data) => {
    return {
        type:FETCH_DANHSACH_PHONGDAT_SUCCESS,
        payload: data
    }
}

const actDanhSachPhongDatFail = (error) => {
    return {
        type: FETCH_DANHSACH_PHONGDAT_FAIL,
        payload: error
    }
}

const actDanhSachPhongDatRequest = () => {
    return {
        type: FETCH_DANHSACH_PHONGDAT_REQUEST,
    }
}

export const actMaPhongDat = (maPhong) => {
    return {
        type: MA_PHONG_DAT,
        payload: maPhong
    }
}


export const actFetchDanhSachPhongDat = (maPhong) => {
    return (dispatch) => {
        dispatch(actDanhSachPhongDatRequest());
        api
            .get(`dat-phong`)
            .then((result) => {
                if (result.status === 200) {
                    dispatch(actMaPhongDat(maPhong));
                    dispatch(actDanhSachPhongDatSuccess(result.data.content));
                }
            })
            .catch((error) => {
                // console.log("error",error);
                dispatch(actDanhSachPhongDatFail(error));
            })
    }
}


//----- Button Đặt Phòng --------------------------------

const actBtnDatPhongSuccess = (data) => {
    return {
        type:FETCH_BUTTON_PHONGDAT_SUCCESS,
        payload: data
    }
}

const actBtnDatPhongFail = (error) => {
    return {
        type: FETCH_BUTTON_PHONGDAT_FAIL,
        payload: error
    }
}

const actBtnDatPhongRequest = () => {
    return {
        type: FETCH_BUTTON_PHONGDAT_REQUEST,
    }
}

const actThongBaoDaDatPhong = () => {
    return {
        type: THONG_BAO_DA_DAT,
        payload: true
    }
}


export const actFetchBtnDatPhong = (form) => {
    return (dispatch) => {
        dispatch(actBtnDatPhongRequest());
        api
            .post(`dat-phong`,form)
            .then((result) => {
                if (result.status === 201) {
                    // alert('Bạn đã đặt phòng thành công!');
                    dispatch(actBtnDatPhongSuccess(result.data.content));
                    dispatch(actThongBaoDaDatPhong());
                }
            })
            .catch((error) => {
                // console.log("error",error);
                dispatch(actBtnDatPhongFail(error));
            })
    }
}