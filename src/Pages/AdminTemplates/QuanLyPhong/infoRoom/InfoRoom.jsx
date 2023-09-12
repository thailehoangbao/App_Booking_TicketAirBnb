import React, { useEffect, useState } from 'react';
import {
    Form,
    Input,
    Radio,
    Select
} from 'antd';
import { RollbackOutlined } from '@ant-design/icons';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { actFetchInfoRoom } from './duckInfoRoom/actInfoRoom';
import TextArea from 'antd/es/input/TextArea';


export default function AddRoom() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const [form] = Form.useForm();
    const { data } = useSelector(state => state.layInfoRoomReducer);
    // console.log(data);
    const info = {
        ...data
    }
    const formik = useFormik({
        initialValues: {
            id: info?.id,
            tenPhong: info?.tenPhong,
            khach: info?.khach,
            phongNgu: info?.phongNgu,
            giuong: info?.giuong,
            phongTam: info?.phongTam,
            moTa: info?.moTa,
            giaTien: info?.giaTien,
            mayGiat: info?.mayGiat,
            banLa: info?.banLa,
            tivi: info?.tivi,
            dieuHoa: info?.dieuHoa,
            wifi: info?.wifi,
            bep: info?.bep,
            doXe: info?.doXe,
            hoBoi: info?.hoBoi,
            banUi: info?.banUi,
            maViTri: info?.maViTri,
            hinhAnh: info?.hinhAnh
        },
        onSubmit: values => {
            // console.log("value", values);

        },
    });

    useEffect(() => {
        dispatch(actFetchInfoRoom(params.id));
    }, [])

    const onChangeRadio = (e) => {
        const { name, value } = e.target;
        formik.setFieldValue(`${[name]}`, value);
    };

    const onChangeNumber = (e) => {
        const { name, value } = e.target;
        formik.setFieldValue(`${[name]}`, Number(value));
    };

    const onChangeSelect = (value) => {
        formik.setFieldValue('maViTri', Number(value))
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
                    <Form.Item label="Tên Phòng" style={{ fontSize: "1.2rem" }} >
                        <Input disabled name="tenPhong" className='rounded-md p-1' style={{ height: "30px" }} onChange={formik.handleChange} value={info?.tenPhong} />
                    </Form.Item>
                    <Form.Item label="Khách" style={{ fontSize: "1.2rem" }} >
                        <Input disabled name="khach" className='rounded-md p-1' style={{ height: "30px" }} onChange={onChangeNumber} value={info?.khach} />
                    </Form.Item>
                    <Form.Item label="Phòng Ngủ" style={{ fontSize: "1.2rem" }} >
                        <Input disabled name="phongNgu" className='rounded-md p-1' style={{ height: "30px" }} onChange={onChangeNumber} value={info?.phongNgu} />
                    </Form.Item>
                    <Form.Item label="Giường" style={{ fontSize: "1.2rem" }} >
                        <Input disabled name="giuong" className='rounded-md p-1' style={{ height: "30px" }} onChange={onChangeNumber} value={info?.giuong} />
                    </Form.Item>
                    <Form.Item label="Phòng Tắm" style={{ fontSize: "1.2rem" }} >
                        <Input disabled name="phongTam" className='rounded-md p-1' style={{ height: "30px" }} onChange={onChangeNumber} value={info?.phongTam} />
                    </Form.Item>
                    <Form.Item label="Mô Tả" style={{ fontSize: "1.2rem" }} >
                        <TextArea disabled style={{ height: "120px", }} onChange={formik.handleChange} value={info?.moTa}/>
                    </Form.Item>
                    <Form.Item label="Mã Vị Trí">
                        <Select disabled name="maViTri" onChange={onChangeSelect} style={{ width: "100%" }} value={info?.maViTri}>
                            
                        </Select>
                    </Form.Item>
                    <Form.Item disabled label="Hình Ảnh" style={{ fontSize: "1.2rem" }}>
                        <input  type="image" src={info?.hinhAnh} onChange={formik.handleChange} name="hinhAnh" className='rounded-md p-1 w-full hover:border-blue-700 cursor-pointer' style={{ height: "80px", border: "0.5px solid #dadada" }} />
                    </Form.Item>
                    <Form.Item onClick={() => {
                        navigate(-1)
                    }}>
                        <RollbackOutlined style={{ fontSize: "24px", marginLeft: "60px" }} />
                        <button type='button' className='text-md bg-blue-500 text-white transition-all duration-500 rounded-md px-4 py-2 hover:text-black hover:bg-pink-500'>GoBack</button>
                    </Form.Item>
                </div>
                <div>
                    <Form.Item label="Giá Tiền" style={{ fontSize: "1.2rem" }} >
                        <Input disabled name="giaTien" className='rounded-md p-1' style={{ height: "30px" }} onChange={onChangeNumber} value={info?.giaTien} />
                    </Form.Item>
                    <Form.Item label="Máy Giặt" style={{ fontSize: "1.2rem" }} >
                        <Radio.Group disabled name="mayGiat" onChange={onChangeRadio} value={info?.mayGiat}>
                            <Radio value={true}>Có</Radio>
                            <Radio value={false}>Không</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Bàn Là" style={{ fontSize: "1.2rem" }} >
                        <Radio.Group disabled name="banLa" onChange={onChangeRadio} value={info?.banLa}>
                            <Radio value={true}>Có</Radio>
                            <Radio value={false}>Không</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Tivi" style={{ fontSize: "1.2rem" }} >
                        <Radio.Group disabled name="tivi" onChange={onChangeRadio} value={info?.tivi}>
                            <Radio value={true}>Có</Radio>
                            <Radio value={false}>Không</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Bàn ủi" style={{ fontSize: "1.2rem" }} >
                        <Radio.Group disabled name="banUi" onChange={onChangeRadio} value={info?.banUi}>
                            <Radio value={true}>Có</Radio>
                            <Radio value={false}>Không</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Điều Hòa" style={{ fontSize: "1.2rem" }} >
                        <Radio.Group disabled name="dieuHoa" onChange={onChangeRadio} value={info?.dieuHoa}>
                            <Radio value={true}>Có</Radio>
                            <Radio value={false}>Không</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Wifi" style={{ fontSize: "1.2rem" }} >
                        <Radio.Group disabled name="wifi" onChange={onChangeRadio} value={info?.wifi}>
                            <Radio value={true}>Có</Radio>
                            <Radio value={false}>Không</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Bếp" style={{ fontSize: "1.2rem" }} >
                        <Radio.Group disabled name="bep" onChange={onChangeRadio} value={info?.bep}>
                            <Radio value={true}>Có</Radio>
                            <Radio value={false}>Không</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item  label="Đỗ Xe" style={{ fontSize: "1.2rem" }} >
                        <Radio.Group disabled name="doXe" onChange={onChangeRadio} value={info?.doXe}>
                            <Radio value={true}>Có</Radio>
                            <Radio value={false}>Không</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item  label="Hồ bơi" style={{ fontSize: "1.2rem" }} >
                        <Radio.Group disabled name="hoBoi" onChange={onChangeRadio} value={info?.hoBoi}>
                            <Radio value={true}>Có</Radio>
                            <Radio value={false}>Không</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <button className='text-white bg-slate-500 ml-60 rounded-md p-2 hover:text-black transition-all duration-500 hover:bg-pink-500' style={{ width: "150px", height: "36px" }} type='submit' onClick={() => {
                        navigate(`../edit-room/${params.id}`)
                    }}>Edit Room</button>
                </div>
            </div>
        </Form>
    )
}
