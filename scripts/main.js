
//Change the h1 attribute
const myHeading = document.querySelector("h1");
myHeading.textContent = "I love Cinema!";

/*
document.querySelector("html").addEventListener("click", function () {
    alert("Haha. Stop poking me!");
})*/


// Change the image when its clicked
let myImage = document.querySelector("img")
myImage.onclick = () => {
    let mySrc = myImage.getAttribute("src")
    if(mySrc === "images/film-projector.jpg"){
        myImage.setAttribute("src", "images/film-projector-2.jpg");
    } else {
        myImage.setAttribute("src", "images/film-projector.jpg")}}

        
//Save textfield value to sessionStorage when button is clicked
let myButton = document.getElementById("save-button")
myButton.onclick = () => {
        //Get textbox value
        const setFavMovie = document.getElementById("fav-movie-textbox").value

        //Save to sessionStorageAPI
        sessionStorage.setItem("favMovie", setFavMovie);}


//User favorite movie display logic
let userFavMoviePara = document.getElementById('user-fav-movie')
//Check if anything is already stored by user
if (sessionStorage.getItem("favMovie")){

    //Append the stored value on screen, if nothing is stored nothing will be displayed anyway
    storedFavMovie = sessionStorage.getItem("favMovie")
    userFavMoviePara.textContent += storedFavMovie}