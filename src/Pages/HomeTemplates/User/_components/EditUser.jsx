import { USER_LOGIN } from 'Utils/_constantsUtils';
import { Form, Input, Button, Select, DatePicker } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { actFetchUser } from '../duckUser/actUser';
import { actIsOpenModalEditUser } from './duckEditUser/actEditUser';

const { Item } = Form;
const { Option } = Select;
export default function EditUser(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem(USER_LOGIN))?.content.user;
    const onFinish = (values) => {
        // Xử lý khi form được submit
        const user = {
            ...values,
            birthday: values.birthday.format('DD/MM/YYYY')
        }
        dispatch(actFetchUser(user, navigate));
        dispatch(actIsOpenModalEditUser(true));
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
        <div className='modal-edit-user'>
            <section className="p-6 bg-gray-400 dark:text-gray-50">
                <Form method="#" action="#" className="mt-10" onFinish={onFinish}>
                    <div className="mt-7">
                        <Item
                            name="id"
                            label="id"
                            initialValue={user?.id}
                        >
                            <Input disabled={true}/>
                        </Item>
                    </div>

                    <div>
                        <Item
                            name="email"
                            label="Email"
                            initialValue={user?.email}
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
                            initialValue={user?.password}
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
                            initialValue={user?.name}
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
                            initialValue={user?.phone}
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
                            initialValue={user?.gender}
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
                            initialValue={user?.role}
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
                        <span className='text-sm ml-40 mt-0 pt-0 text-gray-700'>
                            Date Prev :
                            {user?.birthday}
                        </span>
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
                        <button className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105" onClick={() => {
                            dispatch(actIsOpenModalEditUser(true)); 
                        }}>
                            Go Back
                        </button>
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
            </section>
        </div>
    )
}
