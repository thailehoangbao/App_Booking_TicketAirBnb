import { USER_LOGIN } from 'Utils/_constantsUtils'
import React from 'react'

export default function Person({ binhLuan }) {
    const user = JSON.parse(localStorage.getItem(USER_LOGIN)).content.user;
    return (
        <div className="max-w-md p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
            <article>
                <div className='grid grid-cols-4'>
                    <div className='col-span-2'>

                    </div>
                    <div className='col-span-2 text-right'>
                        <span className='text-sm text-gray-500 mr-2'>Số Sao {binhLuan.saoBinhLuan}</span>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                    </div>
                </div>
                <div className="flex items-center mt-8 space-x-4">
                    <img src={binhLuan.avatar ? binhLuan.avatar : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJzEaxLN-jGRYYUO65pWu7Q9GXoNt4LUSSA&usqp=CAU" } alt="" className="w-10 h-10 rounded-full dark:bg-gray-500" />
                    <div>
                        <h3 className="text-sm font-medium">{binhLuan.tenNguoiBinhLuan}</h3>
                        <time dateTime="2021-02-18" className="text-sm text-gray-400">{binhLuan.ngayBinhLuan}</time>
                    </div>
                </div>
                <p className="mt-4 dark:text-gray-400">{binhLuan.noiDung}</p>
            </article>
        </div>
    )
}
