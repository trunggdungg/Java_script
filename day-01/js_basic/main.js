console.log("hello world");


// khai báo biến của js ko cần khai báo kiểu dữ liệu
// Khai báo biến và không gán giá trị cho biến
let age;
console.log(age) //undifined (primitive data)
age = 35;
console.log(age)

// Khai báo biến và gán giá trị cho biến
let email = "hien@techmaster.vn"
console.log(email) // string 
// khởi tạo hằng số
const NUMBER = 10;
const Object =10;
console.log(Object);


// template String
let name = "Trung Dũng"
let year = 2003

console.log(`Xin chào các bạn, mình tên là ${name}. Năm nay ${2024 - year} tuổi`);

//không dung tp string
console.log("Xin chào các bạn, mình tên là " + name + ". Năm nay " + (2024 - year) + " tuổi");


//funtion
//tính tổng hai số :
//c1 : regular funtion( kiểu truyền thống)

function sum(a,b){
    return a +b;
}

//c2: funtion exprestion
let sum1 = function(a,b){// funtion này ko có tên
    return a + b;
}

//c3: arrow funtion(ES6) - gần giống lambda funtion (java 8)
let sum2 = (a,b) =>{
    return a + b;
}

console.log(sum(10,29));
console.log(sum1(23,34));
console.log(sum2(23,3));


// vòng lặp for
for (let day = 1; day <= 30; day++) {
    console.log(`Ngày ${day} thức dậy lúc 5:00`);
}
