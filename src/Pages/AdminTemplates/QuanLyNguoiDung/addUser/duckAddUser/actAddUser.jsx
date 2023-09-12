import api from 'Utils/apiUtils';
import {FETCH_ADD_USER_FAIL,FETCH_ADD_USER_REQUEST,FETCH_ADD_USER_SUCCESS} from './_constantsAddUser';



const actAddUserSuccess = (data) => {
    return {
        type:FETCH_ADD_USER_SUCCESS,
        payload: data
    }
}

const actAddUserFail = (error) => {
    return {
        type: FETCH_ADD_USER_FAIL,
        payload: error
    }
}

const actAddUserRequest = () => {
    return {
        type: FETCH_ADD_USER_REQUEST,
    }
}


export const actFetchAddUser = (form) => {
    return (dispatch) => {
        dispatch(actAddUserRequest());
        api
            .post(`users`,form)
            .then((result) => {
                if (result.status === 200) {
                    alert('Thêm Người Dùng Thành Công!');
                    dispatch(actAddUserSuccess(result.data.content));
                }
            })
            .catch((error) => {
                alert('Thêm Người Dùng Thất Bại!');
                dispatch(actAddUserFail(error));
            })
    }
}
