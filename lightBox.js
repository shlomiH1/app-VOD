const lightBox_init = () => {
    // נגדיר האזנה ללחיצה על כפתור הסגירה של 
    // הלייט בוקס
    let btn_close = document.querySelector("#btn_close");
    btn_close.addEventListener("click", () => {
        document.querySelector(".light_box").style.display = "none";
    })
}



const showLightBox = (_id) => {
    doApiLightBox(_id);
    document.querySelector(".light_box").style.display = "flex";
}


const doApiLightBox = async(_id) => {
let url = `https://www.omdbapi.com/?i=${_id}&apikey=5a292f28`;
let resp = await axios.get(url);
console.log(resp.data);
let item = resp.data;
document.querySelector("#id_img").src = item.Poster;
document.querySelector("#id_light_title").innerHTML = item.Title;
document.querySelector("#id_time").innerHTML = item.Runtime;
document.querySelector("#id_score").innerHTML =item.imdbRating;
document.querySelector("#id_year").innerHTML =item.Year;
document.querySelector("#id_plot").innerHTML = item.Plot;
}