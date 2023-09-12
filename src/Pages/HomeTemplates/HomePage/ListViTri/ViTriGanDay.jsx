import React, { useEffect } from 'react';
import ViTriItem from './ViTriItem/ViTriItem';
import { useDispatch, useSelector } from 'react-redux';
import { actFetchViTriTimKiem } from './duckViTri/actViTri';

export default function ViTriGanDay() {
    const dispatch  = useDispatch();
    const {data} = useSelector(state => state.viTriTimKiemReducer);
    useEffect(() => {
        dispatch(actFetchViTriTimKiem());
    },[])
    const renderViTriTimKiem = () => {
        return data?.map((vitri,index) => {
            return <ViTriItem vitri={vitri} key={index}/>
        })
    }
    return (
        <div className='p-10'>
            <h1 className='text-xl font-semibold'>Khám Phá Những Địa Điểm Đến Gần Đây</h1>
            <div className='grid grid-cols-4 gap-3 pt-5 pb-5'>
                {renderViTriTimKiem()}
            </div>
        </div>
    )
}
