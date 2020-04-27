// function togglePhotography() {
//     var photography = document.getElementById("photography");
//     // var photographyDisplay = photography.style.display;
//     var photographyButton = document.getElementById(photographyButton);

//     if(photography.style.display === "none") {
//         photography.style.display = "block";
//     }
//     else {
//         photography.style.display = "none";
//         }
// }

function togglePhotography() {
    var all = document.getElementById("all-content");
    var photography = document.getElementById("photography")
    var art = document.getElementById("art")
    // var photographyDisplay = photography.style.display;
    // var photographyButton = document.getElementById(photographyButton);

    if(all.style.display === "none") {
        all.style.display = "block";
        art.style.display = "none";
    }
    else {
        all.style.display = "none";
        }
}

function toggleArt() {
    var all = document.getElementById("all-content");
    var photography = document.getElementById("photography")
    var art = document.getElementById("art")
    // var photographyDisplay = photography.style.display;
    // var photographyButton = document.getElementById(photographyButton);

    if(art.style.display === "none") {
        art.style.display = "block";
        photography.style.display = "none";
        // photography.style.display = "none";
    }

    else {
        all.style.display = "none";
    }
}

// function $(x) {return document.getElementById(x);} 

// $("#transform-animation").velocity({ 
//     scale: 1.5,
//     translateX: 150
// }, 2000);

