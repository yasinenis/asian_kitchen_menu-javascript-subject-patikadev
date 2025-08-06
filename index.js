
const MENU = [
    {
        id: 1,
        name: "Tteokbokki",
        category: "Korea",
        price: "10.99",
        img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
        desc: `Spicy rice cakes, serving with fish cake.`
    },
    {
        id: 2,
        name: "Chicken Ramen",
        category: "Japan",
        price: 7.99,
        img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
        desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
        id: 3,
        name: "Bibimbap",
        category: "Korea",
        price: 8.99,
        img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
        desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
        id: 4,
        name: "Dan Dan Mian",
        category: "China",
        price: 5.99,
        img: "pictures/Dan-Dan-Noodles-10.jpg",
        desc: `Dan dan noodle, serving with green onion `,
    },
    {
        id: 5,
        name: "Yangzhou Fried Rice",
        category: "China",
        price: 12.99,
        img:
            "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
        desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
        id: 6,
        name: "Onigiri",
        category: "Japan",
        price: 9.99,
        img:
            "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
        desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
        id: 7,
        name: "Jajangmyeon",
        category: "Korea",
        price: 15.99,
        img:
            "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
        desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
        id: 8,
        name: "Ma Yi Shang Shu",
        category: "China",
        price: 12.99,
        img:
            "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
        desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
        id: 9,
        name: "Doroyaki",
        category: "Japan",
        price: 3.99,
        img:
            "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
        desc: `Red bean paste dessert, serving with honey.`,
    },
];


let rowDOM = document.querySelector(".list-starts")

function listAll() {
    clearMenu()
    for (let i = 0; i < MENU.length; i++) {

        let createDOM = document.createElement("div");
        createDOM.classList.add("col-6");
        createDOM.classList.add("d-flex");
        createDOM.classList.add("mb-5");
        createDOM.innerHTML =
            `
        <img src="${MENU[i].img}" alt="hata">
        <div class ="d-flex flex-column ms-3 urun-info">
            <div class="d-flex urun-baslik">
                <h4>${MENU[i].name}</h4>
                <h4>${MENU[i].price}</h4>
            </div>
            <div class="menu-text">${MENU[i].desc}</div>
        </div>
        `
        rowDOM.appendChild(createDOM);
    }
}

function clearMenu() {
    rowDOM.innerHTML = ``
}

let koreaMenu = MENU.filter(yemek => yemek.category === "Korea")
let chinaMenu = MENU.filter(yemek => yemek.category === "China")
let japanMenu = MENU.filter(yemek => yemek.category === "Japan")

function listJapan() {
    clearMenu()
    for (let i = 0; i < japanMenu.length; i++) {

        let createDOM = document.createElement("div");
        createDOM.classList.add("col-6");
        createDOM.classList.add("d-flex");
        createDOM.classList.add("mb-5");
        createDOM.innerHTML =
            `
        <img src="${japanMenu[i].img}" alt="hata">
        <div class ="d-flex flex-column ms-3 urun-info">
            <div class="d-flex urun-baslik">
                <h4>${japanMenu[i].name}</h4>
                <h4>${japanMenu[i].price}</h4>
            </div>
            <div class="menu-text">${japanMenu[i].desc}</div>
        </div>
        `
        rowDOM.appendChild(createDOM);
    }
}

function listKorea() {
    clearMenu()
    for (let i = 0; i < koreaMenu.length; i++) {

        let createDOM = document.createElement("div");
        createDOM.classList.add("col-6");
        createDOM.classList.add("d-flex");
        createDOM.classList.add("mb-5");
        createDOM.innerHTML =
            `
        <img src="${koreaMenu[i].img}" alt="hata">
        <div class ="d-flex flex-column ms-3 urun-info">
            <div class="d-flex urun-baslik">
                <h4>${koreaMenu[i].name}</h4>
                <h4>${koreaMenu[i].price}</h4>
            </div>
            <div class="menu-text">${koreaMenu[i].desc}</div>
        </div>
        `
        rowDOM.appendChild(createDOM);
    }
}

function listChina() {
    clearMenu()
    for (let i = 0; i < chinaMenu.length; i++) {

        let createDOM = document.createElement("div");
        createDOM.classList.add("col-6");
        createDOM.classList.add("d-flex");
        createDOM.classList.add("mb-5");
        createDOM.innerHTML =
            `
        <img src="${chinaMenu[i].img}" alt="hata">
        <div class ="d-flex flex-column ms-3 urun-info">
            <div class="d-flex urun-baslik">
                <h4>${chinaMenu[i].name}</h4>
                <h4>${chinaMenu[i].price}</h4>
            </div>
            <div class="menu-text">${chinaMenu[i].desc}</div>
        </div>
        `
        rowDOM.appendChild(createDOM);
    }
}


listAll()





