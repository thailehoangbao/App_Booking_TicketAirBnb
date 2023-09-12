import React, { useEffect, Fragment } from 'react';
import { Button, Table } from 'antd';
import './DashboardViTricss/DashboardViTri.css';
import { AudioOutlined, DeleteOutlined, EditOutlined, SearchOutlined, CalendarOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { actFetchDanhSachViTri, actSearchViTriDashboard } from './duckViTri/actDashboardViTri';
import { actFetchDeleteViTRi } from '../deleteViTri/actDeleteVitri';


const { Search } = Input;
const suffix = (
    <AudioOutlined style={{ fontSize: 16, color: '#1677ff', }} />
);

export default function DashboardViTri() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { searchData } = useSelector(state => state.layDanhSachViTriReducer);
    
    useEffect(() => {
        dispatch(actFetchDanhSachViTri());
    }, [])


    const onSearch = (value) => {
        // gọi api edit 
        dispatch(actSearchViTriDashboard(value));
    };


    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            width: '5%'
        },
        {
            title: 'Tên Vị Trí',
            dataIndex: 'tenViTri',
            filterSearch: true,
            onFilter: (value, record) => record.vitri.startsWith(value),
            width: '15%',
            sorter: (a, b) => {
                let vitriA = a.vitri.toLowerCase().trim();
                let vitriB = b.vitri.toLowerCase().trim();
                if (vitriA < vitriB) {
                    return 1
                }
                return -1
            },
        },
        {
            title: 'Hình Ảnh',
            dataIndex: 'hinhAnh',
            onFilter: (value, record) => record.hinhAnh.startsWith(value),
            filterSearch: true,
            render: (text, vitri) => {
                return <Fragment>
                    <div className='grid grid-cols-2'>
                        <div>
                            <img src={vitri.hinhAnh} alt={vitri.tenPhong} key={vitri.id} width={100} height={100} onError={({ currentTarget }) => {
                                currentTarget.onerror = null; // prevents looping
                                currentTarget.src = "data:image/png;base64,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";
                            }} />
                        </div>
                        <div>
                            <span className='underline cursor-pointer hover:text-pink-400 transition-all duration-500'>Chỉnh Sửa</span>
                        </div>
                    </div>
                </Fragment>
            },
            width: '25%',
        },
        {
            title: 'Tỉnh Thành',
            dataIndex: 'tinhThanh',
            sorter: (a, b) => a.tinhThanh - b.tinhThanh,
            sortDirections: ["descend", "ascend"],
            width: '10%',
        },
        {
            title: 'Action',
            dataIndex: 'hanhDong',
            render: (words, vitri) => {
                return <Fragment>
                    <NavLink key={1} to={`/admin/quanlyvitri/edit-vitri/${vitri?.id}`}>
                        <EditOutlined className='p-2 text-green-600 text-lg text-right' />
                    </NavLink>
                    <span className='cursor-pointer' key={6} onClick={() => {
                        //gọi action xóa
                        if (window.confirm(`Bạn chắc chắn xóa người dùng này ${vitri?.tenViTri} này!?`)) {
                            //gọi action Xóa phim
                            dispatch(actFetchDeleteViTRi(vitri?.id));
                        }
                    }}>
                        <DeleteOutlined className='p-2 text-red-700 text-lg text-right' />
                    </span>
                    <NavLink key={2} to={`/admin/quanlyvitri/info-vitri/${vitri?.id}`} className='navLinkDSND'>
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
            <h3 className='text-left mb-1 text-2xl font-bold'>Quản lý Vị Trí</h3>
            <Button className='mb-2' onClick={() => {
                navigate('/admin/quanlyvitri/add-vitri')
            }}>Thêm vị Trí</Button>
            <Search
                style={{ backgroundColor: "black", borderRadius: "5px" }}
                placeholder="Nhập vào tên vị trí"
                allowClear
                enterButton={<SearchOutlined className='pb-2' />}
                size="large"
                onSearch={onSearch}
                className='mt-2 mb-4'
            />
            <Table columns={columns} dataSource={searchData} onChange={onChange} rowKey='id' />
        </div>
    )
}
