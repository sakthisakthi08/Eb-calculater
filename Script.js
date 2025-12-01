function nextPage() {
    const eb = document.getElementById("ebNumber").value;
    const name = document.getElementById("clientName").value;
    const units = Number(document.getElementById("units").value);

    if (!eb || !name || !units) {
        alert("Please fill all fields");
        return;
    }

    // BILL AMOUNT CALCULATION
    let amount = 0;
    if (units <= 100) {
        amount = 0;  
    } else if (units <= 200) {
        amount = (units - 100) * 2.25;
    } else if (units <= 500) {
        amount = (100 * 2.25) + ((units - 200) * 4.5);
    } else {
        amount = (100 * 2.25) + (300 * 4.5) + ((units - 500) * 6);
    }

    amount = amount.toFixed(2);

    // SAVE OUTPUT
    document.getElementById("oEb").textContent = eb;
    document.getElementById("oName").textContent = name;
    document.getElementById("oUnits").textContent = units;
    document.getElementById("oAmount").textContent = amount;

    // ADDRESS AUTO
    document.getElementById("fullAddress").textContent =
        `${name}, Pudukkottai, Tamil Nadu, India`;

    // DATE
    const today = new Date();
    const billDate = today.toLocaleDateString("en-IN");
    const due = new Date();
    due.setDate(today.getDate() + 7);
    const dueDate = due.toLocaleDateString("en-IN");

    document.getElementById("billDate").textContent = billDate;
    document.getElementById("dueDate").textContent = dueDate;

    // AMOUNT IN WORDS
    document.getElementById("words").textContent = numberToWords(Math.floor(amount)) + " rupees only";

    // HIDE INPUT & SHOW BILL
    document.querySelector(".container").style.display = "none";
    document.getElementById("billBox").style.display = "block";
}

// NUMBER → WORDS
function numberToWords(num) {
    const words = [
        "zero","one","two","three","four","five","six","seven","eight","nine","ten",
        "eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen",
        "eighteen","nineteen"
    ];

    const tens = ["", "", "twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];

    if (num < 20) return words[num];
    if (num < 100) return tens[Math.floor(num / 10)] + " " + words[num % 10];
    if (num < 1000) return words[Math.floor(num / 100)] + " hundred " + numberToWords(num % 100);

    return "";
}
