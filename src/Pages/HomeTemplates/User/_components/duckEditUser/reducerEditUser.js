import {IS_OPEN_MODAL} from './_constantsEditUser';

const initialState = {
    isModal: true,
}

const isOpenModalEditUserReducer = (state = initialState, action) => {
    switch (action.type) {

        case IS_OPEN_MODAL: {
            state.isModal = action.payload;
            return { ...state };
        }

        default:
            return { ...state };
    }
}


export default isOpenModalEditUserReducer;