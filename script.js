console.log('Newsfeed Portal');



// Code to toggle Navbar on clicking Hamburger Button

// Selecting the classes at 0th index
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const navMenu = document.getElementsByClassName('hamburger-button')[0];

// Adding a click listener to hamburger design
navMenu.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
})

// Close navbar menu when clicked on an list item
document.addEventListener('click', (e) => {
    if (e.target.closest(".navbar-links")) {
        navbarLinks.classList.toggle('active');
    }
});




// ----------------- News Container Section -----------------

// Grab the navbar links
const homepageBtn = document.getElementById('homepage');
const entertainmentBtn = document.getElementById('entertainment');
const technologyBtn = document.getElementById('technology');
const businessBtn = document.getElementById('business');
const sportsBtn = document.getElementById('sports');
const scienceBtn = document.getElementById('science');
const healthBtn = document.getElementById('health');



//Grab the container sections
const newsSubtitle = document.getElementById('news-sub-title');
const newsGridList = document.getElementById('news-list-grid');


// newsapi.org
const api_Token = '9330cb56e24447678ba025bf949441cd';
const api_Homepage = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${api_Token}`;
const api_Entertainment = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${api_Token}`;
const api_Technology = `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${api_Token}`;
const api_Business = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${api_Token}`;
const api_Sports = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${api_Token}`;
const api_Science = `https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=${api_Token}`;
const api_Health = `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${api_Token}`;




// ----------------- Fecthing Data from API to DOM -----------------

function fetchHomepageNews() {
    newsSubtitle.innerHTML = `<hr>
    <h3 class="sub-title"><b>Top Headlines</b></h3>
    <hr><br>`;

    fetch(api_Homepage).then((response) => {
        return response.json();
    }).then((data) => {
        let articles = data.articles;
        if (data.status === "ok") {
            
            let newsHtml = '';
            articles.forEach((element, index) => {
                let news;
                news = `
                    <div class="card card-${index + 1}">
                        <img src="${element['urlToImage']}" alt=" ">
                        <h5>
                            <a href="${element['url']}" target="_blank">${element['title']}</a><br>
                            <span class="source">Source : ${element['source'].name}</span>
                            <p class="description">${element['content']}</p>
                        </h5>
                    </div>
                    `;
                newsHtml += news;
            });
            newsGridList.innerHTML = newsHtml;
        }
        else {
            console.log('Some error occured while fetching data from API');
            newsGridList.innerHTML += `
                                        <h1 style="color:red;">Error Fetching data from API</h1>
                                    `;
        }
    });
}
fetchHomepageNews();



homepageBtn.addEventListener("click", () => {
    fetchHomepageNews();
});

entertainmentBtn.addEventListener("click", () => {
    newsSubtitle.innerHTML = `<hr>
    <h3 class="sub-title"><b>Entertainment</b></h3>
    <hr><br>`;

    fetch(api_Entertainment).then((response) => {
        return response.json();
    }).then((data) => {
        let articles = data.articles;
        if (data.status === "ok") {
            let newsHtml = '';
            articles.forEach((element, index) => {
                let news;
                news = `
                    <div class="card card-${index + 1}">
                        <img src="${element['urlToImage']}" alt=" ">
                        <h5>
                            <a href="${element['url']}" target="_blank">${element['title']}</a><br>
                            <span class="source">Source : ${element['source'].name}</span>
                            <p class="description">${element['content']}</p>
                        </h5>
                    </div>
                    `;
                newsHtml += news;
            });
            newsGridList.innerHTML = newsHtml;
        }
        else {
            console.log('Some error occured while fetching data from API');
            newsGridList.innerHTML += `
                                        <h1 style="color:red;">Error Fetching data from API</h1>
                                    `;
        }
    });
    
});

technologyBtn.addEventListener("click", () => {
    newsSubtitle.innerHTML = `<hr>
    <h3 class="sub-title"><b>Technology</b></h3>
    <hr><br>`;

    fetch(api_Technology).then((response) => {
        return response.json();
    }).then((data) => {
        let articles = data.articles;
        if (data.status === "ok") {
            let newsHtml = '';
            articles.forEach((element, index) => {
                let news;
                news = `
                    <div class="card card-${index + 1}">
                        <img src="${element['urlToImage']}" alt=" ">
                        <h5>
                            <a href="${element['url']}" target="_blank">${element['title']}</a><br>
                            <span class="source">Source : ${element['source'].name}</span>
                            <p class="description">${element['content']}</p>
                        </h5>
                    </div>
                    `;
                newsHtml += news;
            });
            newsGridList.innerHTML = newsHtml;
        }
        else {
            console.log('Some error occured while fetching data from API');
            newsGridList.innerHTML += `
                                        <h1 style="color:red;">Error Fetching data from API</h1>
                                    `;
        }
    });
});

