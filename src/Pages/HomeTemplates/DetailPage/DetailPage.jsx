import React, { useEffect } from 'react';
import PopupDatPhong from './PopupDatPhong/PopupDatPhong';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { actFetchChiTietPhongThue } from './duckDetail/actDetail';
import BinhLuan from './BinhLuan/BinhLuan';
import { USER_LOGIN } from 'Utils/_constantsUtils';
import ModalBtn from './_components/Modal/ModalBtn';

export default function DetailPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();
    const { data } = useSelector(state => state.chiTietPhongThueReducer);
    const { vitri } = useSelector(state => state.chiTietPhongThueReducer);
    const {isOpenModal} = useSelector(state => state.modalDetailSuccessReducer);
    useEffect(() => {
        dispatch(actFetchChiTietPhongThue(params.id));
    }, [])

    if (!localStorage.getItem(USER_LOGIN)) {
        return <Navigate to="/login" />
    }

    return (
        <div className='p-20 detail-layout'>
            <div>
                <p>
                    <button className="mr-3">
                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-label="Tiêu đề được dịch tự động: Sharma Springs 5 bds Hồ bơi Dinh thự tre sang trọng" role="img" focusable="false" style={{ display: 'inline-block', height: 24, width: 24, fill: 'currentcolor' }}>
                            <path d="M9 0a1 1 0 0 1 .993.883L10 1v5h5a1 1 0 0 1 .993.883L16 7v8a1 1 0 0 1-.883.993L15 16H7a1 1 0 0 1-.993-.883L6 15v-5H1a1 1 0 0 1-.993-.883L0 9V1A1 1 0 0 1 .883.007L1 0h8zm1.729 7l-1.393.495.233.217.13.132c.125.127.227.245.308.352l.073.103.048.073.045.077H7.308v1.309h1.207l.166.52.09.266.112.29a6.294 6.294 0 0 0 1.109 1.789c-.495.315-1.119.607-1.87.87l-.331.112-.346.108-.445.134L7.72 15l.407-.125.386-.128c1.007-.349 1.836-.752 2.486-1.214.57.405 1.277.764 2.12 1.08l.369.134.386.128.406.125.72-1.153-.445-.134-.26-.08-.345-.115c-.783-.27-1.43-.57-1.94-.895a6.3 6.3 0 0 0 1.068-1.694l.128-.32.114-.33.165-.521h1.208V8.449H11.64l-.093-.231a3.696 3.696 0 0 0-.554-.917l-.126-.149-.14-.152zm1.35 2.758l-.042.133-.076.224-.103.264A4.985 4.985 0 0 1 11 11.76a4.952 4.952 0 0 1-.743-1.127l-.115-.254-.103-.264-.076-.224-.042-.133h2.158zM9 1H1v8h5V7c0-.057.005-.113.014-.167H3.827L3.425 8H2l2.257-6h1.486l1.504 4H9V1zM5 3.411L4.253 5.6h1.502L5 3.411z" />
                        </svg>
                    </button>
                    <span className="font-semibold text-xl sm:text-3xl tracking-widest leading-relaxed text-gray-900">{data?.tenPhong}</span>
                </p>
                <div className="flex flex-wrap justify-between items-center">
                    <div>
                        <span className="text-sm font-normal tracking-widest">
                            <i className="fa fa-star" /> 4 .</span>
                        <span className="underline text-sm font-normal tracking-widest mx-1">83 đánh giá</span>
                        .<span className="text-sm font-normal tracking-widest mx-1"> <i className="fa-solid fa-award" /> Chủ nhà Thân Thiện.</span>
                        <span className="underline text-sm font-normal tracking-widest mx-1">{vitri?.tenViTri}, {vitri?.tinhThanh}, {vitri?.quocGia}</span>
                    </div>
                    <div className="flex flex-wrap justify-center items-center">
                        <button className="px-2 py-1 hover:bg-gray-100 rounded-md transition-all duration-150 flex justify-center items-center font-semibold text-sm text-gray-700">
                            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'inline-block', fill: 'none', height: 16, width: 16, stroke: 'currentcolor', strokeWidth: 2, overflow: 'visible' }}>
                                <g fill="none">
                                    <path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9" />
                                    <path d="M16 3v23V3z" /><path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13" />
                                </g>
                            </svg>
                            <span className="ml-2">Chia sẻ</span>
                        </button>
                        <button className="px-2 py-1 hover:bg-gray-100 rounded-md transition-all duration-150  flex justify-center items-center font-semibold text-sm text-gray-700">
                            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'inline-block', fill: 'none', height: 16, width: 16, stroke: 'currentcolor', strokeWidth: 2, overflow: 'visible' }}>
                                <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z" /></svg>
                            <span className="ml-2">Lưu</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <div className="rounded-l-xl rounded-r-xl sm:rounded-r-none overflow-hidden">
                    <img className="w-full object-contain rounded-l-xl overflow-hidden" src={data?.hinhAnh} style={{ imageRendering: 'pixelated' }} />
                </div>
            </div>
            <div className="w-full flex sm:flex-row flex-col mt-10 border-b pb-5">
                <div className="w-full sm:w-1/2 lg:w-3/5">
                    <div className="flex flex-wrap justify-between items-center pb-5 border-b">
                        <div>
                            <h1 className="font-semibold text-lg sm:text-2xl text-gray-800">Toàn bộ căn hộ.</h1>
                            <span className="text-sm font-normal  tracking-widest text-gray-700">
                                <span>{data?.khach} khách . </span>
                                <span className=" mx-1">{data?.phongNgu} phòng ngủ . </span>
                                <span className=" mx-1">{data?.phongTam} phòng tắm . </span>
                            </span>
                        </div>
                        <div className="w-12 h-12  relative">
                            <img src="https://airbnb.cybersoft.edu.vn/public/temp/1663923449254_halong-bay-vietnam-from-above-gettyimages.jpg" className="w-full h-full rounded-full overflow-hidden" />
                            <div className="absolute bottom-0 -right-1 text-2xl"><svg viewBox="0 0 14 24" role="presentation" aria-hidden="true" focusable="false" style={{ height: '1em', width: '1em', display: 'block', fill: 'currentcolor' }}>
                                <path d="m10.5 20.0005065c0 1.9326761-1.56704361 3.4994935-3.5 3.4994935s-3.5-1.5668174-3.5-3.4994935c0-1.9326762 1.5670426-3.5005065 3.5-3.5005065s3.5 1.5678303 3.5 3.5005065m-9.99486248-18.58757644-.00513752 8.13836018c0 .45796416.21682079.88992936.58880718 1.17090736l5.07730539 3.831699c.4870761.367971 1.16836618.367971 1.65647028.0009994l5.08141685-3.8266984c.3719859-.2789784.5898342-.7109444.5908612-1.16790827.0010271-1.75186288.0041101-6.21051146.0051391-8.14035983 0-.50396002-.4202834-.91292822-.9392158-.91292822l-11.11643181-.00699945c-.51790391-.00099942-.93818728.40796878-.93921487.91292823" fill="#fff" />
                                <path d="m12 9.5-5-3.70124468 5-3.79875532zm-6.1292309 9.187485c-.52182677.3180834-.8707691.8762459-.8707691 1.5144379 0 .9937534.83703449 1.7980771 1.870162 1.7980771.81806646 0 1.50434636-.5065007 1.75946763-1.2095239z" fill="#ffb400" /><path d="m12 9.5-5 3.75-5-3.75v-7.5z" fill="#ff5a5f" />
                                <path d="m7 24c-2.2060547 0-4-1.7939453-4-3.9990234 0-2.2060547 1.7939453-4.0009766 4-4.0009766s4 1.7949219 4 4.0009766c0 2.2050781-1.7939453 3.9990234-4 3.9990234zm0-7c-1.6542969 0-3 1.3466797-3 3.0009766 0 1.6533203 1.3457031 2.9990234 3 2.9990234s3-1.3457031 3-2.9990234c0-1.6542969-1.3457031-3.0009766-3-3.0009766zm.0039062-1.8242188c-.4560547 0-.9121094-.1064453-1.2617188-.3164062l-5.0458984-3.8642578c-.4697265-.3642578-.696289-.8525391-.696289-1.4951172v-8c.0009766-.3730469.1679688-.7529297.4580078-1.0429688.2900391-.2905273.6689453-.4570312 1.0410156-.4570312h.0019531 10.9990235c.7851562 0 1.5.7148438 1.5 1.5v7.9277344c-.0009766.6762695-.2421875 1.2177734-.6953125 1.5668945l-5.0009766 3.8325195c-.3505859.2333985-.8251953.3486328-1.2998047.3486328zm-5.5058593-14.1757812c-.1044922 0-.2324219.0625-.3330078.1635742-.1015625.1020508-.1650391.230957-.1650391.3374024v7.9990234c0 .3305664.0888672.5341797.3066406.703125l4.9970703 3.8310547c.3330078.1953125 1.0859375.2001953 1.4208984-.0205078l4.9716797-3.8125c.2001954-.1542969.3027344-.4155274.303711-.7749024v-7.9267578c0-.2285156-.2714844-.4995117-.5-.4995117h-11-.0009766s0 0-.0009765 0z" fill="#484848" />
                            </svg>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 pb-5 border-b">
                        <div className="flex w-full">
                            <div className="pt-2">
                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'inline-block', height: 24, width: 24, fill: 'currentcolor' }}>
                                    <path d="m16 17c3.8659932 0 7 3.1340068 7 7s-3.1340068 7-7 7-7-3.1340068-7-7 3.1340068-7 7-7zm0 2c-2.7614237 0-5 2.2385763-5 5s2.2385763 5 5 5 5-2.2385763 5-5-2.2385763-5-5-5zm9.6666667-18.66666667c1.0543618 0 1.9181651.81587779 1.9945142 1.85073766l.0054858.14926234v6.38196601c0 .70343383-.3690449 1.35080636-.9642646 1.71094856l-.1413082.0779058-9.6666667 4.8333334c-.5067495.2533747-1.0942474.2787122-1.6171466.0760124l-.1717078-.0760124-9.66666666-4.8333334c-.62917034-.3145851-1.04315599-.93418273-1.09908674-1.62762387l-.00648607-.16123049v-6.38196601c0-1.05436179.81587779-1.91816512 1.85073766-1.99451426l.14926234-.00548574zm0 2h-19.33333337v6.38196601l9.66666667 4.83333336 9.6666667-4.83333336z" />
                                </svg>
                            </div>
                            <div className="ml-4"><h3 className="font-semibold text-gray-800 text-base sm:text-lg ">Đánh giá Phòng VIP</h3>
                                <p className="tracking-wider text-gray-500">Phòng VIP là những phòng được đánh giá cao nhờ lượt xem, và được đánh giá cao là nhờ lượt truy cập nhiều và lượt like tốt từ khách hàng.</p>
                            </div>
                        </div>
                        <div className="flex mt-5">
                            <div className="pt-2">
                                <span>
                                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'inline-block', height: 24, width: 24, fill: 'currentcolor' }}>
                                        <path d="M16 0c6.627 0 12 5.373 12 12 0 6.337-3.814 12.751-11.346 19.257L16 31.82l-1.076-.932C7.671 24.509 4 18.218 4 12 4 5.423 9.397 0 16 0zm0 2C10.504 2 6 6.525 6 12c0 5.44 3.249 11.118 9.831 17.02l.169.149.576-.518c6.178-5.65 9.293-11.092 9.42-16.318L26 12c0-5.523-4.477-10-10-10zm0 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                                    </svg>
                                </span>
                            </div>
                            <div className="ml-4">
                                <h3 className="font-semibold text-gray-800 text-base sm:text-lg ">Địa điểm tuyệt vời</h3>
                                <p className="tracking-wider text-gray-500">90% khách gần đây đã xếp hạng 5 sao cho vị trí này.</p>
                            </div>
                        </div>
                        <div className="flex mt-5">
                            <div className="pt-2">
                                <span>
                                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'inline-block', height: 24, width: 24, fill: 'currentcolor' }}>
                                        <path d="m11.6667 0-.00095 1.666h8.667l.00055-1.666h2l-.00055 1.666 6.00065.00063c1.0543745 0 1.9181663.81587127 1.9945143 1.85073677l.0054857.14926323v15.91907c0 .4715696-.1664445.9258658-.4669028 1.2844692l-.1188904.1298308-8.7476886 8.7476953c-.3334303.3332526-.7723097.5367561-1.2381975.5778649l-.1758207.0077398h-12.91915c-2.68874373 0-4.88181754-2.1223321-4.99538046-4.7831124l-.00461954-.2168876v-21.66668c0-1.05436021.81587582-1.91815587 1.85073739-1.99450431l.14926261-.00548569 5.999-.00063.00095-1.666zm16.66605 11.666h-24.666v13.6673c0 1.5976581 1.24893332 2.9036593 2.82372864 2.9949072l.17627136.0050928 10.999-.0003.00095-5.6664c0-2.6887355 2.122362-4.8818171 4.7832071-4.9953804l.2168929-.0046196 5.66595-.0006zm-.081 8-5.58495.0006c-1.5977285 0-2.9037573 1.2489454-2.9950071 2.8237299l-.0050929.1762701-.00095 5.5864zm-18.586-16-5.999.00062v5.99938h24.666l.00065-5.99938-6.00065-.00062.00055 1.66733h-2l-.00055-1.66733h-8.667l.00095 1.66733h-2z" /></svg></span></div><h3 className="ml-4 font-semibold text-gray-800  text-base sm:text-lg">Miễn phí hủy trong 48 giờ.</h3>
                        </div>
                    </div>
                    <div className="mt-5 pb-5 border-b">
                        <h2>
                            <img src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg" className="h-7 mb-4" />
                        </h2>
                        <p className="text-base tracking-wider text-gray-800 mb-2">Mọi đặt phòng đều được bảo vệ miễn phí trong trường hợp Chủ nhà hủy, thông tin nhà/phòng cho thuê không chính xác và những vấn đề khác như sự cố trong quá trình nhận phòng.</p>
                        <button className="font-semibold underline text-base text-gray-800  tracking-wider">Tìm hiểu thêm</button>
                    </div>
                    <div className="mt-5 pb-5 border-b">
                        <div className="flex mb-4">
                            <div className="mr-2">
                                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: 16, width: 16, fill: 'currentcolor' }}>
                                    <path d="M9 0a1 1 0 0 1 .993.883L10 1v5h5a1 1 0 0 1 .993.883L16 7v8a1 1 0 0 1-.883.993L15 16H7a1 1 0 0 1-.993-.883L6 15v-5H1a1 1 0 0 1-.993-.883L0 9V1A1 1 0 0 1 .883.007L1 0h8zm1.729 7l-1.393.495.233.217.13.132c.125.127.227.245.308.352l.073.103.048.073.045.077H7.308v1.309h1.207l.166.52.09.266.112.29a6.294 6.294 0 0 0 1.109 1.789c-.495.315-1.119.607-1.87.87l-.331.112-.346.108-.445.134L7.72 15l.407-.125.386-.128c1.007-.349 1.836-.752 2.486-1.214.57.405 1.277.764 2.12 1.08l.369.134.386.128.406.125.72-1.153-.445-.134-.26-.08-.345-.115c-.783-.27-1.43-.57-1.94-.895a6.3 6.3 0 0 0 1.068-1.694l.128-.32.114-.33.165-.521h1.208V8.449H11.64l-.093-.231a3.696 3.696 0 0 0-.554-.917l-.126-.149-.14-.152zm1.35 2.758l-.042.133-.076.224-.103.264A4.985 4.985 0 0 1 11 11.76a4.952 4.952 0 0 1-.743-1.127l-.115-.254-.103-.264-.076-.224-.042-.133h2.158zM9 1H1v8h5V7c0-.057.005-.113.014-.167H3.827L3.425 8H2l2.257-6h1.486l1.504 4H9V1zM5 3.411L4.253 5.6h1.502L5 3.411z" /></svg></div><div><span className="text-base tracking-wider text-gray-800">Một số thông tin đã được dịch tự động.</span>
                                <button className="underline font-semibold text-base tracking-wider text-gray-800">Hiển thị ngôn ngữ gốc</button>
                            </div>
                        </div>
                        <p className="text-base tracking-wider text-gray-800 mb-4">{data?.moTa}...</p>
                        <button className="underline font-semibold text-base tracking-wider text-gray-800">Hiển thị thêm<span className="ml-1">
                            <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{ height: 12, width: 12, display: 'inline-block', fill: 'var(--f-k-smk-x)' }}>
                                <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd" />
                            </svg>
                        </span>
                        </button>
                    </div>
                    <div className="mt-5 pb-5">
                        <div>
                            <h2 className="font-semibold text-gray-800 text-xl pb-4">Nơi này có những gì cho bạn</h2>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="flex items-center pb-4">
                                <div>
                                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: 24, width: 24, fill: 'currentcolor' }}>
                                        <path d="M26 1a5 5 0 0 1 5 5c0 6.389-1.592 13.187-4 14.693V31h-2V20.694c-2.364-1.478-3.942-8.062-3.998-14.349L21 6l.005-.217A5 5 0 0 1 26 1zm-9 0v18.118c2.317.557 4 3.01 4 5.882 0 3.27-2.183 6-5 6s-5-2.73-5-6c0-2.872 1.683-5.326 4-5.882V1zM2 1h1c4.47 0 6.934 6.365 6.999 18.505L10 21H3.999L4 31H2zm14 20c-1.602 0-3 1.748-3 4s1.398 4 3 4 3-1.748 3-4-1.398-4-3-4zM4 3.239V19h3.995l-.017-.964-.027-.949C7.673 9.157 6.235 4.623 4.224 3.364l-.12-.07zm19.005 2.585L23 6l.002.31c.045 4.321 1.031 9.133 1.999 11.39V3.17a3.002 3.002 0 0 0-1.996 2.654zm3.996-2.653v14.526C27.99 15.387 29 10.4 29 6a3.001 3.001 0 0 0-2-2.829z" /></svg></div><div className="ml-4 text-base tracking-wider text-gray-800">
                                    {data?.bep ? 'Bếp' : 'Không Có Bếp'}
                                </div>
                            </div>
                            <div className="flex items-center pb-4">
                                <div>
                                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: 24, width: 24, fill: 'currentcolor' }}>
                                        <path d="m15.9999 20.33323c2.0250459 0 3.66667 1.6416241 3.66667 3.66667s-1.6416241 3.66667-3.66667 3.66667-3.66667-1.6416241-3.66667-3.66667 1.6416241-3.66667 3.66667-3.66667zm0 2c-.9204764 0-1.66667.7461936-1.66667 1.66667s.7461936 1.66667 1.66667 1.66667 1.66667-.7461936 1.66667-1.66667-.7461936-1.66667-1.66667-1.66667zm.0001-7.33323c3.5168171 0 6.5625093 2.0171251 8.0432368 4.9575354l-1.5143264 1.5127043c-1.0142061-2.615688-3.5549814-4.4702397-6.5289104-4.4702397s-5.5147043 1.8545517-6.52891042 4.4702397l-1.51382132-1.5137072c1.48091492-2.939866 4.52631444-4.9565325 8.04273174-4.9565325zm.0001-5.3332c4.9804693 0 9.3676401 2.540213 11.9365919 6.3957185l-1.4470949 1.4473863c-2.1746764-3.5072732-6.0593053-5.8431048-10.489497-5.8431048s-8.31482064 2.3358316-10.48949703 5.8431048l-1.44709488-1.4473863c2.56895177-3.8555055 6.95612261-6.3957185 11.93659191-6.3957185zm-.0002-5.3336c6.4510616 0 12.1766693 3.10603731 15.7629187 7.9042075l-1.4304978 1.4309874c-3.2086497-4.44342277-8.4328305-7.3351949-14.3324209-7.3351949-5.8991465 0-11.12298511 2.89133703-14.33169668 7.334192l-1.43047422-1.4309849c3.58629751-4.79760153 9.31155768-7.9032071 15.7621709-7.9032071z" />
                                    </svg>
                                </div>
                                <div className="ml-4 text-base tracking-wider text-gray-800">{data?.wifi ? 'Wifi' : 'Không Có Wifi'}</div>
                            </div>
                            <div className="flex items-center pb-4">
                                <div>
                                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: 24, width: 24, fill: 'currentcolor' }}>
                                        <path d="M25 1a2 2 0 0 1 1.995 1.85L27 3l-.001 26H29v2H3v-2h1.999L5 3a2 2 0 0 1 1.85-1.995L7 1zm0 2H7l-.001 26h18zm-3 12a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                    </svg>
                                </div>
                                <div className="ml-4 text-base tracking-wider text-gray-800">{data?.thanMay ? 'Thang Máy' : 'Không Có Thang Máy'}</div>
                            </div>
                            <div className="flex items-center pb-4">
                                <div>
                                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: 24, width: 24, fill: 'currentcolor' }}>
                                        <path d="M9 29v-2h2v-2H6a5 5 0 0 1-4.995-4.783L1 20V8a5 5 0 0 1 4.783-4.995L6 3h20a5 5 0 0 1 4.995 4.783L31 8v12a5 5 0 0 1-4.783 4.995L26 25h-5v2h2v2zm10-4h-6v2h6zm7-20H6a3 3 0 0 0-2.995 2.824L3 8v12a3 3 0 0 0 2.824 2.995L6 23h20a3 3 0 0 0 2.995-2.824L29 20V8a3 3 0 0 0-2.824-2.995z" />
                                    </svg>
                                </div>
                                <div className="ml-4 text-base tracking-wider text-gray-800">{data?.tivi ? 'TiVi' : 'Không Có Ti Vi'}</div>
                            </div>
                            <div className="flex items-center pb-4">
                                <div>
                                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: 24, width: 24, fill: 'currentcolor' }}>
                                        <path d="M16 0a5 5 0 0 1 4.995 4.783L21 5l.001 12.756.26.217a7.984 7.984 0 0 1 2.717 5.43l.017.304L24 24a8 8 0 1 1-13.251-6.036l.25-.209L11 5A5 5 0 0 1 15.563.019l.22-.014zm0 2a3 3 0 0 0-2.995 2.824L13 5v13.777l-.428.298a6 6 0 1 0 7.062.15l-.205-.15-.428-.298L19 11h-4V9h4V7h-4V5h4a3 3 0 0 0-3-3zm1 11v7.126A4.002 4.002 0 0 1 16 28a4 4 0 0 1-1-7.874V13zm-1 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                                    </svg>
                                </div>
                                <div className="ml-4 text-base tracking-wider text-gray-800">{data?.dieuHoa ? 'Điều Hòa' : 'Không Có Điều Hòa'}</div>
                            </div>
                            <div className="flex items-center pb-4">
                                <div>
                                    <i className="fa-solid fa-person-swimming" />
                                </div>
                                <div className="ml-4 text-base tracking-wider text-gray-800">{data?.hoBoi ? 'Hồ Bơi' : 'Không Có Hồ Bơi'}</div>
                            </div>
                            <div>
                                <div className="flex items-center pb-4">
                                    <div>
                                        <i className="fa-solid fa-square-parking text-xl ml-1"></i>
                                    </div>
                                    <div className="ml-4 text-base tracking-wider text-gray-800">{data?.doXe ? 'Bãi Đậu Xe' : 'Không Bãi Đậu Xe'}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <button className="border border-solid border-gray-900 hover:bg-gray-100 transition-all duration-200 rounded-md px-5 py-3 font-semibold text-base text-gray-800 tracking-wider">Hiển thị tất cả tiện nghi</button>
                    </div>
                </div>
                <PopupDatPhong giaTien={data?.giaTien} />
            </div>
            <div className='mt-20'>
                <h1 className='text-lg font-semibold mb-10'>Bình Luận</h1>
                <div>
                    <BinhLuan />
                </div>
            </div>
            {isOpenModal ? 
            <div className='ModalBtn_Layout'>
                <ModalBtn />
            </div> : ''}
        </div>
    )
}
