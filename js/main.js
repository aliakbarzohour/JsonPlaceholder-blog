const app = document.querySelector("#app");
const Post_Url = "https://jsonplaceholder.typicode.com/posts";

async function GetArticles(url) {
    let response = await fetch(url);
    let data = await response.json();
    data.forEach((article) => {
        app.innerHTML += `
        <article>
            <h3 class="title">${article.title.toUpperCase()}</h3>
            <p class="articleBody">${article.body}</p>
        </article>
        `;
    });
}
GetArticles(Post_Url);