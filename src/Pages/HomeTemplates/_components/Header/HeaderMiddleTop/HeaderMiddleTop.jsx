import { actFetchDanhSachViTri } from 'Pages/AdminTemplates/QuanLyViTri/dashboardViTri/duckViTri/actDashboardViTri';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function HeaderMiddleTop() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { data } = useSelector(state => state.layDanhSachViTriReducer);
    // console.log(data);
    const [maViTri,setMaViTri] = useState(0);
    // console.log(maViTri);
    useEffect(() => {
        dispatch(actFetchDanhSachViTri());
    }, [])

    const handleOption = (e) => {
        // console.log(e.target.value);
        setMaViTri(e.target.value);
    }

    const renderTenViTri = () => {
        return data?.map((item, index) => {
            return <option key={index} value={item.id} className='p-3 hover:bg-pink-200 text-md cursor-pointer transition-all duration-300 hover:text-pink-600'>{item.tenViTri}</option>
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${maViTri}`)
    }
    return <div className="absolute top-0 left-0 w-screen bg-white transition-all duration-500 pb-3 z-10 shadow-lg" style={{ paddingTop: '4.4rem', width: "100%" }}>
        <form className="flex flex-wrap justify-center items-center" onSubmit={handleSubmit}>
            <div className="flex flex-wrap justify-center items-center relative  transition-all duration-300 h-16 rounded-full border ">
                <div className="px-5 py-2 hover:bg-gray-300 rounded-full h-full flex flex-wrap justify-center items-center">
                    <label htmlFor="checkInDate" className="block text-sm font-medium mr-2 text-gray-900 dark:text-gray-300">Địa điểm</label>
                    <div className="w-48 bg-transparent outline-none select_location css-b62m3t-container rounded-md">
                        <select className='rounded-md p-1 text-sm overflow-auto' style={{width:"180px"}} onChange={handleOption}>
                            {renderTenViTri()}
                        </select>
                    </div>
                </div>
                <div className="hidden sm:block py-2 px-5 hover:bg-gray-300 rounded-full overflow-hidden h-full">
                    <label htmlFor="checkInDate" className="block text-sm font-medium text-gray-900 dark:text-gray-300">Nhận phòng</label>
                    <input name="checkIn" type="date" id="checkInDate" className="bg-transparent outline-none" placeholder="Thêm ngày" />
                </div><div className="hidden sm:block py-2 px-5 hover:bg-gray-300 rounded-full overflow-hidden h-full">
                    <label htmlFor="checkOutDate" className="block text-sm font-medium text-gray-900 dark:text-gray-300">Trả phòng</label>
                    <input name="checkOut" type="date" id="checkOutDate" className="bg-transparent outline-none" placeholder="Thêm ngày" />
                </div><div className="hidden sm:block py-2 pl-7 pr-5 hover:bg-gray-300 rounded-full overflow-hidden h-full">
                    <label htmlFor="guest" className="block text-sm font-medium text-gray-900 dark:text-gray-300">Khách</label>
                    <input name="guest" type="number" id="guest" className="bg-transparent outline-none" placeholder="Thêm khách" />
                </div>
                <button className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 absolute right-0" type='submit'>Tìm kiếm</button>
            </div>
        </form>
    </div>
}
