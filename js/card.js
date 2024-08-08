const cardData = [
    { date: "11 AUGUST 2022", title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer Marketing yang Tepat", image: "./img/card_1.jpg" },
    { date: "5 SEPTEMBER 2022", title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", image: "./img/card_2.jpg" },
    { date: "11 SEPTEMBER 2023", title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer Marketing yang Tepat", image: "./img/card_1.jpg" },
    { date: "8 SEPTEMBER 2023", title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", image: "./img/card_2.jpg" },
    { date: "7 SEPTEMBER 2023", title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer Marketing yang Tepat", image: "./img/card_1.jpg" },
    { date: "5 SEPTEMBER 2023", title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", image: "./img/card_2.jpg" },
    { date: "21 AUGUST 2023", title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer Marketing yang Tepat", image: "./img/card_1.jpg" },
    { date: "18 AUGUST 2023", title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", image: "./img/card_2.jpg" },
    { date: "15 AUGUST 2023", title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer Marketing yang Tepat", image: "./img/card_1.jpg" },
    { date: "9 AUGUST 2023", title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", image: "./img/card_2.jpg" },
    { date: "7 AUGUST 2023", title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer Marketing yang Tepat", image: "./img/card_1.jpg" },
    { date: "3 AUGUST 2023", title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", image: "./img/card_2.jpg" },
    { date: "1 AUGUST 2023", title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer Marketing yang Tepat", image: "./img/card_1.jpg" },
    { date: "14 JULY 2023", title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", image: "./img/card_2.jpg" },
    { date: "12 JULY 2023", title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer Marketing yang Tepat", image: "./img/card_1.jpg" },
    { date: "28 JUNE 2023", title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", image: "./img/card_2.jpg" },
    { date: "27 JUNE 2023", title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer Marketing yang Tepat", image: "./img/card_1.jpg" },
    { date: "20 JUNE 2023", title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", image: "./img/card_2.jpg" },

];

let pageIndex = 0;
const nav = document.querySelector('.links');
const button = document.querySelectorAll('.button');

export function updateCards() {
    const showPerPage = parseInt(document.getElementById("show").value);
    const sortBy = document.getElementById("sort").value;
    const cardBarIndicator = document.querySelector(".card-bar-indicator")
    cardBarIndicator.innerHTML = ''
    const dateElementIndicator = document.createElement("p");
    dateElementIndicator.textContent = `Showing 1 - ${showPerPage} of 100`
    cardBarIndicator.append(dateElementIndicator)

    cardData.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return sortBy === "newest" ? dateB - dateA : dateA - dateB;
    });

    const cardContainer = document.querySelector(".card-container");

    cardContainer.innerHTML = "";

    for (let i = pageIndex * showPerPage; i < (pageIndex * showPerPage) + showPerPage; i++) {
        const cardElement = document.createElement("div");
        cardElement.className = "card";

        const imgElement = document.createElement("img");
        imgElement.loading = "lazy"
        imgElement.src = cardData[i].image;
        imgElement.alt = "";

        const cardContentElement = document.createElement("div");
        cardContentElement.className = "card-content";

        const dateElement = document.createElement("p");
        dateElement.textContent = cardData[i].date;
        
        const titleElement = document.createElement("h3");
        titleElement.textContent = cardData[i].title;

        cardContentElement.appendChild(dateElement);
        cardContentElement.appendChild(titleElement);

        cardElement.appendChild(imgElement);
        cardElement.appendChild(cardContentElement);

        cardContainer.appendChild(cardElement);
    }
    loadPageNav()
}

let penandaPage = 0;

function loadPageNav() {
    nav.innerHTML = "";
    const showPerPage = parseInt(document.getElementById("show").value);
    for (let i = 0; i < (cardData.length / showPerPage); i++) {

        const span = document.createElement('span');
        span.innerHTML = i + 1;
        span.addEventListener('click', (e) => {
            pageIndex = e.target.innerHTML - 1;
            penandaPage = e.target.innerHTML - 1;
            
            document.querySelectorAll('.links span').forEach((el) => {
                el.classList.remove('active');
            });
            
            e.target.classList.add('active');
            updateCards();
        });
        if (i === pageIndex) {
            span.style.fontSize = "1rem";
            span.classList.add('active');
        }
        nav.append(span);
    }
}

export function updateNextButton() {
    if (penandaPage != nav.childNodes.length - 1) {
        penandaPage = penandaPage + 1;
    }
    pageIndex = penandaPage
    document.querySelectorAll('.links span').forEach((el) => {
        el.classList.remove('active');
    });
    nav.childNodes[penandaPage].classList.add('active');
    updateCards();
}

export function updatePrevButton() {
    if (penandaPage != 0) {
        penandaPage = penandaPage - 1;
    }
    pageIndex = penandaPage
    document.querySelectorAll('.links span').forEach((el) => {
        el.classList.remove('active');
    });
    nav.childNodes[penandaPage].classList.add('active');
    updateCards();
}

export function updateFirstButton() {
    if (penandaPage != 0) {
        penandaPage = 0;
    }
    pageIndex = penandaPage
    document.querySelectorAll('.links span').forEach((el) => {
        el.classList.remove('active');
    });
    nav.childNodes[penandaPage].classList.add('active');
    updateCards();
}

export function updateLastButton() {
    if (penandaPage != nav.childNodes.length - 1) {
        penandaPage = nav.childNodes.length - 1
    }
    pageIndex = penandaPage
    document.querySelectorAll('.links span').forEach((el) => {
        el.classList.remove('active');
    });
    nav.childNodes[penandaPage].classList.add('active');
    updateCards();
}