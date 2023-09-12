import { TOKEN, USER_LOGIN } from 'Utils/_constantsUtils';
import {FETCH_UPLOAD_IMG_FAIL,FETCH_UPLOAD_IMG_REQUEST,FETCH_UPLOAD_IMG_SUCCESS} from './_constantsUploadimg';
import api from 'Utils/apiUtils';

const actUploadImgUserSuccess = (data) => {
    return {
        type:FETCH_UPLOAD_IMG_SUCCESS,
        payload: data
    }
}

const actUploadImgUserFail = (error) => {
    return {
        type: FETCH_UPLOAD_IMG_FAIL,
        payload: error
    }
}

const actUploadImgUserRequest = () => {
    return {
        type: FETCH_UPLOAD_IMG_REQUEST,
    }
}


export const actFetchUploadImgUser = (form,navigate) => {
    return (dispatch) => {
        dispatch(actUploadImgUserRequest());
        api
            .post(`users/upload-avatar`,form)
            .then((result) => {
                if (result.status === 200) {
                    // console.log("Thành Công",result.data.content);
                    dispatch(actUploadImgUserSuccess(result.data));
                    alert('Bạn đã cập nhật ảnh thành công!');
                    localStorage.removeItem(USER_LOGIN);
                    localStorage.removeItem(TOKEN);
                    navigate('/login');
                }
            })
            .catch((error) => {
                // console.log(error);
                dispatch(actUploadImgUserFail(error));
            })
    }
}