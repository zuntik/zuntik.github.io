// document.onkeydown = function(event) {
//     // tab was pressed. attemp to tab complete word
//     if (event.keyCode == 9) {}
// };
// 
// // find the correct word completion if possible
// function complete(word) {
// }

function search() {
    let written = document.getElementById("search_text").value;
    let command = written.split(":")[0];
    //alert("command is: " + command);

    // if nothing else, default to a simple google search
    engine = ENGINES.default;

    // check if we need to do a special search
    if (written[1] === ":" && written[0] in ENGINES) {
        engine = ENGINES[written[0]];
        // remove engine chars from the user string
        written = written.slice(2);
    }

    window.location = engine + written.trim();
}

const ENGINES = {
    default: "https://duckduckgo.com/?q=",
    "y": "https://www.youtube.com/results?search_query=",
    "g": "https://github.com/search?utf8=✓&q=",
    "r": "https://reddit.com/r/"
};
