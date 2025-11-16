// Show today's date and time
function updateTime() {
    const now = new Date();
    document.getElementById("time").textContent =
        "Current Time: " + now.toLocaleString();
}

updateTime();
setInterval(updateTime, 1000);
