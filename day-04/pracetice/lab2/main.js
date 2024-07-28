document.addEventListener("click", (e) => {
    const curenEl = document.querySelector(".circle")
    // if(curenEl){
    //     curenEl.parentElement.removeChild(curenEl)
    // }

    if (curenEl) {
        // curenEl.parentElement.removeChild(curenEl)

        curenEl.style.left = `${e.offsetX - 50}px`
        curenEl.style.top = `${e.offsetY - 50}px`
        return
    }
    const circleEl = document.createElement("div");
    circleEl.classList.add("circle");

    circleEl.style.left = `${e.offsetX - 50}px`
    circleEl.style.top = `${e.offsetY - 50}px`

    document.body.appendChild(circleEl)

})