// ================= CLOCK =================

function updateClock() {
    const now = new Date();

    document.getElementById("clock").textContent =
        now.toLocaleTimeString("en-IN", {
            timeZone: "Asia/Kolkata"
        });
}

setInterval(updateClock, 1000);
updateClock();


// ================= START MENU =================

const startBtn = document.getElementById("startBtn");
const startMenu = document.getElementById("startMenu");

startBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    if (startMenu.style.display === "block") {
        startMenu.style.display = "none";
    } else {
        startMenu.style.display = "block";
    }
});

document.addEventListener("click", () => {
    startMenu.style.display = "none";
});


// ================= WINDOWS =================

const windows = {
    Files: "filesWindow",
    Notes: "notesWindow",
    Calculator: "calculatorWindow"
};

let highestZ = 100;

function openWindow(app) {

    const win = document.getElementById(windows[app]);

    if (!win) return;

    win.style.display = "block";

    highestZ++;
    win.style.zIndex = highestZ;
}

function closeWindow(id) {
    document.getElementById(id).style.display = "none";
}


// ================= DRAG WINDOWS =================

document.querySelectorAll(".window").forEach(win => {

    const bar = win.querySelector(".titlebar");

    let dragging = false;
    let offsetX = 0;
    let offsetY = 0;

    bar.addEventListener("mousedown", (e) => {

        dragging = true;

        highestZ++;
        win.style.zIndex = highestZ;

        offsetX = e.clientX - win.offsetLeft;
        offsetY = e.clientY - win.offsetTop;
    });

    document.addEventListener("mousemove", (e) => {

        if (!dragging) return;

        win.style.left = (e.clientX - offsetX) + "px";
        win.style.top = (e.clientY - offsetY) + "px";
    });

    document.addEventListener("mouseup", () => {
        dragging = false;
    });

});


// ================= CALCULATOR =================

const calcDisplay = document.getElementById("calcDisplay");

function appendCalc(value) {
    calcDisplay.value += value;
}

function clearCalc() {
    calcDisplay.value = "";
}

function calculate() {

    try {
        calcDisplay.value = Function(
            '"use strict"; return (' + calcDisplay.value + ')'
        )();
    } catch {
        calcDisplay.value = "Error";
    }

}