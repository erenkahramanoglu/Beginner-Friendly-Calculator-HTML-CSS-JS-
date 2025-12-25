let screen = document.getElementById("screen");
let historyBox = document.getElementById("history");

function append(value) {
    if (screen.innerText === "0" || screen.innerText === "Hata") {
        screen.innerText = "";
    }
    screen.innerText += value;
}


function clearAll() {
    screen.innerText = "0";
}

function calculate() {
    try {
        let expression = screen.innerText;
        let result = eval(expression);
        addHistory(expression + " = " + result);
        screen.innerText = result;
    } catch {
        screen.innerText = "Hata";
    }
}

function addHistory(text) {
    let div = document.createElement("div");
    div.innerText = text;
    historyBox.appendChild(div);
}

function toggleTheme() {
    document.body.classList.toggle("light");
}

document.addEventListener("keydown", e => {
    if ("0123456789+-*/.".includes(e.key)) append(e.key);
    if (e.key === "Enter") calculate();
    if (e.key === "Backspace") {
        screen.innerText = screen.innerText.slice(0, -1) || "0";
    }
});