import React, { useEffect } from 'react';
import {
  Form,
  Input,
  Select,
  DatePicker,
} from 'antd';
import { RollbackOutlined } from '@ant-design/icons';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {  convertDateFormat } from 'Utils/_constantsUtils';
import { actFetchInfoBookRoom } from '../infoBookRoom/infoBookRoom/actInfoBookRoom';
import moment from 'moment/moment';
import { actFetchDanhSachBookRoom } from '../dashboardBookRoom/duckBookRoom/actBookRoom';
import { actFetchEditBookRoom } from './duckEditBookRoom/actEditBookRoom';



export default function EditBookRoom() {
  const { Option } = Select;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const [form] = Form.useForm();
  const listBookRoom = useSelector(state => state.layDanhSachBookRoomReducer);
  const {data} = useSelector(state => state.layInfoBookRoomReducer);
  
  const listRoomTheoMaPhong = listBookRoom?.data?.filter((obj, index, self) => {
    const ids = self.map(item => item.maPhong);
    return ids.indexOf(obj.maPhong) === index;
  });
  
  const room = {
    ...data,
  }
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: room?.id,
      maPhong: room?.maPhong,
      ngayDen: room?.ngayDen,
      ngayDi: room?.ngayDi,
      soLuongKhach: room?.soLuongKhach,
      maNguoiDung: room?.maNguoiDung
    },
    onSubmit: values => {
      // console.log("value", values);
      dispatch(actFetchEditBookRoom(params.id,values));
    },
  });

  useEffect(() => {
    dispatch(actFetchInfoBookRoom(params.id));
    dispatch(actFetchDanhSachBookRoom());
    dispatch(actFetchInfoBookRoom(params.id));
  },[])

  const onChangeNumber = (e) => {
    const { name, value } = e.target;
    formik.setFieldValue(`${[name]}`, Number(value));
  };
  const onChangeSelect = (value) => {
    formik.setFieldValue('maPhong', Number(value))
  }

  const renderOptionVitri = () => {
    return listRoomTheoMaPhong?.map((item, index) => {
      return <Option value={`${item.id}`} key={index}>{item.tenViTri}</Option>
    })
  }

  const handleDateNgayDen = (date, dateString) => {
    if (dateString) {
      const newDate = convertDateFormat(dateString);
      console.log(newDate);
      formik.setFieldValue('ngayDen', newDate);
      return;
    } 
    formik.setFieldValue('ngayDen', '');
  };

  const handleDateNgayDi = (date, dateString) => {
    if (dateString) {
      const newDate = convertDateFormat(dateString);
      formik.setFieldValue('ngayDi', newDate);
      return;
    }
    formik.setFieldValue('ngayDi', '');
  };

  return (
    <Form
      onSubmitCapture={formik.handleSubmit}
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      form={form}
      style={{
        maxWidth: "100%",
        padding: "24px"
      }}
    >
      <div className='grid grid-cols-2 w-full'>
        <div>
          <Form.Item label="SL Khách" style={{ fontSize: "1.2rem" }} >
            <Input name="soLuongKhach" className='rounded-md p-1' style={{ height: "30px" }} onChange={onChangeNumber} value={formik.values.soLuongKhach} />
          </Form.Item>
          <Form.Item label="Mã ND" style={{ fontSize: "1.2rem" }} >
            <Input disabled name="maNguoiDung" className='rounded-md p-1' style={{ height: "30px" }} onChange={formik.handleChange} value={formik.values.maNguoiDung} />
          </Form.Item>
          <Form.Item onClick={() => {
            navigate(-1)
          }}>
            <RollbackOutlined style={{ fontSize: "24px", marginLeft: "60px" }} />
            <button type='button' className='text-md bg-blue-500 text-white transition-all duration-500 rounded-md px-4 py-2 hover:text-black hover:bg-pink-500'>GoBack</button>
          </Form.Item>
        </div>
        <div>
          <Form.Item label="Mã Phòng">
            <Select name="maPhong" onChange={onChangeSelect} style={{ width: "100%" }} value={formik.values.maPhong}>
              {renderOptionVitri()}
            </Select>
          </Form.Item>
          <Form.Item label="Ngày Đến" style={{ fontSize: "1.2rem" }} >
            <DatePicker name='ngayDen' format="DD/MM/YYYY" onChange={handleDateNgayDen} />
            <br />
            <label className='text-sm text-gray-400'>Default Value: </label>
            <input type="text" name="ngayDen" className='text-sm text-gray-500' value={moment(room?.ngayDen).format('DD/MM/YYYY')} disabled/>
          </Form.Item>
          <Form.Item label="Ngày Đi" style={{ fontSize: "1.2rem" }} >
            <DatePicker name='ngayDi' format="DD/MM/YYYY" onChange={handleDateNgayDi} />
            <br />
            <label className='text-sm text-gray-400'>Default Value: </label>
            <input type="text" name="ngayDen" className='text-sm text-gray-500' value={moment(room?.ngayDi).format('DD/MM/YYYY')} disabled/>
          </Form.Item>
          <button className='text-white bg-slate-500 ml-60 rounded-md p-2 hover:text-black transition-all duration-500 hover:bg-pink-500' style={{ width: "150px", height: "36px" }} type='submit' onClick={formik.handleSubmit}>Đặt Phòng</button>
        </div>
      </div>
    </Form>
  )
}
