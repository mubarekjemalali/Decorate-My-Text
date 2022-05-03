function alert() {

    let textArea = document.getElementById("text-area");
    let fontSize = parseInt(document.getElementById("text-area").style.fontSize);
    // console.log(fontSize);
    textArea.style.fontSize = fontSize + 2 + "px";

}

function bigsize() {
    setInterval(alert, 500);

}

function decorate() {
    let textArea = document.getElementById("text-area");

    if (this.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "green";

    }
    else {
        textArea.style.color = "black";
        textArea.style.fontWeight = "normal";

    }

}

let bigger = document.getElementById("bigger-dec");
bigger.onclick = bigsize;



let bling = document.getElementById("bling");
bling.onchange = decorate;




