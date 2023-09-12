import React, { useEffect, useState } from 'react';
import {
  Form,
  Input,
} from 'antd';
import { RollbackOutlined } from '@ant-design/icons';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actFetchAddViTRi } from './duckAddVitri/actAddViTri';


export default function AddViTri() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [imgSrc, setImgSrc] = useState('');
  const formik = useFormik({
    initialValues: {
      id: 0,
      tenViTri: null,
      tinhThanh: null,
      quocGia: null,
      hinhAnh: null
    },
    onSubmit: values => {
      // console.log("value", values);
      dispatch(actFetchAddViTRi(values,navigate));
    },
  });

  const handleChangeImg = (e) => {
    setImgSrc(e.target.value);
    formik.setFieldValue('hinhAnh',e.target.value);
  }

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
          <Form.Item label="Tên Vị Trí" style={{ fontSize: "1.2rem" }} >
            <Input name="tenViTri" className='rounded-md p-1' style={{ height: "30px" }} onChange={formik.handleChange} value={formik.values.tenViTri} />
          </Form.Item>
          <Form.Item label="Hình Ảnh" style={{ fontSize: "1.2rem" }}>
            <input type="text" onChange={handleChangeImg} name="hinhAnh" className='rounded-md p-1 w-full hover:border-blue-700 cursor-pointer' style={{ height: "30px",border:"0.5px solid #dadada" }} />
            <input  type="image" src={imgSrc === "" ? formik.values.hinhAnh : imgSrc} onChange={formik.handleChange} alt={formik.values.tenViTri } name="hinhAnh" className='rounded-md mt-2 p-1 w-full hover:border-blue-700 cursor-pointer' style={{ height: "160px", border: "0.5px solid #dadada" }} />
          </Form.Item>
          <Form.Item onClick={() => {
            navigate(-1)
          }}>
            <RollbackOutlined style={{ fontSize: "24px", marginLeft: "60px" }} />
            <button type='button' className='text-md bg-blue-500 text-white transition-all duration-500 rounded-md px-4 py-2 hover:text-black hover:bg-pink-500'>GoBack</button>
          </Form.Item>
        </div>
        <div>
          <Form.Item label="Tỉnh Thành" style={{ fontSize: "1.2rem" }} >
            <Input name="tinhThanh" className='rounded-md p-1' style={{ height: "30px" }} onChange={formik.handleChange} value={formik.values.tinhThanh} />
          </Form.Item>
          <Form.Item label="Quốc Gia" style={{ fontSize: "1.2rem" }} >
            <Input name="quocGia" className='rounded-md p-1' style={{ height: "30px" }} onChange={formik.handleChange} value={formik.values.quocGia} />
          </Form.Item>
          <button className='text-white bg-slate-500 ml-60 rounded-md p-2 hover:text-black transition-all duration-500 hover:bg-pink-500' style={{ width: "150px", height: "36px" }} type='submit' onClick={formik.handleSubmit}>Thêm Vị Trí</button>
        </div>
      </div>
    </Form>
  )
}
