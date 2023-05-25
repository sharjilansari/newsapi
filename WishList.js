const wgrid = document.querySelector(".w-grid");
warr = JSON.parse(localStorage.getItem('arr'));
console.log(warr);
    for(let i=0; i<warr.length; i++){
        const wcontainer = document.createElement("div");
        wcontainer.className = "w-container";
        const wbox = document.createElement("div");
        wbox.className = "w-box";
        const removeWishList = document.createElement("input");
        removeWishList.id = "w-removeWishList";
        removeWishList.type = "button";
        removeWishList.value = "removeWishList";
        const wauthor = document.createElement("div");
        wauthor.className = "w-author";
        const wtitle = document.createElement("div");
        wtitle.className = "w-title";
        const wdescription = document.createElement("div");
        wdescription.className = "w-description";
        const wimage = document.createElement("img");
        wimage.className = "w-img";
        wcontainer.appendChild(wbox);
        wbox.appendChild(wtitle);
        wbox.appendChild(wauthor);
        wbox.appendChild(wdescription);
        wbox.appendChild(wimage);
        wbox.appendChild(removeWishList);
        
        wauthor.innerHTML = warr[i].author;
        wtitle.innerHTML = warr[i].title;
        wdescription.innerHTML = warr[i].description;
        wimage.src = warr[i].urlToImage;
        
        wgrid.appendChild(wcontainer);
}