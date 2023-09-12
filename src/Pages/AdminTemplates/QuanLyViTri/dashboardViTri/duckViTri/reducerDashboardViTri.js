import {SEARCH_VITRI_DASHBOARD,FETCH_DANH_SACH_VITRI_FAIL,FETCH_DANH_SACH_VITRI_REQUEST,FETCH_DANH_SACH_VITRI_SUCCESS} from './_constantsDashboardViTri';

const initialState = {
    loading: false,
    data: null,
    error: null,
    searchData: null,
}

const layDanhSachViTriReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DANH_SACH_VITRI_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };
        }

        case FETCH_DANH_SACH_VITRI_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.searchData = action.payload;
            state.error = null;
            return { ...state };
        }

        case FETCH_DANH_SACH_VITRI_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state };
        }

        case SEARCH_VITRI_DASHBOARD: {
            state.loading = false;
            state.error = action.payload;
            if (state.data) {
                let dataClone = [...state.data];
                let searchDataClone = dataClone.filter(item => {
                    let key = String(item.tenViTri);
                    if (typeof key === 'string') {
                        return key.toLowerCase().includes(action.payload.toLowerCase())
                    }
                })
                state.searchData = searchDataClone;
            }
            return { ...state };
        }


        default:
            return { ...state };
    }
}


export default layDanhSachViTriReducer;