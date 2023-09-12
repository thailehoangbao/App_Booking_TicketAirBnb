import {FETCH_LOGIN_FAIL,FETCH_LOGIN_REQUEST,FETCH_LOGIN_SUCCESS} from './_constantsLogin';

import { TOKEN, USER_LOGIN } from 'Utils/_constantsUtils';
import api from 'Utils/apiUtils';

const actLoginSuccess = (data) => {
    return {
        type:FETCH_LOGIN_SUCCESS,
        payload: data
    }
}

const actLoginFail = (error) => {
    return {
        type: FETCH_LOGIN_FAIL,
        payload: error
    }
}

const actLoginRequest = () => {
    return {
        type: FETCH_LOGIN_REQUEST,
    }
}


export const actFetchLogin = (form,navigate) => {
    return (dispatch) => {
        dispatch(actLoginRequest());
        api
            .post(`auth/signin`,form)
            .then((result) => {
                if (result.status === 200) {
                    // console.log("Thành Công",result.data);
                    alert('Bạn đăng nhập thành công!');
                    localStorage.setItem(USER_LOGIN,JSON.stringify(result.data));
                    localStorage.setItem(TOKEN,JSON.stringify(result.data.content.token));
                    dispatch(actLoginSuccess(result.data));
                    navigate('/');
                }
            })
            .catch((error) => {
                alert('Nhập sai tài khoản hoặc mật khẩu!');
                dispatch(actLoginFail(error));
            })
    }
}