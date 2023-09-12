import { UserOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import { TOKEN, USER_LOGIN } from '../../../../Utils/_constantsUtils';
import { useNavigate } from 'react-router-dom';

export default function HeaderAdmin() {
    const navigate = useNavigate(); 
    const user = JSON.parse(localStorage.getItem(USER_LOGIN))?.content.user;
    const [clickLogOut, setClickLogOut] = useState(false);
    const handleDangXuat = () => {
        localStorage.removeItem(USER_LOGIN);
        localStorage.removeItem(TOKEN);
        navigate('/login-auth',{replace:true});
    }
    return (
        <div className='grid grid-cols-4 gap-1 absolute' style={{ width: "300px", top: "0", right: "0" }}>
            <div className='col-span-2'>
                <span className='text-md'>Hello! </span>
                <span className='font-bold'>{user?.name}</span>
            </div>
            <div className='col-span-1 flex justify-center items-center'>
                <UserOutlined style={{ borderRadius: "50%", border: "1px solid black", padding: "2px" }} />
            </div>
            <div className='flex justify-start items-center col-span-1 relative'>
                <i className="fa-solid fa-angle-down text-lg hover:text-pink-600 cursor-pointer transition-all duration-500" onClick={() => {
                    setClickLogOut(!clickLogOut);
                }}></i>
                {
                clickLogOut ?
                    <div className='capNhatThongTinQLND absolute flex-col bg-slate-200 justify-start py-4' style={{ width: "180px", height: "100px", top: "50px", left: "-180px", border: "1px solid #333", borderRadius: "4px" }}>
                        <div className="h-1/2 flex justify-start items-center hover:bg-slate-500 transition-all duration-500 hover:text-pink-500 cursor-pointer"><i className="ml-4 fa-solid fa-angle-right"></i><span onClick={() => {
                            navigate('/InfoUser')
                        }}>Cập Nhật Thông Tin</span></div>
                        <div className='h-1/2 flex justify-start items-center hover:bg-slate-500 transition-all duration-500 hover:text-pink-500 cursor-pointer'><i className="ml-4 fa-solid fa-angle-right"></i><span onClick={handleDangXuat}>Đăng Xuất</span></div>
                    </div>
                :
                    ''
                }
            </div>
        </div>
    )
}
