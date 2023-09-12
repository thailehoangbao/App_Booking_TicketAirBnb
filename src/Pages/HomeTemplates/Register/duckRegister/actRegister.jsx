import api from 'Utils/apiUtils';
import {FETCH_REGISTER_FAIL,FETCH_REGISTER_REQUEST,FETCH_REGISTER_SUCCESS} from './_constantsRegister';


const actRegisterSuccess = (data) => {
    return {
        type:FETCH_REGISTER_SUCCESS,
        payload: data
    }
}

const actRegisterFail = (error) => {
    return {
        type: FETCH_REGISTER_FAIL,
        payload: error
    }
}

const actRegisterRequest = () => {
    return {
        type: FETCH_REGISTER_REQUEST,
    }
}


export const actFetchRegister = (form,navigate) => {
    return (dispatch) => {
        dispatch(actRegisterRequest());
        api
            .post(`auth/signup`,form)
            .then((result) => {
                if (result.status === 200) {
                    // console.log("Thành Công",result.data);
                    alert('Bạn đăng ký thành công!');
                    dispatch(actRegisterSuccess(result.data));
                    navigate('/login');
                }
            })
            .catch((error) => {
                // console.log("error",error);
                dispatch(actRegisterFail(error));
            })
    }
}

