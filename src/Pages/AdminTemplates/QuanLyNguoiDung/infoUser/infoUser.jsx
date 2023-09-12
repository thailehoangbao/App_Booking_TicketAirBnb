import React, { useEffect } from 'react';
import {
    Select,
    Form,
    Input,
} from 'antd';
import { RollbackOutlined } from '@ant-design/icons';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate, useParams } from 'react-router-dom';
import { actFetchInfoUser } from './duckInfoUser/actInfoUser';


export default function InfoUser() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const [form] = Form.useForm();
    const {data} = useSelector(state => state.layInfoUserReducer)
    // console.log("info", data);
    const info = {
        ...data,
    }
    const formik = useFormik({
        initialValues: {
            id: info?.id,
            name: info?.name,
            password: info?.password,
            email: info?.email,
            phone: info?.phone,
            gender: info?.gender,
            role: info?.role,
            birthday: info?.birthday
        },
        onSubmit: values => {
            console.log("value", values);

        },
    });
    useEffect(() => {
        dispatch(actFetchInfoUser(params.id));
    },[])
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
                        <Input disabled name="email" className='rounded-md p-1' style={{ height: "30px" }} onChange={formik.handleChange} value={info?.email} />
                    </Form.Item>
                    <Form.Item label="Họ tên" style={{ fontSize: "1.2rem" }} >
                        <Input disabled name="name" className='rounded-md p-1' style={{ height: "30px" }} onChange={formik.handleChange} value={info?.name} />
                    </Form.Item>
                    <Form.Item label="Số DT" style={{ fontSize: "1.2rem" }} >
                        <Input disabled name="phone" className='rounded-md p-1' style={{ height: "30px" }} onChange={formik.handleChange} value={info?.phone} />
                    </Form.Item>
                    <Form.Item  label="Gender" style={{ fontSize: "1.2rem" }} >
                        <Select
                            disabled
                            defaultValue={info?.gender ? 'NAM' : 'NỮ'}
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
                        <Input disabled name="password" type='password' className='rounded-md p-1' style={{ height: "30px" }} onChange={formik.handleChange} value={info?.password} />
                    </Form.Item>
                    <Form.Item label="Birthday" style={{ fontSize: "1.2rem" }} >
                        <Input disabled name="birthday" type='text' className='rounded-md p-1' style={{ height: "30px" }} onChange={formik.handleChange} value={info?.birthday} />
                    </Form.Item>
                    <Form.Item disabled label="Role" style={{ fontSize: "1.2rem" }} >
                        <Select
                            disabled
                            defaultValue={info?.role === 'USER' ? 'USER' : 'ADMIN'}
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
                    <button className='text-white bg-slate-500 ml-60 rounded-md p-2 hover:text-black transition-all duration-500 hover:bg-pink-500' style={{ width: "150px", height: "36px" }} type='submit' onClick={() => {
                        navigate(`../edit-user/${params.id}`)
                    }}>Edit</button>
                </div>
            </div>
        </Form>
    )
}