businessBtn.addEventListener("click", () => {
    newsSubtitle.innerHTML = `<hr>
    <h3 class="sub-title"><b>Business</b></h3>
    <hr><br>`;

    fetch(api_Business).then((response) => {
        return response.json();
    }).then((data) => {
        let articles = data.articles;
        if (data.status === "ok") {
            let newsHtml = '';
            articles.forEach((element, index) => {
                let news;
                news = `
                    <div class="card card-${index + 1}">
                        <img src="${element['urlToImage']}" alt=" ">
                        <h5>
                            <a href="${element['url']}" target="_blank">${element['title']}</a><br>
                            <span class="source">Source : ${element['source'].name}</span>
                            <p class="description">${element['content']}</p>
                        </h5>
                    </div>
                    `;
                newsHtml += news;
            });
            newsGridList.innerHTML = newsHtml;
        }
        else {
            console.log('Some error occured while fetching data from API');
            newsGridList.innerHTML += `
                                        <h1 style="color:red;">Error Fetching data from API</h1>
                                    `;
        }
    });
});

sportsBtn.addEventListener("click", () => {
    newsSubtitle.innerHTML = `<hr>
    <h3 class="sub-title"><b>Sports</b></h3>
    <hr><br>`;

    fetch(api_Sports).then((response) => {
        return response.json();
    }).then((data) => {
        let articles = data.articles;
        if (data.status === "ok") {
            let newsHtml = '';
            articles.forEach((element, index) => {
                let news;
                news = `
                    <div class="card card-${index + 1}">
                        <img src="${element['urlToImage']}" alt=" ">
                        <h5>
                            <a href="${element['url']}" target="_blank">${element['title']}</a><br>
                            <span class="source">Source : ${element['source'].name}</span>
                            <p class="description">${element['content']}</p>
                        </h5>
                    </div>
                    `;
                newsHtml += news;
            });
            newsGridList.innerHTML = newsHtml;
        }
        else {
            console.log('Some error occured while fetching data from API');
            newsGridList.innerHTML += `
                                        <h1 style="color:red;">Error Fetching data from API</h1>
                                    `;
        }
    });
});

scienceBtn.addEventListener("click", () => {
    newsSubtitle.innerHTML = `<hr>
    <h3 class="sub-title"><b>Science</b></h3>
    <hr><br>`;

    fetch(api_Science).then((response) => {
        return response.json();
    }).then((data) => {
        let articles = data.articles;
        if (data.status === "ok") {
            let newsHtml = '';
            articles.forEach((element, index) => {
                let news;
                news = `
                    <div class="card card-${index + 1}">
                        <img src="${element['urlToImage']}" alt=" ">
                        <h5>
                            <a href="${element['url']}" target="_blank">${element['title']}</a><br>
                            <span class="source">Source : ${element['source'].name}</span>
                            <p class="description">${element['content']}</p>
                        </h5>
                    </div>
                    `;
                newsHtml += news;
            });
            newsGridList.innerHTML = newsHtml;
        }
        else {
            console.log('Some error occured while fetching data from API');
            newsGridList.innerHTML += `
                                        <h1 style="color:red;">Error Fetching data from API</h1>
                                    `;
        }
    });
});

healthBtn.addEventListener("click", () => {
    newsSubtitle.innerHTML = `<hr>
    <h3 class="sub-title"><b>Health</b></h3>
    <hr><br>`;

    fetch(api_Health).then((response) => {
        return response.json();
    }).then((data) => {
        let articles = data.articles;
        if (data.status === "ok") {
            let newsHtml = '';
            articles.forEach((element, index) => {
                let news;
                news = `
                    <div class="card card-${index + 1}">
                        <img src="${element['urlToImage']}" alt=" ">
                        <h5>
                            <a href="${element['url']}" target="_blank">${element['title']}</a><br>
                            <span class="source">Source : ${element['source'].name}</span>
                            <p class="description">${element['content']}</p>
                        </h5>
                    </div>
                    `;
                newsHtml += news;
            });
            newsGridList.innerHTML = newsHtml;
        }
        else {
            console.log('Some error occured while fetching data from API');
            newsGridList.innerHTML += `
                                        <h1 style="color:red;">Error Fetching data from API</h1>
                                    `;
        }
    });
});