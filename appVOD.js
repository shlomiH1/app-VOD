const init = () => {
    lightBox_init();
    showSearch();
}

const showSearch = ()=>{
    let Search_btn = document.querySelector("#search_btn");
    let input_btn = document.querySelector("#id_search_input");
    
    input_btn.addEventListener("keydown",(e)=>{
       if(e.key == "Enter"){
        doApi(input_btn.value);
       }
     })
    
    
    Search_btn.addEventListener("click",()=>{
       let inputVal = input_btn.value;
       doApi(inputVal);
    })
}

const doApi = async (search) => {
    let url = `http://www.omdbapi.com/?s=${search}&apikey=5a292f28`;
    document.querySelector("#id_row").innerHTML="<h2>loading....</h2>";
    let resp = await axios.get(url);
    console.log(resp.data.Search);
    creatMovie(resp.data.Search);
}

const creatMovie = (_ar) => {
    document.querySelector("#id_row").innerHTML="";
    _ar.forEach(item => {
        let movie = new VOD("#id_row", item)
        movie.render();
    });
}
init();