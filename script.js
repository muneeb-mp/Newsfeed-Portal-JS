console.log('Newsfeed Portal');

// gnews.io
let apiToken = '742e6edaad81721f12652347d07a90db';
// Grab the news container
let newsGridList = document.getElementById('news-list-grid');

function getNews(){
    const url = `https://gnews.io/api/v4/top-headlines?&country=in&token=${apiToken}&lang=en`;
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        let articles = data.articles;

        let newsHtml = '';
        articles.forEach((element, index) => {
            let news;
            news =  `
                    <div class="card card-${index + 1}">
                        <img src="${element['image']}">
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
    })
}

getNews();
