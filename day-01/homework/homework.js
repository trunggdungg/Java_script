// Bài 1: Viết function truyền vào 1 số nguyên dường. Tính giai thừa của số đó

function calculateFactorial(a) {
    let fact = 1;
    for (let i = 1; i <= a; i++) {
        fact *= i;
    }
    console.log(fact);
}
calculateFactorial(5);

// Bài 2: Viết function truyền vào 1 chuỗi. In ra chuỗi đảo ngược của chuỗi đó

function reverseString(s) {
    let reverseStr = "";
    for (let i = s.length - 1; i >= 0; i--) {
        reverseStr += s[i];
    }
    console.log(reverseStr);
}
reverseString("hello");

// Bài 3: Viết function truyền vào mã quốc gia. Trả về message có ý nghĩa là “Xin chào”, tương ứng với mã quốc gia được truyền vào

function translate(code) {
    switch (code) {
        case "VN":
            console.log("Xin chào!")
            break;
        case "CN":
            console.log("Ní Hảo")
            break;
        case "JA":
            console.log("Ha Lô")
            break;
        case "TL":
            console.log("Xa Qua Ni Kham!")
            break;
        default:
            console.log("Invalid code!")
            break;
    }
}
translate("VN");

// Bài 4: Cho function truyền vào 1 chuỗi dài hơn 15 ký tự.
//  Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu “…” ở cuối chuỗi.

function subString(str) {
    let subStr = "";
    if (str.length > 15) {
        for (let i = 0; i < 10; i++) {
            subStr += str[i];
        }
        subStr += "..."
    }else{
        console.log("Chuỗi bạn truyền vào hơi ngắn!")
    }
    console.log(subStr);
}

subString("xinchaocacbandenvoiTechmaster")
