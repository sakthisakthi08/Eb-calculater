// Save and go to next page
function nextPage() {
    const eb = document.getElementById("ebNumber").value;
    const name = document.getElementById("clientName").value;
    const units = document.getElementById("units").value;

    localStorage.setItem("eb", eb);
    localStorage.setItem("name", name);
    localStorage.setItem("units", units);

    window.location.href = "output.html";
}

// When output.html loads, display values
if (window.location.pathname.includes("output.html")) {

    const eb = localStorage.getItem("eb");
    const name = localStorage.getItem("name");
    const units = Number(localStorage.getItem("units"));

    document.getElementById("oEb").innerText = eb;
    document.getElementById("oName").innerText = name;
    document.getElementById("oUnits").innerText = units;

    // ---- TN EB Calculator ----
    let total = 0;

    if (units <= 100) {
        total = 0;
    } 
    else if (units <= 200) {
        total = (units - 100) * 2.25;
    } 
    else if (units <= 400) {
        total = (100 * 2.25) + ((units - 200) * 4.50);
    } 
    else if (units <= 500) {
        total = (100 * 2.25) + (200 * 4.50) + ((units - 400) * 6.00);
    } 
    else {
        total = (100 * 2.25) + (200 * 4.50) + (100 * 6.00) + ((units - 500) * 8.00);
    }

    document.getElementById("oAmount").innerText = total.toFixed(2);

    // ---------------------------
    // ADD: Current Date & Time
    // ---------------------------
    function formatDateTime() {
        const now = new Date();

        const date = now.toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });

        const time = now.toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });

        return `${date} ${time}`;
    }

    // Bill Date → current date & time
    document.getElementById("billDate").innerText = formatDateTime();

    // Due Date → +7 days
    let due = new Date();
    due.setDate(due.getDate() + 7);
    document.getElementById("dueDate").innerText = due.toLocaleDateString("en-IN");

    // Address Auto-Fill
    document.getElementById("fullAddress").innerText = 
        "Pudukkottai, Tamil Nadu, India";
}
