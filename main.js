const grid = document.querySelector(".grid");
const fun = async () => {
    let data = await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2023-04-25&sortBy=publishedAt&apiKey=b4fd428aaf644f3697b045871fa03354");
    // console.log(data);
    let arr = [];
    let warr = [];
    for(let i=0; i<data.data.articles.length; i++){
        const container = document.createElement("div");
        container.className = "container";
        const box = document.createElement("div");
        box.className = "box";
        const addWishList = document.createElement("input");
        addWishList.id = "addWishList";
        addWishList.type = "button";
        addWishList.value = "WishList";
        const author = document.createElement("div");
        author.className = "author";
        const title = document.createElement("div");
        title.className = "title";
        const description = document.createElement("div");
        description.className = "description";
        const image = document.createElement("img");
        image.className = "img";
        const remove = document.createElement("input");
        remove.className = "remove";
        remove.type = "button";
        remove.value = "RemoveFromWishList";
        container.appendChild(box);
        box.appendChild(title);
        box.appendChild(author);
        box.appendChild(description);
        box.appendChild(image);
        box.appendChild(addWishList);
        box.appendChild(remove);
        author.innerHTML = data.data.articles[i].author;
        title.innerHTML = data.data.articles[i].title;
        description.innerHTML = data.data.articles[i].description;
        image.src = data.data.articles[i].urlToImage;
        
        grid.appendChild(container);
        addWishList.addEventListener('click', (e) => {
            const obj = {
                title : data.data.articles[i].title,
                author : data.data.articles[i].author,
                description : data.data.articles[i].descriptions,
                urlToImg : data.data.articles[i].urlToImage
            }
            remove.style.display = "block";
            arr.push(obj);
            const arrJSON = JSON.stringify(arr);
            localStorage.setItem('arr', arrJSON);
        })
    }
    warr = JSON.parse(localStorage.getItem('arr'));
    console.log(warr);
}
fun();