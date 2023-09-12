import {IS_OPEN_MODAL} from './_constantModal';

const initialState = {
    isOpenModal: false,
}

const modalDetailSuccessReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_OPEN_MODAL: {
            state.isOpenModal = action.payload;
            return { ...state };
        }


        default:
            return { ...state };
    }
}


export default modalDetailSuccessReducer;