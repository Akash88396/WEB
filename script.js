// 1. Dynamic footer year update
const year = new Date().getFullYear();
document.querySelector("footer").innerHTML = `Copyright &copy; ${year} | All rights reserved`;

// 2. Welcome alert on page load
window.addEventListener("load", () => {
    alert("👋 Welcome to Ak Food Delivery!");
});

// 3. Dynamic placeholder change in search input
const input = document.querySelector("main input");

input.addEventListener("focus", () => {
    input.placeholder = "e.g., Biryani, Pizza, KFC...";
});

input.addEventListener("blur", () => {
    input.placeholder = "Search for restaurant, cuisine or a dish";
});

// 4. Logo animation on hover
const logo = document.querySelector("header .logo img");

logo.addEventListener("mouseover", () => {
    logo.style.transform = "rotate(10deg) scale(1.1)";
    logo.style.transition = "all 0.3s ease";
});

logo.addEventListener("mouseout", () => {
    logo.style.transform = "rotate(0deg) scale(1)";
});
