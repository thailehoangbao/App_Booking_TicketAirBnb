import {FETCH_USER_FAIL,FETCH_USER_REQUEST,FETCH_USER_SUCCESS} from './_constantsUser';

import { TOKEN, USER_LOGIN } from 'Utils/_constantsUtils';
import api from 'Utils/apiUtils';

const actUserSuccess = (data) => {
    return {
        type:FETCH_USER_SUCCESS,
        payload: data
    }
}

const actUserFail = (error) => {
    return {
        type: FETCH_USER_FAIL,
        payload: error
    }
}

const actUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST,
    }
}


export const actFetchUser = (form) => {
    return (dispatch) => {
        dispatch(actUserRequest());
        api
            .put(`users/${form.id}`,form)
            .then((result) => {
                if (result.status === 200) {
                    // console.log("Thành Công",result.data);
                    alert('Bạn đã cập nhật thành công!');
                    dispatch(actUserSuccess(result.data));
                }
            })
            .catch((error) => {
                console.log(error);
                dispatch(actUserFail(error));
            })
    }
}