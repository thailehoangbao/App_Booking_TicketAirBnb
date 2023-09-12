import api from 'Utils/apiUtils';
import {
    FETCH_ADD_BINHLUAN_FAIL,
    FETCH_ADD_BINHLUAN_REQUEST,
    FETCH_ADD_BINHLUAN_SUCCESS,
    FETCH_BINHLUAN_THEOPHONG_FAIL,
    FETCH_BINHLUAN_THEOPHONG_REQUEST,
    FETCH_BINHLUAN_THEOPHONG_SUCCESS,
    FETCH_BINHLUAN_FAIL,
    FETCH_BINHLUAN_REQUEST,
    FETCH_BINHLUAN_SUCCESS,
    MA_PHONG
} from './_constantsBL';


// Bình luận theo phòng  ------------------------

const actBinhLuanThueSuccess = (data) => {
    return {
        type:FETCH_BINHLUAN_THEOPHONG_SUCCESS,
        payload: data
    }
}

const actBinhLuanThueFail = (error) => {
    return {
        type: FETCH_BINHLUAN_THEOPHONG_FAIL,
        payload: error
    }
}

const actBinhLuanThueRequest = () => {
    return {
        type: FETCH_BINHLUAN_THEOPHONG_REQUEST,
    }
}




export const actFetchBinhLuanThue = (id) => {
    return (dispatch) => {
        dispatch(actBinhLuanThueRequest());
        api
            .get(`binh-luan/lay-binh-luan-theo-phong/${id}`)
            .then((result) => {
                if (result.status === 200) {
                    // console.log(result.data.content);
                    dispatch(actBinhLuanThueSuccess(result.data.content));
                }
            })
            .catch((error) => {
                // console.log("error",error);
                dispatch(actBinhLuanThueFail(error));
            })
    }
}


//---------- List Bình Luận -----------------------------

const actListBinhLuanThueSuccess = (data) => {
    return {
        type:FETCH_BINHLUAN_SUCCESS,
        payload: data
    }
}

const actListBinhLuanThueFail = (error) => {
    return {
        type: FETCH_BINHLUAN_FAIL,
        payload: error
    }
}

const actListBinhLuanThueRequest = () => {
    return {
        type: FETCH_BINHLUAN_REQUEST,
    }
}

export const actMaPhong = (maPhong) => {
    return {
        type: MA_PHONG,
        payload: maPhong
    }
}


export const actFetchListBinhLuanThue = () => {
    return (dispatch) => {
        dispatch(actListBinhLuanThueRequest());
        api
            .get(`binh-luan`)
            .then((result) => {
                if (result.status === 200) {
                    // console.log(result.data.content);
                    dispatch(actListBinhLuanThueSuccess(result.data.content));
                }
            })
            .catch((error) => {
                // console.log("error",error);
                dispatch(actListBinhLuanThueFail(error));
            })
    }
}



//---------- Add Bình Luận -----------------------------

const actAddBinhLuanThueSuccess = (data) => {
    return {
        type:FETCH_ADD_BINHLUAN_SUCCESS,
        payload: data
    }
}

const actAddBinhLuanThueFail = (error) => {
    return {
        type: FETCH_ADD_BINHLUAN_FAIL,
        payload: error
    }
}

const actAddBinhLuanThueRequest = () => {
    return {
        type: FETCH_ADD_BINHLUAN_REQUEST,
    }
}


export const actFetchAddBinhLuanThue = (form,id,navigate) => {
    return (dispatch) => {
        dispatch(actAddBinhLuanThueRequest());
        api
            .post(`binh-luan`,form)
            .then((result) => {
                // console.log(result);
                if (result.status === 201) {
                    // console.log(result.data.message);
                    dispatch(actAddBinhLuanThueSuccess(result.data.content));
                    dispatch(actMaPhong(id));
                    dispatch(actFetchBinhLuanThue(id));
                }
            })
            .catch((error) => {
                // console.log("error",error);
                dispatch(actAddBinhLuanThueFail(error));
            })
    }
}