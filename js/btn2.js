const cats = [
    {
        img: "./img/cat1.jpg",
        decr: "Это ты - такая же миленькая",
    },
    {
        img: "./img/cat2.jpg",
        decr: "Это ты стоишь внимательно слушаешь",
    },
    {
        img: "./img/cat3.jpg",
        decr: "Это ты уже все, в отключке хахах",
    },
    {
        img: "./img/cat4.jpg",
        decr: "Это ты меня зовешь к себе, типо привет пупсэээээк AXAXAXAXAXAX",
    },
    {
        img: "./img/cat5.jpg",
        decr: "это ты проснулась)",
    },
    {
        img: "./img/cat6.jpg",
        decr: "Это ты когда обижаешься XAXAXAXAXAXAXAXAXAXAX",
    },
    {
        img: "./img/cats1.jpg",
        decr: "О, а это мы втыкаем хахахха",
    },
    {
        img: "./img/cats2.jpg",
        decr: "А это мы спим :)",
    },
    {
        img: "./img/cats3.jpg",
        decr: "А это мы бесимся хах",
    },
];

const renderBtn = document.querySelector(".render-btn");
const ulEl = document.querySelector(".images-list");
const parEl = document.querySelectorAll(".page-text");

renderBtn.addEventListener("click", onRenderBtnClick);

function onRenderBtnClick() {
    parEl[0].classList.add("is-hidden");
    renderBtn.classList.add("is-hidden");
    parEl[1].classList.remove("is-hidden");
    ulEl.classList.remove("is-hidden");
}

ulEl.innerHTML = cats.map(({img, decr }) => {
return`<li class="gallery-item">
<a class="gallery-link" href="${img}">
    <img 
        class="gallery-image" 
        src="${img}" 
        alt="${decr}" 
        width="400"
        height="360"
        />
</a>
</li>
`
}).join("");

new SimpleLightbox(".images-list a", {
    captionsData: "alt",
    captionDelay: 250,
});
