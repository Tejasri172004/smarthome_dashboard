document.addEventListener("DOMContentLoaded", function() {
    const lightToggle = document.getElementById("light-toggle");
    const thermostat = document.getElementById("thermostat");
    const cameraToggle = document.getElementById("camera-toggle");
    
    lightToggle.addEventListener("change", function() {
        if (this.checked) {
            document.body.classList.add("light-on");
            alert("Lights turned ON");
        } else {
            document.body.classList.remove("light-on");
            alert("Lights turned OFF");
        }
    });

    thermostat.addEventListener("change", function() {
        alert("Thermostat set to " + this.value + "°C");
    });

    cameraToggle.addEventListener("click", function() {
        if (this.textContent === "Turn On") {
            this.textContent = "Turn Off";
            alert("Security Camera turned ON");
        } else {
            this.textContent = "Turn On";
            alert("Security Camera turned OFF");
        }
    });
});
