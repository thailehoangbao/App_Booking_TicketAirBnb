import {  FETCH_DANHSACH_PHONGDAT_FAIL, FETCH_DANHSACH_PHONGDAT_REQUEST, FETCH_DANHSACH_PHONGDAT_SUCCESS, MA_PHONG_DAT, THONG_BAO_DA_DAT } from './_constantsDatPhong';

const initialState = {
    loading: false,
    data: null,
    error: null,
    maPhong: null,
    listDSKhachDatTheoMaPhong: null,
    notification: false
}

const danhSachPhongDatReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DANHSACH_PHONGDAT_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };
        }

        case FETCH_DANHSACH_PHONGDAT_SUCCESS: {
            state.loading = false;
            state.error = null;
            state.data = action.payload;
            let dataClone = [...state.data];
            if (state.maPhong) {
                dataClone = dataClone.filter(item => item.maPhong == state.maPhong);
                state.listDSKhachDatTheoMaPhong = dataClone;
            }
            return { ...state };
        }

        case FETCH_DANHSACH_PHONGDAT_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state };
        }

        case MA_PHONG_DAT: {
            state.loading = false;
            state.maPhong = Number(action.payload);
            state.error = null;
            return { ...state };
        }

        case THONG_BAO_DA_DAT: {
            state.loading = false;
            state.notification = action.payload;
            state.error = null;
            return { ...state };
        }

        default:
            return { ...state };
    }
}


export default danhSachPhongDatReducer;