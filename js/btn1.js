const inputNum = document.querySelector(".input-number");
const textList = document.querySelector(".text");
const btn = document.querySelector(".button");
btn.addEventListener("click", () => { 
    textList.innerHTML = "";
    for (let i = 0; i < inputNum.value; i++) { 
        if (inputNum.value < 1) return alert("Нужно больше нуля");
        if (inputNum.value >= 50000) {
            inputNum.value = "";
            return alert("Даже сайт не выдерживает такой любви от меня к тебе");
        }
        const liEl = document.createElement("li");
        textList.appendChild(liEl);
        const str = document.createElement("p");
        liEl.appendChild(str);
        str.textContent = "Я тебя люблю ♥";
    }
    inputNum.value = "";
})
