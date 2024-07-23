// Thêm link hiển thị text “facebook” link đến trang facebook.com ở sau thẻ p
let para = document.querySelector("p")
console.log(para)

para.insertAdjacentHTML("afterend","<a href='https://www.facebook.com'>facebook</a>")
// Đếm số từ có trong đoạn văn. Tạo 1 thẻ div để hiển thị số từ
let divShow = document.createElement("div")
divShow.innerHTML ="Tổng số từ của thẻ đoạn văn: "
document.body.appendChild(divShow)
divShow.classList.add("show-count")
console.log(divShow)

console.log(para.textContent)
let count = 0;

//   for (let i = 0; i < para.length; i++) {
    let char = para.textContent.trim().split(/\s+/);
    count += char.length;

// Highlight tất cả các từ có độ dài lớn hơn hoặc bằng 5 ký tự trong đoạn văn (background = “yellow”)

    for (let i = 0; i < char.length; i++) {
        if (char[i].length >= 5) {
          let span = `<span style="background-color: yellow">${char[i]}</span>`;
          char[i] = span;
        }
      }
      para.innerHTML = char.join(" ");
// }

divShow.innerHTML += count;
console.log(count);

// Thay thế ký hiệu (, - dấu phẩy) => 🤔 và (. - dấu chấm) => 😲

para.innerHTML = para.innerHTML.replace(/,/g, '🤔');
para.innerHTML = para.innerHTML.replace(/\./g, '😲');
