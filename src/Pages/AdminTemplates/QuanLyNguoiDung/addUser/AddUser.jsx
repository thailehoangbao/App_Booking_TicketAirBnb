import React from 'react';
import {
  Select,
  Form,
  Input,
  DatePicker,
} from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, RollbackOutlined } from '@ant-design/icons';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actFetchAddUser } from './duckAddUser/actAddUser';
export default function AddUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
      email: '',
      phone: '',
      gender: true,
      role: 'USER',
      birthday: ''
    },
    onSubmit: values => {
      console.log("value", values);
      dispatch(actFetchAddUser(values));
    },
  });
  const handleRoleChange = value => {
    formik.setFieldValue('role', value); // Cập nhật giá trị 'role' trong formik state
  };
  const handleGenderChange = value => {
    formik.setFieldValue('gender', value); // Cập nhật giá trị 'role' trong formik state
  };
  const handleDateChange = (date, dateString) => {
    formik.setFieldValue('birthday', dateString);
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
          <Form.Item label="Email" style={{ fontSize: "1.2rem" }} >
            <Input name="email" className='rounded-md p-1' style={{ height: "30px" }} onChange={formik.handleChange} value={formik.values.email} />
          </Form.Item>
          <Form.Item label="Họ tên" style={{ fontSize: "1.2rem" }} >
            <Input name="name" className='rounded-md p-1' style={{ height: "30px" }} onChange={formik.handleChange} value={formik.values.name} />
          </Form.Item>
          <Form.Item label="Số DT" style={{ fontSize: "1.2rem" }} >
            <Input name="phone" className='rounded-md p-1' style={{ height: "30px" }} onChange={formik.handleChange} value={formik.values.phone} />
          </Form.Item>
          <Form.Item label="Gender" style={{ fontSize: "1.2rem" }} >
            <Select
              defaultValue='NAM'
              name="gender"
              style={{
                width: 280,
              }}
              className='rounded-md'
              onChange={value => {
                // formik.handleChange('gender')(value); // Gọi handleChange để cập nhật giá trị trong formik state
                handleGenderChange(value); // Gọi hàm để cập nhật giá trị role
              }}
              options={[
                {
                  value: true,
                  label: 'NAM',
                },
                {
                  value: false,
                  label: 'NỮ',
                },
              ]}
            />
          </Form.Item>
          <Form.Item onClick={() => {
            navigate(-1)
          }}>
            <RollbackOutlined style={{ fontSize: "24px", marginLeft: "60px" }} />
            <button type='button' className='text-md bg-blue-500 text-white transition-all duration-500 rounded-md px-4 py-2 hover:text-black hover:bg-pink-500'>GoBack</button>
          </Form.Item>
        </div>
        <div>
          <Form.Item label="Mật Khẩu" style={{ fontSize: "1.2rem" }} >
            <Input.Password name="password" type='password' className='rounded-md p-1' style={{ height: "30px" }} onChange={formik.handleChange} value={formik.values.password} iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}/>
          </Form.Item>
          <Form.Item label="Birthday" style={{ fontSize: "1.2rem" }} >
            <DatePicker name='birthday' format="DD/MM/YYYY" onChange={handleDateChange} />
          </Form.Item>
          <Form.Item label="Role" style={{ fontSize: "1.2rem" }} >
            <Select
              defaultValue="USER"
              initialValues="USER"
              style={{
                width: 280,
              }}
              name="role"
              className='rounded-md'
              onChange={value => {
                formik.handleChange('role')(value); // Gọi handleChange để cập nhật giá trị trong formik state
                handleRoleChange(value); // Gọi hàm để cập nhật giá trị role
              }}
              options={[
                {
                  value: 'USER',
                  label: 'USER',
                },
                {
                  value: 'ADMIN',
                  label: 'ADMIN',
                },
              ]}
            />
          </Form.Item>
          <button className='text-white bg-slate-500 ml-60 rounded-md p-2 hover:text-black transition-all duration-500 hover:bg-pink-500' style={{ width: "150px", height: "36px" }} type='submit' onClick={formik.handleSubmit}>Thêm Người Dùng</button>
        </div>
      </div>
    </Form>
  )
}
