import api from 'Utils/apiUtils';
import {FETCH_INFO_USER_FAIL,FETCH_INFO_USER_REQUEST,FETCH_INFO_USER_SUCCESS} from './_constantsInfoUser';




const actInfoUserSuccess = (data) => {
    return {
        type:FETCH_INFO_USER_SUCCESS,
        payload: data
    }
}

const actInfoUserFail = (error) => {
    return {
        type: FETCH_INFO_USER_FAIL,
        payload: error
    }
}

const actInfoUserRequest = () => {
    return {
        type: FETCH_INFO_USER_REQUEST,
    }
}


export const actFetchInfoUser = (id) => {
    return (dispatch) => {
        dispatch(actInfoUserRequest());
        api
            .get(`users/${id}`)
            .then((result) => {
                if (result.status === 200) {
                    // console.log(result.data.content);
                    dispatch(actInfoUserSuccess(result.data.content));
                }
            })
            .catch((error) => {
                // console.log("error",error);
                dispatch(actInfoUserFail(error));
            })
    }
}
