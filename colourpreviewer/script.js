function change() {
    let colour = document.getElementById("colour_text").value;
    if(colour.toLowerCase() == "#hhhhhh") {
        alert("ahh.... the colour of magic... unfortunatly your web browser isn't quite capable of showing that...");
        return;
    }
    document.body.style.background = colour;
}
