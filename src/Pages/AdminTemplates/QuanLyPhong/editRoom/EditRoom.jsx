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
import { actFetchViTriTimKiem } from 'Pages/HomeTemplates/HomePage/ListViTri/duckViTri/actViTri';
import { actFetchInfoRoom } from '../infoRoom/duckInfoRoom/actInfoRoom';
import { actFetchEditRoom } from './duckEditRoom/actEditRoom';


export default function EditRoom() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { Option } = Select;
  const [form] = Form.useForm();
  const [imgSrc, setImgSrc] = useState('');
  const {data} = useSelector(state => state.layInfoRoomReducer);
  const room = {
    ...data
  }
  const listViTri = useSelector(state => state.viTriTimKiemReducer);
  // console.log(room);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: room.id,
      tenPhong: room.tenPhong,
      khach: room.khach,
      phongNgu: room.phongNgu,
      giuong: room.giuong,
      phongTam: room.phongTam,
      moTa: room.moTa,
      giaTien: room.giaTien,
      mayGiat: room.mayGiat,
      banLa: room.banLa,
      tivi: room.tivi,
      dieuHoa: room.dieuHoa,
      wifi: room.wifi,
      bep: room.bep,
      doXe: room.doXe,
      hoBoi: room.hoBoi,
      banUi: room.banUi,
      maViTri: room.maViTri,
      hinhAnh: room.hinhAnh,
    },
    onSubmit: values => {
      console.log("value", values);
      dispatch(actFetchEditRoom(values.id,values,navigate))
    },
  });

  useEffect(() => {
    dispatch(actFetchInfoRoom(params.id));
    dispatch(actFetchViTriTimKiem());
    dispatch(actFetchInfoRoom(params.id));
  },[])

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

  const handleChangeImg = (e) => {
    setImgSrc(e.target.value);
    formik.setFieldValue('hinhAnh',e.target.value);
  }

  const renderOptionVitri = () => {
    return listViTri?.data?.map((item, index) => {
      return <Option value={`${item.id}`} key={index}>{item.tenViTri}</Option>
    })
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
            <Input name="tenPhong" className='rounded-md p-1' style={{ height: "30px" }} onChange={formik.handleChange} value={formik.values.tenPhong} />
          </Form.Item>
          <Form.Item label="Khách" style={{ fontSize: "1.2rem" }} >
            <Input name="khach" className='rounded-md p-1' style={{ height: "30px" }} onChange={onChangeNumber} value={formik.values.khach} />
          </Form.Item>
          <Form.Item label="Phòng Ngủ" style={{ fontSize: "1.2rem" }} >
            <Input name="phongNgu" className='rounded-md p-1' style={{ height: "30px" }} onChange={onChangeNumber} value={formik.values.phongNgu} />
          </Form.Item>
          <Form.Item label="Giường" style={{ fontSize: "1.2rem" }} >
            <Input name="giuong" className='rounded-md p-1' style={{ height: "30px" }} onChange={onChangeNumber} value={formik.values.giuong} />
          </Form.Item>
          <Form.Item label="Phòng Tắm" style={{ fontSize: "1.2rem" }} >
            <Input name="phongTam" className='rounded-md p-1' style={{ height: "30px" }} onChange={onChangeNumber} value={formik.values.phongTam} />
          </Form.Item>
          <Form.Item label="Mô Tả" style={{ fontSize: "1.2rem" }} >
            <Input name="moTa" className='rounded-md p-1' style={{ height: "30px" }} onChange={formik.handleChange} value={formik.values.moTa} />
          </Form.Item>
          <Form.Item label="Mã Vị Trí">
            <Select name="maViTri" onChange={onChangeSelect} style={{ width: "100%" }} value={formik.values.maViTri}>
              {renderOptionVitri()}
            </Select>
          </Form.Item>
          <Form.Item label="Hình Ảnh" style={{ fontSize: "1.2rem" }}>
            <input type="text" onChange={handleChangeImg} name="hinhAnh" className='rounded-md p-1 w-full hover:border-blue-700 cursor-pointer' style={{ height: "30px",border:"0.5px solid #dadada" }} />
            <input  type="image" src={imgSrc === "" ? formik.values.hinhAnh : imgSrc} onChange={formik.handleChange} alt={formik.values.tenPhong } name="hinhAnh" className='rounded-md mt-2 p-1 w-full hover:border-blue-700 cursor-pointer' style={{ height: "80px", border: "0.5px solid #dadada" }} />
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
            <Input name="giaTien" className='rounded-md p-1' style={{ height: "30px" }} onChange={onChangeNumber} value={formik.values.giaTien} />
          </Form.Item>
          <Form.Item label="Máy Giặt" style={{ fontSize: "1.2rem" }} >
            <Radio.Group name="mayGiat" onChange={onChangeRadio} value={formik.values.mayGiat}>
              <Radio value={true}>Có</Radio>
              <Radio value={false}>Không</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Bàn Là" style={{ fontSize: "1.2rem" }} >
            <Radio.Group name="banLa" onChange={onChangeRadio} value={formik.values.banLa}>
              <Radio value={true}>Có</Radio>
              <Radio value={false}>Không</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Tivi" style={{ fontSize: "1.2rem" }} >
            <Radio.Group name="tivi" onChange={onChangeRadio} value={formik.values.tivi}>
              <Radio value={true}>Có</Radio>
              <Radio value={false}>Không</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Bàn ủi" style={{ fontSize: "1.2rem" }} >
            <Radio.Group name="banUi" onChange={onChangeRadio} value={formik.values.banUi}>
              <Radio value={true}>Có</Radio>
              <Radio value={false}>Không</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Điều Hòa" style={{ fontSize: "1.2rem" }} >
            <Radio.Group name="dieuHoa" onChange={onChangeRadio} value={formik.values.dieuHoa}>
              <Radio value={true}>Có</Radio>
              <Radio value={false}>Không</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Wifi" style={{ fontSize: "1.2rem" }} >
            <Radio.Group name="wifi" onChange={onChangeRadio} value={formik.values.wifi}>
              <Radio value={true}>Có</Radio>
              <Radio value={false}>Không</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Bếp" style={{ fontSize: "1.2rem" }} >
            <Radio.Group name="bep" onChange={onChangeRadio} value={formik.values.bep}>
              <Radio value={true}>Có</Radio>
              <Radio value={false}>Không</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Đỗ Xe" style={{ fontSize: "1.2rem" }} >
            <Radio.Group name="doXe" onChange={onChangeRadio} value={formik.values.doXe}>
              <Radio value={true}>Có</Radio>
              <Radio value={false}>Không</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Hồ bơi" style={{ fontSize: "1.2rem" }} >
            <Radio.Group name="hoBoi" onChange={onChangeRadio} value={formik.values.hoBoi}>
              <Radio value={true}>Có</Radio>
              <Radio value={false}>Không</Radio>
            </Radio.Group>
          </Form.Item>
          <button className='text-white bg-slate-500 ml-60 rounded-md p-2 hover:text-black transition-all duration-500 hover:bg-pink-500' style={{ width: "150px", height: "36px" }} type='submit' onClick={formik.handleSubmit}>Thêm Phòng</button>
        </div>
      </div>
    </Form>
  )
}
