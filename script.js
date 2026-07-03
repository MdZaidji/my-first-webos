window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("bootScreen").style.display = "none";

        document.getElementById("desktop").style.display = "flex";

        document.getElementById("taskbar").style.display = "flex";

    }, 3000);

});

function updateClock() {
    const now = new Date();

    document.getElementById("clock").textContent =
        now.toLocaleTimeString("en-IN", {
            timeZone: "Asia/Kolkata"
        });
}

setInterval(updateClock, 1000);
updateClock();


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



const windows = {
    Files: "filesWindow",
    Notes: "notesWindow",
    Calculator: "calculatorWindow",
    About: "aboutWindow"
};

let highestZ = 100;

function openWindow(app){

    const win=document.getElementById(windows[app]);

    if(!win) return;

    win.style.display="block";

    highestZ++;

    win.style.zIndex=highestZ;

    showToast(app+" opened");
}

function closeWindow(id) {
    document.getElementById(id).style.display = "none";
}


document.querySelectorAll(".window").forEach(win => {

    const bar = win.querySelector(".titlebar");

    let dragging = false;
    let offsetX = 0;
    let offsetY = 0;
    bar.addEventListener("dblclick",()=>{

    if(win.classList.contains("max")){

        win.classList.remove("max");

        win.style.width="350px";
        win.style.height="280px";

        return;
    }

    win.classList.add("max");

    win.style.left="0";
    win.style.top="0";
    win.style.width="100vw";
    win.style.height="calc(100vh - 50px)";

});

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
function showToast(message){

    const toast=document.getElementById("toast");

    toast.innerHTML=message;

    toast.style.display="block";

    setTimeout(()=>{

        toast.style.display="none";

    },2500);

}
document.addEventListener("keydown",(e)=>{

    if(e.ctrlKey && e.altKey){

        switch(e.key.toLowerCase()){

            case "f":
                openWindow("Files");
                break;

            case "n":
                openWindow("Notes");
                break;

            case "c":
                openWindow("Calculator");
                break;

            case "a":
                openWindow("About");
                break;
        }

    }

});
const contextMenu=document.getElementById("contextMenu");
document.getElementById("desktop").addEventListener("contextmenu",(e)=>{
    e.preventDefault();

    contextMenu.style.display="block";

    contextMenu.style.left=e.pageX+"px";

    contextMenu.style.top=e.pageY+"px";

});

document.addEventListener("click",()=>{

    contextMenu.style.display="none";

});

function closeAllWindows(){

    document.querySelectorAll(".window").forEach(win=>{

        win.style.display="none";

    });

}