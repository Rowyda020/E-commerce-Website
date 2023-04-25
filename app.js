const sliderWrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")
const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "./imgs/air.png",
            },
            {
                code: "navy",
                img: "./imgs/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 149,
        colors: [
            {
                code: "lightgray",
                img: "./imgs/jordan.png",
            },
            {
                code: "green",
                img: "./imgs/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
            {
                code: "lightgray",
                img: "./imgs/blazer.png",
            },
            {
                code: "green",
                img: "./imgs/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
            {
                code: "black",
                img: "./imgs/crater.png",
            },
            {
                code: "lightgray",
                img: "./imgs/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
            {
                code: "gray",
                img: "./imgs/hippie.png",
            },
            {
                code: "black",
                img: "./imgs/hippie2.png",
            },
        ],
    },
];

let choosenProduct = products[0]

const currProductImg = document.querySelector(".productImg");
const currProductTitle = document.querySelector(".productTitle");
const currProductPrice = document.querySelector(".productPrice");
const currProductColors = document.querySelectorAll(".color");
const currProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change curr slide
        sliderWrapper.style.transform = `translateX(${-100 * index}vw)`
        //change chosen product
        choosenProduct = products[index]
        //change text of currProduct
        currProductTitle.textContent = choosenProduct.title
        currProductPrice.textContent = "$" + choosenProduct.price
        currProductImg.src = choosenProduct.colors[0].img
        //assigning new colors
        currProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        })
    });
});


currProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currProductImg.src = choosenProduct.colors[index].img
    })
})

currProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currProductSizes.forEach((size) => {
            size.style.backgroundColor = "white"
            size.style.color = "black"
        })
        size.style.backgroundColor = "black"
        size.style.color = "white"
    })
})

const productButton = document.querySelector(".productButton")
const payment = document.querySelector(".payment")
const close = document.querySelector(".close")

productButton.addEventListener(("click"), () => {
    payment.style.display = "flex"
})

close.addEventListener(("click"), () => {
    payment.style.display = "none"
})