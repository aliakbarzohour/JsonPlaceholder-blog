const app = document.querySelector("#app");
const Post_Url = "https://jsonplaceholder.typicode.com/posts/";
const User_Url = "https://jsonplaceholder.typicode.com/users/";

async function GetUsers(url, id) {
    let response = await fetch(url + id);
    let users = await response.json();

    return users;
}

async function GetArticles(url) {
    let response = await fetch(url);
    let data = await response.json();
    data.forEach(async(article) => {
        article.user = await GetUsers(User_Url, article.id)
        app.innerHTML += `
        <article>
            <h3 class="title">${article.title.toUpperCase()}</h3>
            <h4 class="author">author: ${article.user.username.toUpperCase()}</h4>
            <p class="articleBody">${article.body}</p>
        </article>
        `;
    });
}
GetArticles(Post_Url);