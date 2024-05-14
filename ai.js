var tl= gsap.timeline()
tl.from("h1",{
   y:-30,
    opacity:0,
    duration:1,
    stagger:2,
    delay:0.5
})
// var url = 'https://newsapi.org/v2/everything?' +
//           'q=artificialintelligence&' +
//           'from=2024-05-11&' +
//           'sortBy=popularity&' +
//           'apiKey=adb80f358c8846e6ae0f7ffe883f21fd';

// var req = new Request(url);
const apikey='6566fb1f365947f4ae80bca31d92a325';
const blogcontainer = document.getElementById("blog-container");
async function fetchRandomNews(){
    try{
const apiUrl= `https://newsapi.org/v2/top-headlines?sources=techcrunch&apikey=${apikey}`;
const response= await fetch(apiUrl);
const data =await response.json();
return data.articles;
    } catch(error){
console.error("Error fetching news",error);
return[];
    }
}
async function displayBlogs() {
    try {
        const articles = await fetchRandomNews();
        articles.forEach((article) => {
            if (!article.urlToImage || !article.title || !article.description) {
                return;
            }
            const blogcard = document.createElement("div");
            blogcard.classList.add("blog-card");

            const img = document.createElement("img");
            img.src = article.urlToImage;
            // img.alt = article.title;

            const card = document.createElement("div");

            const title = document.createElement("h2");
            const truncatedtitle = article.title.length > 30 ? article.title.slice(0, 30) + "..." : article.title;
            title.textContent = truncatedtitle;

            const description = document.createElement("p");
            description.textContent = article.description;

            blogcard.appendChild(img);
            card.appendChild(title);
            card.appendChild(description);
            blogcard.appendChild(card);

            blogcard.addEventListener("click", () => {
                window.open(article.url, "_blank");
            });

            blogcontainer.appendChild(blogcard);
        });
    } catch (error) {
        console.error("Error displaying news", error);
    }
}

// Call displayBlogs function to start displaying news
displayBlogs();