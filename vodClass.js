class VOD {
    constructor(_parent, _items) {
        this.parent = _parent;
        this.title = _items.Title;
        this.year = _items.Year;
        this.id = _items.imdbID;
        this.type = _items.Type;
        this.imge = _items.Poster;
    }

    render() {
        let myDiv = document.createElement("div");
        myDiv.className = "col-md-3  p-3";
        document.querySelector(this.parent).append(myDiv);
        myDiv.innerHTML = `
        <div class="p-2 border text-center h100">
        <img src="${this.imge}" alt="movie" class="w-75">
        <h2>${this.title}</h2>
        <h4>year:${this.year} </h4>
        <button class="btn btn-dark info-btn">mor info</button>
        </div>
        `

        let btn_info = myDiv.querySelector(".info-btn");
        btn_info.addEventListener("click",()=>{
            showLightBox(this.id);
        })
    }

}

