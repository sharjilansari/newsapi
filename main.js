const grid = document.querySelector(".grid");
let y = 0;
const fun = async () => {
  let data = await axios.get(
    "https://newsapi.org/v2/everything?q=tesla&from=2023-04-27&sortBy=publishedAt&apiKey=b4fd428aaf644f3697b045871fa03354"
  ).catch((error) => {
    console.log(error);
    console.log("It seems like API is not working. Come back later.")
  });
  let arr = [];
  let warr = [];
  if(!data){
    const container = document.createElement("div");
    container.className = "container";
    const box = document.createElement("div");
    box.className = "box";
    const title = document.createElement("div");
    title.className = "title";
    container.appendChild(box);
    box.appendChild(title);
    title.innerHTML = "It seems like API is not working. Come back later.";
    grid.appendChild(container);
    grid.className = "grid-full";
    container.className = "container-full"
    box.className = "box-full";
  }

  for (let i = 0; i < data.data.articles.length; i++) {
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
    addWishList.addEventListener("click", (e) => {
      const obj = {
        title: data.data.articles[i].title,
        author: data.data.articles[i].author,
        description: data.data.articles[i].description,
        urlToImg: data.data.articles[i].urlToImage,
      };
      remove.style.display = "block";
      arr.push(obj);
      const arrJSON = JSON.stringify(arr);
      localStorage.setItem("arr", arrJSON);
      const wgrid = document.querySelector(".w-grid");

      warr = JSON.parse(localStorage.getItem("arr"));
      console.log(warr);

      for (; y < warr.length; y++) {
          const wcontainer = document.createElement("div");
          wcontainer.className = "w-container";
          const wbox = document.createElement("div");
          wbox.className = "w-box";
          const wauthor = document.createElement("div");
          wauthor.className = "w-author";
          const wtitle = document.createElement("div");
          wtitle.className = "w-title";
          const wdescription = document.createElement("div");
          wdescription.className = "w-description";
          const wimage = document.createElement("img");
          wimage.className = "w-img";
          const removeButton = document.createElement("input");
          removeButton.className = "remove";
          removeButton.type = "button";
          removeButton.value = "RemoveFromWishList";
          removeButton.style.display = "block";
          wcontainer.appendChild(wbox);
          wbox.appendChild(wtitle);
          wbox.appendChild(wauthor);
          wbox.appendChild(wdescription);
          wbox.appendChild(wimage);
          wbox.appendChild(removeButton);
          wauthor.innerHTML = warr[y].author;
          wtitle.innerHTML = warr[y].title;
          wdescription.innerHTML = warr[y].description;
          wimage.src = warr[y].urlToImage;

          wgrid.appendChild(wcontainer);
      }
    });
  }
};

fun();
