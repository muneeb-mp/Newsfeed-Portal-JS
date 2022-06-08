console.log("News Website");
// https://gnews.io/api/v4/top-headlines?token=API-Token
// news api - 9330cb56e24447678ba025bf949441cd
// gnews.io - 742e6edaad81721f12652347d07a90db   ---using

// let source='theverge';
let apiToken = '742e6edaad81721f12652347d07a90db';

// Grab the news container
let newsAccordian = document.getElementById('newsAccordian');

// Create an AJAX get reqquest
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://gnews.io/api/v4/top-headlines?&country=in&token=${apiToken}&lang=en`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        // console.log(json);
        let articles = json.articles;
        // console.log(articles);
        let newsHtml = '';
        articles.forEach((element, index) => {
            let news;
            // console.log(element['news']);
            news = `<div class="card noteCard shadow bg-body rounded font-monospace">
                        <div class="card-header p-0" id="heading${index}">
                            <h2 class="mb-0">
                                <button class="btn btn-link collapsed text-decoration-none text-start" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                                <h5><b class="text-secondary">Breaking news ${index + 1} : </b>${element['title']}</h5>
                                </button>
                            </h2>
                        </div>
                        <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                            <div class="card card-body">
                                <img src="${element['image']}" class="card-img-top" style="width: 36rem;">
                                ${element['description']} <a href='${element['url']}' target='_blank'>Read more here</a>
                            </div>
                        </div>
                    </div>`;

            newsHtml += news;
        });
        newsAccordian.innerHTML = newsHtml;
    }
    else {
        let newsError = `<h3 class="text-danger">API Calls Limit reached :(</h3>
        <p>Please try again after a while...</p>`;
        newsAccordian.innerHTML = newsError;
        console.error('API calls limit reached');    // When file path is incorrect
    }
}

xhr.send();



// let search = document.getElementById("searchTxt");
// search.addEventListener("input", function () {
//     let inputVal = search.value.toLowerCase;
//     let noteCards = document.getElementsByClassName("noteCard");

//     Array.from(noteCards).forEach(function (element) {
//         let cardTxt = element.getElementsByTagName("h5")[0].innerText;
//         if (cardTxt.includes(inputVal)) {
//             element.style.display = "block";
//         }
//         else {
//             element.style.display = "none";
//         }
//     })
// });

