// Khai báo array rỗng
let arr = [];

// Khai báo array
let number = [];

// Gán giá trị cho các phần tử của array thông qua chỉ số
number[0] = 1;
number[1] = "Bùi Hiên";
number[2] = true;

// Khai báo và khởi tạo giá trị cho array
let myArr = [1, 2, 3, 4, true, false, "Nguyễn Văn A"];


// Bài 1: Viết function tìm số lớn nhất trong mảng
let array = [1, 11, 5, 55, 67, 23, 3, 11];
// so sánh -> gán
function findMax(arr) {
    let max = arr[0]; // Giả sử phần tử đầu tiên là lớn nhất
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Gán giá trị mới cho max nếu tìm thấy phần tử lớn hơn
        }
    }
    return max;
}
console.log(findMax(array)); // Kiểm tra kết quả: 67


// xếp loại 
const findMax2 = (arr) => {
    arr.sort((a, b) => b - a);
    return arr[0];
}

console.log(findMax2(array));

const findMax3 = (arr) => {// cú pháp ES6 :speed perator
    return Math.max(...arr)
}
console.log(findMax3(array)); // Kiểm tra kết quả: 67


// Bài 3: Viết function cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2
//Ví dụ : [4,2,5,6,2,7] => [0,0,1,0,0,1]

let arrayy = [1, 2, 5, 4, 6, 23, 3, 11];

function modulo(arr) {
    let arrNull = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            arrNull.push(arr[i]);
        }
    }
    return arrNull;
}

console.log(modulo(arrayy)); // Kiểm tra kết quả

// c2
const modulo2 = (ar) =>{
    return ar.map((e) => e % 2)
}

console.log(modulo(arrayy))

// Bài 5: Viết function truyền vào 1 chuỗi, hãy sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang (Sử dụng array để làm)
//Ví dụ: repeatString(‘a’) => Kết quả trả về là ‘a-a-a-a-a-a-a-a-a-a’

function repeatString(str) {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(str);
    }
    let result = arr.join('-');
    return result;
}

console.log(repeatString('a')); 

