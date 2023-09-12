import React, { useEffect } from 'react'
import PhongThue from './PhongThue/PhongThue';
import { useDispatch, useSelector } from 'react-redux';
import { actFetchListPhongThue } from './duckListPhongThue/actListPhongThue';

export default function ListPhongThue() {
    const dispatch = useDispatch();
    const { data } = useSelector(state => state.listPhongThueReducer);
    useEffect(() => {
        dispatch(actFetchListPhongThue());
    }, []);
    const renderListPhongThue = () => {
        return data?.map((phongthue, index) => {
            return <PhongThue key={index} phongthue={phongthue} />
        })
    }
    return (
        <div className='grid grid-cols-4 gap-4 p-10'>

            {renderListPhongThue()}
        </div>
    )
}
