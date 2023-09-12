import React from 'react';
import { Form, Input, Button } from 'antd';

const { Item } = Form;

const RegisterAuth = () => {
  const onFinish = (values) => {
    // Xử lý khi form được submit
    // console.log(values);
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

  return (
    <Form onFinish={onFinish}>
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
      <Item
        name="username"
        label="Tài khoản"
        rules={[{ required: true, message: 'Vui lòng nhập tài khoản!' }]}
      >
        <Input />
      </Item>
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
      <Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Item>
    </Form>
  );
};

export default RegisterAuth;