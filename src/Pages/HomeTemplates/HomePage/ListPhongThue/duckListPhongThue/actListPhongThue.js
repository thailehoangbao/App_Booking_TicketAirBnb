import {FETCH_LISTPHONGTHUE_FAIL,FETCH_LISTPHONGTHUE_REQUEST,FETCH_LISTPHONGTHUE_SUCCESS} from './_constantsListPhongThue';
import api from 'Utils/apiUtils';


const actListPhongThueSuccess = (data) => {
    return {
        type:FETCH_LISTPHONGTHUE_SUCCESS,
        payload: data
    }
}

const actListPhongThueFail = (error) => {
    return {
        type: FETCH_LISTPHONGTHUE_FAIL,
        payload: error
    }
}

const actListPhongThueRequest = () => {
    return {
        type: FETCH_LISTPHONGTHUE_REQUEST,
    }
}


export const actFetchListPhongThue = () => {
    return (dispatch) => {
        dispatch(actListPhongThueRequest());
        api
            .get(`phong-thue`)
            .then((result) => {
                if (result.status === 200) {
                    // console.log(result.data.content);
                    dispatch(actListPhongThueSuccess(result.data.content));
                }
            })
            .catch((error) => {
                // console.log("error",error);
                dispatch(actListPhongThueFail(error));
            })
    }
}

