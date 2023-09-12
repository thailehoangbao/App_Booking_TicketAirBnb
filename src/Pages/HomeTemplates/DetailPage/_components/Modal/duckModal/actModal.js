import {IS_OPEN_MODAL} from './_constantModal';

export const actModalDetailSuccess = (data) => {
    return {
        type:IS_OPEN_MODAL,
        payload: data
    }
}