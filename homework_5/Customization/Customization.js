function chooseColor() {
    var image = document.getElementById('orange');
    image.src = "../orange.png"
}

function chooseFabric() {
    var image = document.getElementById('duck-down');
    image.src = "../duck-down.png"

    var str = document.getElementById("left-button").innerHTML; 
    var res = str.replace("Add to bag", "Add 1 item to bag");
    document.getElementById("left-button").innerHTML = res;
}

function bagChange() {
    var image = document.getElementById('shopping-bag');
    image.src = "../bag-change.png"
}




