import {FETCH_VTRI_TIMKIEM_FAIL,FETCH_VTRI_TIMKIEM_REQUEST,FETCH_VTRI_TIMKIEM_SUCCESS} from './_constantsViTri';
import api from 'Utils/apiUtils';


const actViTriTimKiemSuccess = (data) => {
    return {
        type:FETCH_VTRI_TIMKIEM_SUCCESS,
        payload: data
    }
}

const actViTriTimKiemFail = (error) => {
    return {
        type: FETCH_VTRI_TIMKIEM_FAIL,
        payload: error
    }
}

const actViTriTimKiemRequest = () => {
    return {
        type: FETCH_VTRI_TIMKIEM_REQUEST,
    }
}


export const actFetchViTriTimKiem = () => {
    return (dispatch) => {
        dispatch(actViTriTimKiemRequest());
        api
            .get(`vi-tri`)
            .then((result) => {
                if (result.status === 200) {
                    // console.log(result.data.content);
                    dispatch(actViTriTimKiemSuccess(result.data.content));
                }
            })
            .catch((error) => {
                // console.log("error",error);
                dispatch(actViTriTimKiemFail(error));
            })
    }
}

