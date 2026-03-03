const form = document.getElementById("ageForm");
const dataDiv = document.getElementById("data");
const toggle = document.getElementById("themeToggle");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const birthDate = new Date(document.getElementById("date").value);
    const today = new Date();

    if (!birthDate.getTime()) return;

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    dataDiv.innerHTML = `
        <div class="result-item">
            <span class="label">Years</span>
            <span class="value" id="years">0</span>
        </div>
        <div class="result-item">
            <span class="label">Months</span>
            <span class="value" id="months">0</span>
        </div>
        <div class="result-item">
            <span class="label">Days</span>
            <span class="value" id="days">0</span>
        </div>
    `;

    animateCounter("years", years);
    animateCounter("months", months);
    animateCounter("days", days);
});

function animateCounter(id, target) {
    let count = 0;
    const element = document.getElementById(id);
    const increment = target / 50;

    const interval = setInterval(() => {
        count += increment;
        if (count >= target) {
            element.textContent = target;
            clearInterval(interval);
        } else {
            element.textContent = Math.floor(count);
        }
    }, 20);
}
