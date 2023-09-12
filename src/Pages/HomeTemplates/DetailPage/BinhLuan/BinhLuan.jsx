import React, { useEffect, useState } from 'react'
import Person from './Person/Person'
import { useDispatch, useSelector } from 'react-redux'
import {  useParams } from 'react-router-dom';
import { actFetchAddBinhLuanThue, actFetchBinhLuanThue, actMaPhong } from './duckBinhLuan/actBinhLuan';
import { USER_LOGIN, formatDateToDDMMYYYY } from 'Utils/_constantsUtils';

export default function BinhLuan() {
    const dispatch = useDispatch();
    const params = useParams();
    const { data,listBinhLuan } = useSelector(state => state.binhLuanThueReducer);
    // Lấy ngày hiện tại
    const currentDate = new Date();

    // Chuyển đổi thành chuỗi định dạng "dd/mm/yyyy"
    const formattedCurrentDate = formatDateToDDMMYYYY(currentDate);
    const user = JSON.parse(localStorage.getItem(USER_LOGIN)).content.user;

    const [form, setForm] = useState({
        id: 0,
        maPhong: params.id,
        maNguoiBinhLuan: user.id,
        ngayBinhLuan: formattedCurrentDate,
        noiDung: "",
        saoBinhLuan: 0
    })

    useEffect(() => {
        dispatch(actFetchBinhLuanThue(params.id));
    }, [])

    const renderBinhLuan = () => {
        return data?.map((binhLuan, index) => {
            return <Person binhLuan={binhLuan} key={index} />
        })
    }
    const handleNoiDungBinhLuan = (e) => {
        const {name,value} = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (form) {
            dispatch(actFetchAddBinhLuanThue(form,params.id));
        }     
    }
    const renderNewBinhLuan = () => {
        return listBinhLuan?.map((binhLuan, index) => {
            return <Person binhLuan={binhLuan} key={index} />
        })
    }

    return (
        <div>
            <div className='grid grid-cols-3 gap-3 mb-2'>
                {listBinhLuan ? renderNewBinhLuan() : renderBinhLuan() }
            </div>
            <span className='underline font-semibold cursor-pointer'>Hiển thị thêm</span>
            <div className='mt-2'>
                <form action="GET" onSubmit={handleSubmit}>
                    <textarea onChange={handleNoiDungBinhLuan} name="noiDung" style={{ padding: "12px", width: "100%", height: "250px", border: "0.5px solid gray" }}></textarea>
                    <button type='submit' className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded transition-all duration-500'>Add Comment</button>
                </form>
            </div>
        </div>
    )
}
