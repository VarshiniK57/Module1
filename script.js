// 1. Setup Environment
console.log("Welcome to the Community Portal");
window.onload = function() {
    alert("Page is fully loaded!");
};

// 2. Event Registration
document.getElementById("eventForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("confirmation").innerText = "Registration successful!";
});

// 3. Display Upcoming Events
const events = [
    { name: "Music Fest", date: "2025-06-10", seats: 50 },
    { name: "Art Show", date: "2025-07-15", seats: 30 },
    { name: "Tech Talk", date: "2025-08-20", seats: 20 }
];

function displayEvents() {
    const eventList = document.getElementById("eventList");
    eventList.innerHTML = "";
    events.forEach(event => {
        if (new Date(event.date) > new Date() && event.seats > 0) {
            let item = document.createElement("li");
            item.textContent = `${event.name} - ${event.date} (Seats: ${event.seats})`;
            eventList.appendChild(item);
        }
    });
}
displayEvents();

// 4. Find User Location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                document.getElementById("location").innerText =
                    `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
            },
            error => {
                document.getElementById("location").innerText = "Error: " + error.message;
            }
        );
    } else {
        document.getElementById("location").innerText = "Geolocation not supported.";
    }
}