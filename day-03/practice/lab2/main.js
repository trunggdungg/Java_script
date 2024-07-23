// Câu 1. Tạo 1 thẻ p có id=“text”, có nội dung bất kỳ (có thể tạo bằng HTML hay Javascript - tùy chọn). Yêu cầu

// Đặt màu văn bản thành #777
let p1 = document.getElementById("text")
console.log(p1)
p1.style.color = "#777"
// Đặt kích thước phông chữ thành 2rem
p1.style.fontSize = "2rem"
// Đặt nội dung HTML thành Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.
p1.innerHTML = "Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript."

// Câu 2. Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu blue (tạo thẻ ul-li bằng html)

let li = document.querySelectorAll("#myList li")
console.log(li)

for (let i = 0; i < li.length; i++) {
    li[i].style.color = "blue"

}

// Câu 3. Cho mã HTML có nội dung như sau (tạo thẻ ul-li bằng html):
// Sử dụng javascript để thực hiện những công việc sau
// Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách

for (let i = 8; i < 11; i++) {
    let newLi = document.createElement("li")
    newLi.textContent = (`Item ${i}`)
    list.appendChild(newLi)
}
// Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
let li1 = document.querySelector("#list li")
console.log(li1)
li1.style.color = "red"
// Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
let li3 = document.querySelector("#list li:nth-child(3)")
console.log(li3)
li3.style.color = "blue"
// Remove thẻ <li> 4
let li4 = document.querySelector("#list li:nth-child(4)")

let parent4 = document.querySelector("#list")
parent4.removeChild(li4)
// Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ
let li500 = document.createElement("li")
li500.innerText = "đây là li 500"

// li3.insertAdjacentElement("afterend", li500)

// cách 2  
li3.insertAdjacentHTML("afterend", "<li>đây là nội dung mới</li>")