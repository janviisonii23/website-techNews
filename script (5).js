var tl= gsap.timeline()
tl.from(".navbar",{
   y:-30,
    opacity:0,
    duration:1,
    stagger:2,
    delay:4
})

window.addEventListener('scroll', function() {
    var box1 = document.querySelector('.box1');
    var box2container = document.querySelector('.box2container');
    var scrollHeight = box1.scrollHeight;
    var scrollTop = window.scrollY;
    var scrollThreshold = scrollHeight * 1; 

    if (scrollTop <scrollThreshold) {
        box2container.style.position = 'sticky';
        box2container.style.top = '30px';
    } else {
        box2container.style.position = 'relative';
        box2container.style.top = (scrollHeight*0.6) + 'px';}
});
window.addEventListener('scroll', function() {
    var box3container = document.querySelector('.box3container');
    var box4 = document.querySelector('.box4');
    var scrollHeight2 = box4.scrollHeight;
    var scrollTop2 = window.scrollY;
    var scrollThreshold2 = scrollHeight2 * 0.9; 

    if (scrollTop2 >scrollThreshold2) {
        box3container.style.position = 'sticky';
        box3container.style.top = '30px';
    } else {
        box3container.style.position = 'relative';
        box3container.style.top = (scrollHeight2*0.4) + 'px';}
});
window.addEventListener('scroll', function() {
    var box5 = document.querySelector('.box5');
    var box6container = document.querySelector('.box6container');
    var scrollHeight3 = box5.scrollHeight;
    var scrollTop3 = window.scrollY;
    var scrollThreshold3 = scrollHeight3 * 0.9; 

    if (scrollTop3>scrollThreshold3) {
        box6container.style.position = 'sticky';
        box6container.style.top = '30px';
    } else {
        box6container.style.position = 'relative';
        box6container.style.top = (scrollHeight3*0.4) + 'px';}
});
window.addEventListener('scroll', function() {
    var box7container = document.querySelector('.box7container');
    var box8 = document.querySelector('.box8');
    var scrollHeight4 = box8.scrollHeight;
    var scrollTop4= window.scrollY;
    var scrollThreshold4= scrollHeight4 * 0.9; 

    if (scrollTop4 >scrollThreshold4) {
        box7container.style.position = 'sticky';
        box7container.style.top = '30px';
    } else {
        box7container.style.position = 'relative';
        box7container.style.top = (scrollHeight4*0.4) + 'px';}
});
window.addEventListener('scroll', function() {
    var box9 = document.querySelector('.box9');
    var box10container = document.querySelector('.box10container');
    var scrollHeight5 = box9.scrollHeight;
    var scrollTop5 = window.scrollY;
    var scrollThreshold5 = scrollHeight5 * 0.9; 

    if (scrollTop5 > scrollThreshold5) {
        box10container.style.position = 'sticky';
        box10container.style.top = '30px';
    } else {
        box10container.style.position = 'relative';
        box10container.style.top = (scrollHeight5*0.4) + 'px';}
});
const apikey='adb80f358c8846e6ae0f7ffe883f21fd';
const blogcontainer1 = document.getElementById("blog-container1");
const apiUrl1= `https://newsapi.org/v2/top-headlines?sources=techcrunch&pageSize=15&apikey=${apikey}`;
async function fetchRandomNews1(){
    try{
const apiUrl1= `https://newsapi.org/v2/top-headlines?sources=techcrunch&pageSize=15&apikey=${apikey}`;
const response1= await fetch(apiUrl1);
const data1 =await response1.json();
return data1.articles;
    } catch(error){
console.error("Error fetching news",error);
return[];
    }
}
async function displayBlogs1() {
    try {
        const articles = await fetchRandomNews1();
        articles.forEach((article) => {
            if (!article.urlToImage || !article.title || !article.description) {
                fetchRandomNews1();
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

            blogcontainer1.appendChild(blogcard);
        });
    } catch (error) {
        console.error("Error displaying news", error);
    }
}

// Call displayBlogs function to start displaying news
displayBlogs1();

const blogcontainer4 = document.getElementById("blog-container4");
async function fetchRandomNews4(){
    try{
const apiUrl4= `https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=15&apikey=${apikey}`;
const response4= await fetch(apiUrl4);
const data4 =await response4.json();
return data4.articles;
    } catch(error){
console.error("Error fetching news",error);
return[];
    }
}
async function displayBlogs4() {
    try {
        const articles = await fetchRandomNews4();
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

            blogcontainer4.appendChild(blogcard);
        });
    } catch (error) {
        console.error("Error displaying news", error);
    }
}

