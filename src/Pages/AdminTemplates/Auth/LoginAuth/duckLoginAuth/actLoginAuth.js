import {FETCH_LOGIN_ADMIN_FAIL,FETCH_LOGIN_ADMIN_REQUEST,FETCH_LOGIN_ADMIN_SUCCESS} from './_constantsLoginAuth';

import { TOKEN, USER_LOGIN } from 'Utils/_constantsUtils';
import api from 'Utils/apiUtils';

const actLoginAdminSuccess = (data) => {
    return {
        type:FETCH_LOGIN_ADMIN_SUCCESS,
        payload: data
    }
}

const actLoginAdminFail = (error) => {
    return {
        type: FETCH_LOGIN_ADMIN_FAIL,
        payload: error
    }
}

const actLoginAdminRequest = () => {
    return {
        type: FETCH_LOGIN_ADMIN_REQUEST,
    }
}


export const actFetchLoginAdmin = (form,navigate) => {
    return (dispatch) => {
        dispatch(actLoginAdminRequest());
        api
            .post(`auth/signin`,form)
            .then((result) => {
                // console.log(result);
                if (result.status === 200) {
                    console.log("Thành Công",result.data);
                    if (result.data.content.user.role == 'ADMIN') {
                        alert('Bạn đăng nhập thành công!');
                        localStorage.setItem(USER_LOGIN,JSON.stringify(result.data));
                        localStorage.setItem(TOKEN,JSON.stringify(result.data.content.token));
                        dispatch(actLoginAdminSuccess(result.data));
                        navigate('/admin');
                    } 
                    if (result.data.content.user.role !== 'ADMIN') {
                        alert('Bạn không có quyền truy cập!');
                    }
                    
                }
            })
            .catch((error) => {
                alert('Nhập sai tài khoản hoặc mật khẩu!')
                dispatch(actLoginAdminFail(error));
            })
    }
}