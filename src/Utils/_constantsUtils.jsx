export const GROUPID = 'GP01';
export const TOKEN = 'token';
export const USER_LOGIN = 'USER_LOGIN';

export function formatDateToDDMMYYYY(date) {
    const timestamp = new Date(date);
    const day = timestamp.getDate();
    const month = timestamp.getMonth() + 1; // Tháng tính từ 0, nên cộng thêm 1
    const year = timestamp.getFullYear();

    // Đảm bảo rằng ngày và tháng luôn có 2 chữ số
    const formattedDay = day < 10 ? "0" + day : day;
    const formattedMonth = month < 10 ? "0" + month : month;

    // Tạo chuỗi định dạng "dd/mm/yyyy"
    const formattedDate = formattedDay + "/" + formattedMonth + "/" + year;

    return formattedDate;
}


export function removeDuplicates(arr) {
    return arr.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
}


export function convertDateFormat(inputDate) {
    const dateParts = inputDate.split("/");
    const year = dateParts[2];
    const month = dateParts[1].padStart(2, '0');
    const day = dateParts[0].padStart(2, '0');
    const isoDate = `${year}-${month}-${day}T00:00:00.000Z`;
    return isoDate;
}
