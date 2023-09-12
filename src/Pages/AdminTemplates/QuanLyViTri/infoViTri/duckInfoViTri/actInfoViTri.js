import api from 'Utils/apiUtils';
import {FETCH_INFO_VITRI_FAIL,FETCH_INFO_VITRI_REQUEST,FETCH_INFO_VITRI_SUCCESS} from './_constantsInfoViTri';



const actInfoViTriSuccess = (data) => {
    return {
        type:FETCH_INFO_VITRI_SUCCESS,
        payload: data
    }
}

const actInfoViTriFail = (error) => {
    return {
        type: FETCH_INFO_VITRI_FAIL,
        payload: error
    }
}

const actInfoViTriRequest = () => {
    return {
        type: FETCH_INFO_VITRI_REQUEST,
    }
}


export const actFetchInfoViTri = (id) => {
    return (dispatch) => {
        dispatch(actInfoViTriRequest());
        api
            .get(`vi-tri/${id}`)
            .then((result) => {
                if (result.status === 200) {
                    // console.log(result.data.content);
                    dispatch(actInfoViTriSuccess(result.data.content));
                }
            })
            .catch((error) => {
                // console.log("error",error);
                dispatch(actInfoViTriFail(error));
            })
    }
}

