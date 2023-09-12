import layDanhSachBookRoomReducer from 'Pages/AdminTemplates/QuanLyDatPhong/dashboardBookRoom/duckBookRoom/reducerBookRoom';
import layInfoBookRoomReducer from 'Pages/AdminTemplates/QuanLyDatPhong/infoBookRoom/infoBookRoom/reducerInfoBookRoom';
import layDanhSachNguoiDungReducer from 'Pages/AdminTemplates/QuanLyNguoiDung/dashboardUser/duckDashboardUser/reducerDashboardUser';
import layInfoUserReducer from 'Pages/AdminTemplates/QuanLyNguoiDung/infoUser/duckInfoUser/reducerInfoUser';
import layDanhSachRoomReducer from 'Pages/AdminTemplates/QuanLyPhong/dashboardRoom/duckDashboardRoom/reducerDashboardRoom';
import layInfoRoomReducer from 'Pages/AdminTemplates/QuanLyPhong/infoRoom/duckInfoRoom/reducerInfoRoom';
import layDanhSachViTriReducer from 'Pages/AdminTemplates/QuanLyViTri/dashboardViTri/duckViTri/reducerDashboardViTri';
import layInfoViTriReducer from 'Pages/AdminTemplates/QuanLyViTri/infoViTri/duckInfoViTri/reducerInfoVitri';
import binhLuanThueReducer from 'Pages/HomeTemplates/DetailPage/BinhLuan/duckBinhLuan/reducerBinhLuan';
import danhSachPhongDatReducer from 'Pages/HomeTemplates/DetailPage/PopupDatPhong/duckDatPhong/reducerDatPhong';
import modalDetailSuccessReducer from 'Pages/HomeTemplates/DetailPage/_components/Modal/duckModal/reducerModal';
import chiTietPhongThueReducer from 'Pages/HomeTemplates/DetailPage/duckDetail/reducerDetail';
import listPhongThueReducer from 'Pages/HomeTemplates/HomePage/ListPhongThue/duckListPhongThue/reducerListPhongThue';
import viTriTimKiemReducer from 'Pages/HomeTemplates/HomePage/ListViTri/duckViTri/reducerViTri';
import phongThueTheoMaViTriReducer from 'Pages/HomeTemplates/SearchPage/duckSearchPage/reducerSearchPage';
import isOpenModalEditUserReducer from 'Pages/HomeTemplates/User/_components/duckEditUser/reducerEditUser';
import listPhongDaDatUserReducer from 'Pages/HomeTemplates/User/duckListDatPhong/reducerUserDatPhong';
import {combineReducers} from 'redux';
const rootReducer = combineReducers({
    listPhongThueReducer: listPhongThueReducer,
    viTriTimKiemReducer: viTriTimKiemReducer,
    chiTietPhongThueReducer: chiTietPhongThueReducer,
    phongThueTheoMaViTriReducer: phongThueTheoMaViTriReducer,
    binhLuanThueReducer: binhLuanThueReducer,
    danhSachPhongDatReducer: danhSachPhongDatReducer,
    listPhongDaDatUserReducer: listPhongDaDatUserReducer,
    layDanhSachNguoiDungReducer: layDanhSachNguoiDungReducer,
    layInfoUserReducer: layInfoUserReducer,
    layDanhSachRoomReducer: layDanhSachRoomReducer,
    layInfoRoomReducer: layInfoRoomReducer,
    layDanhSachViTriReducer: layDanhSachViTriReducer,
    layInfoViTriReducer: layInfoViTriReducer,
    layDanhSachBookRoomReducer: layDanhSachBookRoomReducer,
    layInfoBookRoomReducer: layInfoBookRoomReducer,
    modalDetailSuccessReducer: modalDetailSuccessReducer,
    isOpenModalEditUserReducer: isOpenModalEditUserReducer
});

export default rootReducer;