// Call displayBlogs function to start displaying news
displayBlogs4();
const blogcontainer5 = document.getElementById("blog-container5");
async function fetchRandomNews5(){
    try{
const apiUrl5= `https://newsapi.org/v2/top-headlines?sources=techcrunch&pageSize=15&apikey=${apikey}`;
const response5= await fetch(apiUrl5);
const data5 =await response5.json();
return data5.articles;
    } catch(error){
console.error("Error fetching news",error);
return[];
    }
}
async function displayBlogs5() {
    try {
        const articles = await fetchRandomNews5();
        articles.forEach((article) => {
            if (!article.urlToImage || !article.title || !article.description) {
                fetchRandomNews5();
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

            blogcontainer5.appendChild(blogcard);
        });
    } catch (error) {
        console.error("Error displaying news", error);
    }
}

// Call displayBlogs function to start displaying news
displayBlogs5();
const blogcontainer8 = document.getElementById("blog-container8");
async function fetchRandomNews8(){
    try{
const apiUrl8= `https://newsapi.org/v2/top-headlines?sources=techcrunch&pageSize=15&apikey=${apikey}`;
const response8= await fetch(apiUrl8);
const data8 =await response8.json();
return data8.articles;
    } catch(error){
console.error("Error fetching news",error);
return[];
    }
}
async function displayBlogs8() {
    try {
        const articles = await fetchRandomNews8();
        articles.forEach((article) => {
            if (!article.urlToImage || !article.title || !article.description) {
                fetchRandomNews8();
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

            blogcontainer8.appendChild(blogcard);
        });
    } catch (error) {
        console.error("Error displaying news", error);
    }
}

// Call displayBlogs function to start displaying news
displayBlogs8();
const blogcontainer9 = document.getElementById("blog-container9");
async function fetchRandomNews9(){
    try{
const apiUrl9= `https://newsapi.org/v2/top-headlines?sources=techcrunch&pageSize=15&apikey=${apikey}`;
const response9= await fetch(apiUrl9);
const data9 =await response9.json();
return data9.articles;
    } catch(error){
console.error("Error fetching news",error);
return[];
    }
}
async function displayBlogs9() {
    try {
        const articles = await fetchRandomNews9();
        articles.forEach((article) => {
            if (!article.urlToImage || !article.title || !article.description) {
                fetchRandomNews9();
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

            blogcontainer9.appendChild(blogcard);
        });
    } catch (error) {
        console.error("Error displaying news", error);
    }
}

// Call displayBlogs function to start displaying news
displayBlogs9();
const blogcontainer2 = document.getElementById("blog-container2");
async function fetchRandomNews2(){
    try{
const apiUrl2= `https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=7&apikey=${apikey}`;
const response2= await fetch(apiUrl2);
const data2 =await response2.json();
return data2.articles;
    } catch(error){
console.error("Error fetching news",error);
return[];
    }
}
async function displayBlogs2() {
    try {
        const articles = await fetchRandomNews2();
        articles.forEach((article) => {
            if (!article.title || !article.description) {
                return;
            }
            const blogcard = document.createElement("div");
            blogcard.classList.add("blog-card");

            // const img = document.createElement("img");
            // img.src = article.urlToImage;
            // img.alt = article.title;

            const card = document.createElement("div");

            const title = document.createElement("h2");
            const truncatedtitle = article.title.length > 30 ? article.title.slice(0, 30) + "..." : article.title;
            title.textContent = truncatedtitle;

            const description = document.createElement("p");
            description.textContent = article.description;

            // blogcard.appendChild(img);
            card.appendChild(title);
            card.appendChild(description);
            blogcard.appendChild(card);

            blogcard.addEventListener("click", () => {
                window.open(article.url, "_blank");
            });

            blogcontainer2.appendChild(blogcard);
        });
    } catch (error) {
        console.error("Error displaying news", error);
    }
}

// Call displayBlogs function to start displaying news
displayBlogs2();
const blogcontainer3 = document.getElementById("blog-container3");
async function fetchRandomNews3(){
    try{
const apiUrl3= `https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=7&apikey=${apikey}`;
const response3= await fetch(apiUrl3);
const data3 =await response3.json();
return data3.articles;
    } catch(error){
console.error("Error fetching news",error);
return[];
    }
}
async function displayBlogs3() {
    try {
        const articles = await fetchRandomNews3();
        articles.forEach((article) => {
            if (!article.title || !article.description) {
                return;
            }
            const blogcard = document.createElement("div");
            blogcard.classList.add("blog-card");

            // const img = document.createElement("img");
            // img.src = article.urlToImage;
            // img.alt = article.title;

            const card = document.createElement("div");

            const title = document.createElement("h2");
            const truncatedtitle = article.title.length > 30 ? article.title.slice(0, 30) + "..." : article.title;
            title.textContent = truncatedtitle;

            const description = document.createElement("p");
            description.textContent = article.description;

            // blogcard.appendChild(img);
            card.appendChild(title);
            card.appendChild(description);
            blogcard.appendChild(card);

            blogcard.addEventListener("click", () => {
                window.open(article.url, "_blank");
            });

            blogcontainer3.appendChild(blogcard);
        });
    } catch (error) {
        console.error("Error displaying news", error);
    }
}

// Call displayBlogs function to start displaying news
displayBlogs3();
const blogcontainer6 = document.getElementById("blog-container6");
async function fetchRandomNews6(){
    try{
const apiUrl6= `https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=7&apikey=${apikey}`;
const response6= await fetch(apiUrl6);
const data6 =await response6.json();
return data6.articles;
    } catch(error){
console.error("Error fetching news",error);
return[];
    }
}
async function displayBlogs6() {
    try {
        const articles = await fetchRandomNews6();
        articles.forEach((article) => {
            if (!article.title || !article.description) {
                return;
            }
            const blogcard = document.createElement("div");
            blogcard.classList.add("blog-card");

            // const img = document.createElement("img");
            // img.src = article.urlToImage;
            // img.alt = article.title;

            const card = document.createElement("div");

            const title = document.createElement("h2");
            const truncatedtitle = article.title.length > 30 ? article.title.slice(0, 30) + "..." : article.title;
            title.textContent = truncatedtitle;

            const description = document.createElement("p");
            description.textContent = article.description;

            // blogcard.appendChild(img);
            card.appendChild(title);
            card.appendChild(description);
            blogcard.appendChild(card);

            blogcard.addEventListener("click", () => {
                window.open(article.url, "_blank");
            });

            blogcontainer6.appendChild(blogcard);
        });
    } catch (error) {
        console.error("Error displaying news", error);
    }
}

// Call displayBlogs function to start displaying news
displayBlogs6();
const blogcontainer7 = document.getElementById("blog-container7");
async function fetchRandomNews7(){
    try{
const apiUrl7= `https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=7&apikey=${apikey}`;
const response7= await fetch(apiUrl7);
const data7 =await response7.json();
return data7.articles;
    } catch(error){
console.error("Error fetching news",error);
return[];
    }
}
async function displayBlogs7() {
    try {
        const articles = await fetchRandomNews7();
        articles.forEach((article) => {
            if (!article.title || !article.description) {
                return;
            }
            const blogcard = document.createElement("div");
            blogcard.classList.add("blog-card");

            // const img = document.createElement("img");
            // img.src = article.urlToImage;
            // img.alt = article.title;

            const card = document.createElement("div");

            const title = document.createElement("h2");
            const truncatedtitle = article.title.length > 30 ? article.title.slice(0, 30) + "..." : article.title;
            title.textContent = truncatedtitle;

            const description = document.createElement("p");
            description.textContent = article.description;

            // blogcard.appendChild(img);
            card.appendChild(title);
            card.appendChild(description);
            blogcard.appendChild(card);

            blogcard.addEventListener("click", () => {
                window.open(article.url, "_blank");
            });

            blogcontainer7.appendChild(blogcard);
        });
    } catch (error) {
        console.error("Error displaying news", error);
    }
}

// Call displayBlogs function to start displaying news
displayBlogs7();
const blogcontainer10 = document.getElementById("blog-container10");
async function fetchRandomNews10(){
    try{
const apiUrl10= `https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=7&apikey=${apikey}`;
const response10= await fetch(apiUrl10);
const data10 =await response10.json();
return data10.articles;
    } catch(error){
console.error("Error fetching news",error);
return[];
    }
}
async function displayBlogs10() {
    try {
        const articles = await fetchRandomNews10();
        articles.forEach((article) => {
            console.log(article);
            
            if (!article.title || !article.description) {
                return;
            }
            const blogcard = document.createElement("div");
            blogcard.classList.add("blog-card");

            // const img = document.createElement("img");
            // img.src = article.urlToImage;
            // img.alt = article.title;

            const card = document.createElement("div");

            const title = document.createElement("h2");
            const truncatedtitle = article.title.length > 30 ? article.title.slice(0, 30) + "..." : article.title;
            title.textContent = truncatedtitle;

            const description = document.createElement("p");
            description.textContent = article.description;

            // blogcard.appendChild(img);
            card.appendChild(title);
            card.appendChild(description);
            blogcard.appendChild(card);

            blogcard.addEventListener("click", () => {
                window.open(article.url, "_blank");
            });

            blogcontainer10.appendChild(blogcard);
        });
    } catch (error) {
        console.error("Error displaying news", error);
    }
}

// Call displayBlogs function to start displaying news
displayBlogs10();