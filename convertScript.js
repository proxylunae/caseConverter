document.getElementById("upper-case").addEventListener("click", function () {
    let text = document.getElementById("textarea").value;
    document.getElementById("textarea").value = text.toUpperCase();
});
document.getElementById("lower-case").addEventListener("click", function () {
    let text = document.getElementById("textarea").value;
    document.getElementById("textarea").value = text.toLowerCase();
});
document.getElementById("proper-case").addEventListener("click", function () {
    let text = document.getElementById("textarea").value;
    let result = "";
    for (let word of text.split(" ")) {
        result = result.concat(` ${word[0].toUpperCase() + word.slice(1).toLowerCase()}`);
    }
    document.getElementById("textarea").value = result.trim();
});
document.getElementById("sentence-case").addEventListener("click", function () {
    let text = document.getElementById("textarea").value;
    let result = "";
    let prevWord = "";
    for (let word of text.split(" ")) {
        if (prevWord === "") {
            result = result.concat(word[0].toUpperCase() + word.slice(1).toLowerCase());
        }
        else if (prevWord.endsWith('.')) {
            result = result.concat(` ${word[0].toUpperCase() + word.slice(1).toLowerCase()}`);
        } else {
            result = result.concat(` ${word.toLowerCase()}`);
        }
        prevWord = word;
    }
    document.getElementById("textarea").value = result.trim();
});
document.getElementById("save-text-file").addEventListener("click", function () {
    let text = document.getElementById("textarea").value;
    download("text", text);
});
function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
