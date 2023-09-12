import React, { useEffect } from 'react';
import {
  Form,
  Input,
  Select,
} from 'antd';
import { RollbackOutlined } from '@ant-design/icons';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { actFetchInfoBookRoom } from './infoBookRoom/actInfoBookRoom';
import { formatDateToDDMMYYYY } from 'Utils/_constantsUtils';


export default function InfoBookRoom() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const [form] = Form.useForm();
  const { data } = useSelector(state => state.layInfoBookRoomReducer);
  const info = {
    ...data,
  }
  info.ngayDen = formatDateToDDMMYYYY(info.ngayDen);
  info.ngayDi = formatDateToDDMMYYYY(info.ngayDi);
  const formik = useFormik({
    initialValues: {
      id: info?.id,
      maPhong: info?.maPhong,
      ngayDen: info?.ngayDen,
      ngayDi: info?.ngayDi,
      soLuongKhach: info?.soLuongKhach,
      maNguoiDung: info?.maNguoiDung
    },
    onSubmit: values => {
      console.log("value", values);

    },
  });

  useEffect(() => {
    dispatch(actFetchInfoBookRoom(params.id));
  }, [])

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
            <Input disabled name="soLuongKhach" className='rounded-md p-1' style={{ height: "30px" }} value={info?.soLuongKhach} />
          </Form.Item>
          <Form.Item label="Mã ND" style={{ fontSize: "1.2rem" }} >
            <Input disabled name="maNguoiDung" className='rounded-md p-1' style={{ height: "30px" }} value={info?.maNguoiDung} />
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
            <Select disabled name="maPhong" style={{ width: "100%" }} value={info?.maPhong}>

            </Select>
          </Form.Item>
          <Form.Item label="Ngày Đến" style={{ fontSize: "1.2rem" }} >
            <Input disabled name='ngayDen' type='text' value={info?.ngayDen} />
          </Form.Item>
          <Form.Item label="Ngày Đi" style={{ fontSize: "1.2rem" }} >
            <Input disabled name='ngayDi' type='text' value={info?.ngayDi} />
          </Form.Item>
          <button className='text-white bg-slate-500 ml-60 rounded-md p-2 hover:text-black transition-all duration-500 hover:bg-pink-500' style={{ width: "150px", height: "36px" }} type='submit' onClick={() => {
            navigate(`../edit-bookroom/${params.id}`)
          }}>Edit</button>
        </div>
      </div>
    </Form>
  )
}
