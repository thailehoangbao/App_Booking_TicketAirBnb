import React from 'react'

export default function Footer() {
  return (
    <div className="border-t mt-5 pt-5 bg-gray-100">
      <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4 px-10 pb-10 mb-5">
        <div className="flex flex-col space-y-4">
          <h2 className="font-semibold">Hỗ trợ</h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
            <a rel="noopener noreferrer" aria-current="page" className="nav-link hover:underline active" href="/">
              <span>Trung tâm trợ giúp</span>
            </a>
            <a className="nav-link hover:underline active" href="/">AirCover</a>
            <a className="nav-link hover:underline active" href="/">Thông tim an toàn</a>
            <a className="nav-link hover:underline active" href="/">Hỗ trợ người khuyết tật</a>
            <a className="nav-link hover:underline active" href="/">Các tùy chọn hủy</a>
            <a className="nav-link hover:underline active" href="/">Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi</a>
            <a className="nav-link hover:underline active" href="/">Báo cáo lo ngại của hàng xóm</a>
          </div>
        </div>
        <div className="flex flex-col space-y-4"><h2 className="font-semibold">Cộng đồng</h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
            <a className="nav-link hover:underline active" href="/">Airbnb.org: nhà ở cứu trợ</a>
            <a className="nav-link hover:underline active" href="/">Hỗ trợ dân tị nạn Afghanistan</a>
            <a className="nav-link hover:underline active" href="/">Chống phân biệt đối xử</a>
          </div>
        </div>
        <div className="flex flex-col space-y-4"><h2 className="font-semibold">Đón tiếp khách</h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
            <a className="nav-link hover:underline active" href="/">Thử đón tiếp khách</a>
            <a className="nav-link hover:underline active" href="/">AirCover cho Chủ nhà</a>
            <a className="nav-link hover:underline active" href="/">Xem tài nguyên đón tiếp khách</a>
            <a className="nav-link hover:underline active" href="/">Truy cập diễn đàn cộng đồng</a>
            <a className="nav-link hover:underline active" href="/">Đón tiếp khách có trách nhiệm</a>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-semibold">Airbnb</h2>
          <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
            <a rel="noopener noreferrer" aria-current="page" className="nav-link hover:underline active" href="/">Trang tin tức</a>
            <a rel="noopener noreferrer" aria-current="page" className="nav-link hover:underline active" href="/">Tìm hiểu các tính năng mới</a>
            <a rel="noopener noreferrer" aria-current="page" className="nav-link hover:underline active" href="/">Thư ngỏ từ các nhà sáng lập</a>
            <a rel="noopener noreferrer" aria-current="page" className="nav-link hover:underline active" href="/">Cơ hội nghề nghiệp</a>
            <a rel="noopener noreferrer" aria-current="page" className="nav-link hover:underline active" href="/">Nhà đầu tư</a>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 border-t fixed bottom-0 w-screen z-10  py-3 hidden md:block">
        <div className="container mx-auto px-10 flex justify-between items-center text-gray-500 ">
          <div>
            <span className='text-sm'>© 2022 Airbnb, Inc.</span>
            <span className="text-sm px-3 hover:underline cursor-pointer">Quyền riêng tư</span>
            .<span className="text-sm px-3 hover:underline cursor-pointer">Điều khoản</span>
            .<span className="text-sm px-3 hover:underline cursor-pointer">Sơ đồ trang web</span>
            .</div>
          <div className="text-gray-700">
            <span>
              <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'inline-block', height: 16, width: 16, fill: 'currentcolor' }}>
                <path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z" /></svg></span><span className="hover:underline cursor-pointer px-3 font-medium text-sm">Tiếng Việt(VN)</span>
            <i className="fa fa-dollar-sign font-medium cursor-pointer" />
            <span className="hover:underline cursor-pointer px-2 text-sm font-medium">USD</span>
            <span className="font-medium hover:underline text-sm">Hỗ trợ tài nguyên <i className="fa fa-angle-up" /></span>
          </div>
        </div>
      </div>
    </div>
  )
}
