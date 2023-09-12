import React, { useEffect, Fragment } from 'react';
import { Button, Table } from 'antd';
import './bookRoomCss/DashboardBookRoom.css';
import { AudioOutlined, DeleteOutlined, EditOutlined, SearchOutlined, CalendarOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { actFetchDanhSachBookRoom } from './duckBookRoom/actBookRoom';
import { formatDateToDDMMYYYY } from 'Utils/_constantsUtils';
import { actFetchDeleteBookRoom } from '../deleteBookRoom/duckDeleteBookRoom/actDeleteBookRoom';
import {actSearchBookRoomDashboard} from './duckBookRoom/actBookRoom';


const { Search } = Input;
const suffix = (
  <AudioOutlined style={{ fontSize: 16, color: '#1677ff', }} />
);

export default function DashboardBookRoom() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { searchData } = useSelector(state => state.layDanhSachBookRoomReducer);
  let dataHasKey = [];
  if (searchData != undefined) {
    dataHasKey = [...searchData];
    for (let i = 0; i < dataHasKey.length; i++) {
      dataHasKey[i] = { ...dataHasKey[i], key: i };
    }
  }
  useEffect(() => {
    dispatch(actFetchDanhSachBookRoom());
  }, [])


  const onSearch = (value) => {
    // gọi api edit 
    // console.log(value);
    dispatch(actSearchBookRoomDashboard(value));
  };


  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      width: '5%'
    },
    {
      title: 'Mã Người Dùng',
      dataIndex: 'maNguoiDung',
      filterSearch: true,
      onFilter: (value, record) => record.maNguoiDung.startsWith(value),
      width: '5%',
      sorter: (a, b) => a.maNguoiDung - b.maNguoiDung,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: 'Mã Phòng',
      dataIndex: 'maPhong',
      sorter: (a, b) => a.maPhong - b.maPhong,
      onFilter: (value, record) => record.maPhong.startsWith(value),
      sortDirections: ["descend", "ascend"],
      width: '5%',
    },
    {
      title: 'Ngày Đến',
      dataIndex: 'ngayDen',
      render: (value) => {
        return formatDateToDDMMYYYY(value);
      },
      sortDirections: ["descend", "ascend"],
      width: '5%',
    },
    {
      title: 'Ngày Đi',
      dataIndex: 'ngayDi',
      render: (value) => {
        return formatDateToDDMMYYYY(value);
      },
      sortDirections: ["descend", "ascend"],
      width: '5%',
    },
    {
      title: 'Số Lượng Khách',
      dataIndex: 'soLuongKhach',
      sorter: (a, b) => a.soLuongKhach - b.soLuongKhach,
      width: '5%',
    },
    {
      title: 'Action',
      dataIndex: 'hanhDong',
      render: (words, room) => {
        return <Fragment>
          <NavLink key={1} to={`/admin/quanlydatphong/edit-bookroom/${room.id}`}>
            <EditOutlined className='p-2 text-green-600 text-lg text-right' />
          </NavLink>
          <span className='cursor-pointer' key={6} onClick={() => {
            //gọi action xóa
            if (window.confirm(`Bạn chắc chắn xóa phòng có ${room.id} này!?`)) {
              //gọi action Xóa phim
              dispatch(actFetchDeleteBookRoom(room.id,navigate))
            }
          }}>
            <DeleteOutlined className='p-2 text-red-700 text-lg text-right' />
          </span>
          <NavLink key={2} to={`/admin/quanlydatphong/info-bookroom/${room.id}`} className='navLinkDSND'>
            <CalendarOutlined />
            <p className='navLinkDSND__child'>Xem Chi Tiết</p>
          </NavLink>
        </Fragment>
      },
      width: '15%'
    }
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    // console.log('params', pagination, filters, sorter, extra);
  };
  return (
    <div>
      <h3 className='text-left mb-1 text-2xl font-bold'>Quản lý Đặt Phòng</h3>
      <Button className='mb-2' onClick={() => {
        navigate('/admin/quanlydatphong/add-bookroom')
      }}>Thêm Phòng</Button>
      <Search
        style={{ backgroundColor: "black", borderRadius: "5px" }}
        placeholder="Nhập vào tên phòng"
        allowClear
        enterButton={<SearchOutlined className='pb-2' />}
        size="large"
        onSearch={onSearch}
        className='mt-2 mb-4'
      />
      <Table columns={columns} dataSource={dataHasKey} onChange={onChange} rowKey='key' />
    </div>
  )
}
