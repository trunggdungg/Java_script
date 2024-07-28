const sayHello = () => {
    alert("Xin chào các bạn 1")
}

const btn2 = document.getElementById("btn-2")
btn2.onclick = () => {
    alert("Xin chào các bạn 2")
}

const btn3 = document.getElementById("btn-3")
btn3.addEventListener("click", () => {
    alert("XIn chào các bạn 3")
})

// 
const btnplay = document.getElementById("play")
const btnpause = document.getElementById("pause")
const timeEl = document.getElementById("time")
const mess = document.getElementById("mess")

console.log(btnplay)
console.log(btnpause)
console.log(timeEl)
console.log(mess)

let time = 10;
let interval;

btnplay.addEventListener("click", () => {
    interval = setInterval(() => {
        time--;
        timeEl.innerText = `${time}s`;
        if (time === 0) {
            mess.innerText = "Time out!";
            clearInterval(interval);
        }
    }, 1000);
});

btnpause.addEventListener("click", () => {
    clearInterval(interval);
});
