function updateClock(){
    const now=new Date();
    document.getElementById("clock").innerHTML=
    now.toLocaleTimeString("en-IN",{
        timeZone:"Asia/Kolkata"
    });
}
setInterval(updateClock,1000);
updateClock();
function openWindow(app){
    alert(app+"Coming soon!");
}