//1. Truy cập vào thẻ h1 có id=“heading” thay đổi màu chữ thành ‘red’, và in hoa nội dung của thẻ đó
let h1c2 = document.getElementById("heading");
console.log(h1c2);
let h1 = document.querySelector("h1");
let h1c3 = document.querySelector("#heading");
console.log(h1);

h1.style.color = "red";
h1.style.textTransform = "uppercase";
//2. Thay đổi màu chữ của tất cả thẻ có class “para” thành màu “blue” và có font-size = “20px”
let para = document.querySelectorAll(".para")
console.log(para)
for (let i = 0; i < para.length; i++) {
    para[i].style.color = "blue"
    para[i].style.fontSize = "20px"
}

//3. Thêm thẻ a link đến trang ‘facebook’ ở đằng sau thẻ có class “para-3”
let link = document.createElement('a')
link.href = "https://www.facebook.com/"
link.innerHTML = "<span>FaceBook</span>";
console.log(link);

let content = document.querySelector(".content")
console.log(content)

document.body.insertBefore(link, content)

//4. Thay đổi nội dung của thẻ có id=“title” thành “Đây là thẻ tiêu đề”
let tit = document.querySelector("#title");
console.log(tit)
tit.innerText = "Đây là thẻ tiêu đề!"

//5. Thêm class “text-bold” vào thẻ có class=“description” (định nghĩa class “text-bold” có tác dụng in đậm chữ)
let description = document.querySelector(".description");
console.log(description)

description.classList.add("text-bold")
//6. Thay thế thẻ có class=“para-3” thành thẻ button có nội dung là “Click me”

let btn = document.createElement("button")
btn.innerText = " Click me"
console.log(btn)

let para3 = document.querySelector(".para-3")
console.log(para3)

document.body.replaceChild(btn,para3)
//7. Copy thẻ có class=“para-2” và hiển thị ngay đằng sau thẻ đó
let para2 = document.querySelector(".para-2")
console.log(para2)

let p2cop = para2.cloneNode(true);

document.body.insertBefore(p2cop,btn)
//8. Xóa thẻ có class=“para-1”
let para1 = document.querySelector(".para-1")
console.log(para1)

document.body.removeChild(para1)