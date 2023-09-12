import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actFetchBtnDatPhong, actFetchDanhSachPhongDat} from './duckDatPhong/actDatPhong';
import { useParams } from 'react-router-dom';
import { USER_LOGIN } from 'Utils/_constantsUtils';
import { actModalDetailSuccess } from '../_components/Modal/duckModal/actModal';

export default function PopupDatPhong({ giaTien }) {
    const dispatch = useDispatch();
    const params = useParams();
    let { notification } = useSelector(state => state.danhSachPhongDatReducer);
    const [amount, setAmount] = useState(0);

    const [form, setForm] = useState({
        id: 0,
        maPhong: params.id,
        ngayDen: "",
        ngayDi: "",
        soLuongKhach: 0,
        maNguoiDung: JSON.parse(localStorage.getItem(USER_LOGIN)).content.user.id
    })

    const startDate = new Date(form.ngayDen);
    const endDate = new Date(form.ngayDi);

    let daysDiff = 0;

    if (!isNaN(startDate) && !isNaN(endDate)) {
        const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
        daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    }

    useEffect(() => { setAmount(daysDiff) }, [daysDiff]);


    useEffect(() => {
        dispatch(actFetchDanhSachPhongDat(params.id));
    }, []);


    const handleChange = (e) => {
        let { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(actFetchBtnDatPhong(form));
    }

    return (
        <div className="w-full sm:w-1/2 lg:w-2/5">
            <form className="sticky top-28" onSubmit={handleSubmit}>
                <div className="bg-white shadow-xl border rounded-xl p-6 w-full lg:w-5/6 mx-auto">
                    <div className="relative w-full">
                        <div className="hidden md:flex justify-between items-center mb-4">
                            <div>
                                <span>$</span>
                                <span className="text-xl font-semibold">{giaTien}</span>
                                <span className="text-base">/đêm</span>
                            </div>
                            <div>
                                <span className="text-sm font-normal">
                                    <i className="fa fa-star" /> 4 .</span>
                                <span className="underline text-sm font-normal tracking-widest mx-1">52 đánh giá</span>
                            </div>
                        </div>
                        <div className="flex flex-col border border-solid border-gray-400 rounded-md">
                            <div className="flex w-full border-b border-solid border-gray-400">
                                <div className="border-r border-solid border-gray-400 rounded-tl-md w-full p-2 cursor-pointer hover:bg-gray-100"><div className="text-xs uppercase font-semibold">Nhận phòng</div>
                                    <div className="m-1">
                                        <input type="date" name="ngayDen" onInput={handleChange} />
                                    </div>
                                </div>
                                <div className=" rounded-tr-md w-full p-2 cursor-pointer hover:bg-gray-100">
                                    <div className="text-xs uppercase font-semibold">Trả phòng</div>
                                    <div className="m-1">
                                        <input type="date" name="ngayDi" onInput={handleChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="p-2">
                                <div className="uppercase text-xs font-semibold">Khách</div>
                                <div className="flex justify-between items-center m-1">
                                    <button type='button' className="w-8 h-8 bg-gray-300 hover:bg-red-400 duration-200 rounded-xl text-white cursor-pointer" onClick={() => {
                                        if (form.soLuongKhach > 0) {
                                            form.soLuongKhach = form.soLuongKhach - 1;
                                            setForm({
                                                ...form,
                                                soLuongKhach: form.soLuongKhach
                                            });
                                        }
                                    }}>-</button>
                                    <div><span>{form.soLuongKhach}</span> khách</div>
                                    <button type='button' className="w-8 h-8 bg-gray-300 hover:bg-red-400 duration-200 rounded-xl text-white cursor-pointer" onClick={() => {
                                        form.soLuongKhach = form.soLuongKhach +1;
                                        setForm({
                                            ...form,
                                            soLuongKhach: form.soLuongKhach
                                        })}}>+</button>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="w-full py-3  mt-3 rounded-lg text-white text-lg font-semibold" style={{ background: 'linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%)' }} onClick={() => {
                            dispatch(actModalDetailSuccess(true));
                        }}>Đặt phòng</button>
                        <div className="text-center font-normal text-gray-400 my-2">
                            <span>{notification === false ? 'Bạn chưa bị trừ tiền' : <span className='text-red-600 font-thin text-md'>Bạn đã bị trừ tiền!</span> }</span>
                        </div>
                        <div className="border-b py-2">
                            <div className="flex justify-between py-1 text-base">
                                <div className="underline text-gray-600">$ {giaTien} x {amount} đêm</div>
                                <div>
                                    <span>{giaTien * amount}</span> $</div>
                            </div>
                            <div className="flex justify-between py-1 text-base">
                                <div className="underline text-gray-600">Phí dịch vụ</div>
                                <div>
                                    <span>{giaTien * amount * 2 / 100}</span> $</div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center text-lg font-semibold pt-3">
                            <div>Tổng trước thuế</div>
                            <div>{giaTien * amount + giaTien * amount * 2 / 100} $</div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
