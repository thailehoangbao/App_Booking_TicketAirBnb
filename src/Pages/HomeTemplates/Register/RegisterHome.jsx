import React from 'react';
import { Form, Input, Button, Select, DatePicker } from 'antd';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { actFetchRegister } from './duckRegister/actRegister';

const { Item } = Form;
const { Option } = Select;
export default function RegisterHome() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = (values) => {
    // Xử lý khi form được submit
    const user = {
      ...values,
      birthday: values.birthday.format('DD-MM-YYYY')
    }
    // console.log(user);
    dispatch(actFetchRegister(user, navigate));
  };

  const validateEmail = (_, value) => {
    // Kiểm tra định dạng email
    if (!value || /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
      return Promise.resolve();
    }
    return Promise.reject('Vui lòng nhập đúng định dạng email!');
  };

  const validatePassword = (_, value) => {
    // Kiểm tra độ dài mật khẩu
    if (!value || value.length >= 6) {
      return Promise.resolve();
    }
    return Promise.reject('Mật khẩu phải có ít nhất 6 ký tự!');
  };

  const validateName = (_, value) => {
    if (!value) {
      return Promise.resolve();
    }
    return Promise.resolve('');
  }

  const validatePhone = (_, value) => {
    if (!value || /^(?:\+84|0)(?:\d{9}|[1-9]\d{8})$/.test(value)) {
      return Promise.resolve();
    }
    return Promise.reject('Vui lòng nhập đúng số điện thoại!');
  }

  return (
    <div className="font-sans">
      <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
        <div className="relative sm:max-w-sm w-full">
          <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6" />
          <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6" />
          <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
            <label className="block mt-3 text-lg text-gray-700 text-center font-semibold">
              WELCOME TO REGISTER
            </label>
            <Form method="#" action="#" className="mt-10" onFinish={onFinish}>
              <div>
                <Item
                  name="email"
                  label="Email"
                  rules={[
                    { required: true, message: 'Vui lòng nhập email!' },
                    { validator: validateEmail },
                  ]}
                >
                  <Input />
                </Item>
              </div>
              <div className="mt-7">
                <Item
                  name="password"
                  label="Mật khẩu"
                  rules={[
                    { required: true, message: 'Vui lòng nhập mật khẩu!' },
                    { validator: validatePassword },
                  ]}
                >
                  <Input.Password />
                </Item>
              </div>

              <div className="mt-7">
                <Item
                  name="name"
                  label="Họ Tên"
                  rules={[
                    { required: true, message: 'Vui lòng nhập họ tên!' },
                    { validator: validateName },
                  ]}
                >
                  <Input />
                </Item>
              </div>

              <div className="mt-7">
                <Item
                  name="phone"
                  label="Phone Number"
                  rules={[
                    { required: true, message: 'Vui lòng không để trống!' },
                    { validator: validatePhone },
                  ]}
                >
                  <Input />
                </Item>
              </div>

              <div className='mt-7'>
                <Form.Item
                  name="gender"
                  label="Giới tính"
                  rules={[{ required: true, message: 'Vui lòng chọn giới tính!' }]}
                >
                  <Select placeholder="Chọn giới tính">
                    <Option value={true}>Nam</Option>
                    <Option value={false}>Nữ</Option>
                  </Select>
                </Form.Item>
              </div>

              <div className='mt-7'>
                <Form.Item
                  name="role"
                  label="Loại Người Dùng"
                  rules={[{ required: true, message: 'Vui lòng chọn loại người dùng!' }]}
                >
                  <Select placeholder="Chọn Loại Người Dùng">
                    <Option value='ADMIN'>ADMIN</Option>
                    <Option value='USER'>USER</Option>
                  </Select>
                </Form.Item>
              </div>

              <div className='mt-7'>
                <Form.Item
                  name="birthday"
                  label="Ngày tháng năm sinh"
                  rules={[{ required: true, message: 'Vui lòng chọn ngày tháng năm sinh!' }]}
                >
                  <DatePicker style={{ width: '100%' }} format="DD/MM/YYYY" />
                </Form.Item>
              </div>


              <div className="mt-7 flex justify-center items-center">
                <Item className='mb-0'>
                  <Button type="primary" htmlType="submit" className='p-5 flex justify-center items-center bg-yellow-600'>
                    REGISTER
                  </Button>
                </Item>
              </div>
              <div className="flex mt-7 items-center text-center">
                <hr className="border-gray-300 border-1 w-full rounded-md" />
                <label className="block font-medium text-sm text-gray-600 w-full">
                  Login with
                </label>
                <hr className="border-gray-300 border-1 w-full rounded-md" />
              </div>
              <div className="flex mt-7 justify-center w-full">
                <NavLink to='/login' className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                  Login
                </NavLink>
                <NavLink to='/' className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                  Go Home
                </NavLink>
              </div>
              <div className="mt-7">
                <div className="flex justify-center items-center">
                  <label className="mr-2">Learn More</label>
                  <a href="#" className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                    Contact us
                  </a>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>

  )
}
