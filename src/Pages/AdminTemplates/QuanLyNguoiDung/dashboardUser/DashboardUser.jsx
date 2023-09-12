import React, { useEffect, Fragment } from 'react';
import './styleDashboardUser/StyleDashboardUser.css';
import { Button, Table } from 'antd';
import { AudioOutlined, DeleteOutlined, EditOutlined, SearchOutlined, CopyOutlined, CalendarOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { actFetchDanhSachNguoiDung } from './duckDashboardUser/actDashboadUser';
import { actFetchDeleteUser } from '../deleteUser/actDeleteUser';

const { Search } = Input;
const suffix = (
    <AudioOutlined style={{ fontSize: 16, color: '#1677ff', }} />
);

export default function DashboardUser() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { data } = useSelector(state => state.layDanhSachNguoiDungReducer);
    let dataHasKey = [];
    if (data != undefined) {
        dataHasKey = [...data];
        for (let i = 0; i < dataHasKey.length; i++) {
            dataHasKey[i] = { ...dataHasKey[i], key: i };
        }
    }
    useEffect(() => {
        dispatch(actFetchDanhSachNguoiDung());
    }, [])


    const onSearch = (value) => {
        // gọi api lấy danh sách phim
        dispatch(actFetchDanhSachNguoiDung(value));
    };


    const columns = [
        {
            title: 'STT',
            dataIndex: 'key',
            width: '5%'
        },
        {
            title: 'Tên Người Dùng',
            dataIndex: 'name',
            filterSearch: true,
            onFilter: (value, record) => record.name.startsWith(value),
            width: '15%',
            sorter: (a, b) => {
                let nameA = a.name.toLowerCase().trim();
                let nameB = b.name.toLowerCase().trim();
                if (nameA < nameB) {
                    return 1
                }
                return -1
            },
        },
        {
            title: 'Email',
            dataIndex: 'email',
            sorter: (a, b) => a.email - b.email,
            sortDirections: ["descend", "ascend"],
            width: '10%'
        },
        {
            title: 'Loại Người Dùng',
            dataIndex: 'role',
            sorter: (a, b) => a.role - b.role,
            sortDirections: ["descend", "ascend"],
            width: '10%'
        },
        {
            title: 'Action',
            dataIndex: 'hanhDong',
            render: (words, nguoiDung) => {
                return <Fragment>
                    <NavLink key={1} to={`/admin/quanlynguoidung/edit-user/${nguoiDung.id}`}>
                        <EditOutlined className='p-2 text-green-600 text-lg text-right' />
                    </NavLink>
                    <span className='cursor-pointer' key={6} onClick={() => {
                        //gọi action xóa
                        if (window.confirm(`Bạn chắc chắn xóa người dùng này ${nguoiDung.name} này!?`)) {
                            //gọi action Xóa phim
                            // console.log(nguoiDung.id);
                            dispatch(actFetchDeleteUser(Number(nguoiDung.id)));
                        }
                    }}>
                        <DeleteOutlined className='p-2 text-red-700 text-lg text-right' />
                    </span>
                    <NavLink key={2} to={`/admin/quanlynguoidung/info-user/${nguoiDung.id}`} className='navLinkDSND'>
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
            <h3 className='text-left mb-1 text-2xl font-bold'>Quản lý Người Dùng</h3>
            <Button className='mb-2' onClick={() => {
                navigate('/admin/quanlynguoidung/add-user')
            }}>Thêm Người Dùng</Button>
            <Search
                style={{ backgroundColor: "black", borderRadius: "5px" }}
                placeholder="Nhập vào tài khoản hoặc tên người dùng"
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
