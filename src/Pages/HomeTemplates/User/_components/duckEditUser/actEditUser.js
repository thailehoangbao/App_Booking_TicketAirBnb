import {IS_OPEN_MODAL} from './_constantsEditUser';

export const actIsOpenModalEditUser = (isModal) => {
    return {
        type:IS_OPEN_MODAL,
        payload: isModal
    }
}
