import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { actFetchPhongThueTheoMaViTri } from './duckSearchPage/actSearchPage';
import PhongThue from '../HomePage/ListPhongThue/PhongThue/PhongThue';

export default function SearchPage() {
    const dispatch = useDispatch();
    const params = useParams();
    const {data} = useSelector(state => state.phongThueTheoMaViTriReducer);
    // console.log(data);
    useEffect(() => {
        dispatch(actFetchPhongThueTheoMaViTri(params.id));
    },[])
    const renderPhongThue = () => {
        return data?.map((phongthue,index) => {
            return <PhongThue key={index} phongthue={phongthue}/>
        })
    }
    return (
        <div className='grid grid-cols-2 gap-2 mt-20'>
            <div className='col-span-1 p-5'>
                <h5 className='pb-1 font-semibold'>Danh Sách Phòng Tìm Thấy</h5>
                <p className='text-sm text-gray-300 pb-3'>Có {data?.length} kết quả tìm kiếm</p>
                <div className='grid grid-cols-2 gap-2'>
                {renderPhongThue()}
                </div>
            </div>
            <div className='col-span-1 pt-20'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1001291.8437640241!2d106.12353689602652!3d11.386014941374665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2zSOG7kyBDaMOtIE1pbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1693407209861!5m2!1svi!2s" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
        </div>
    )
}
