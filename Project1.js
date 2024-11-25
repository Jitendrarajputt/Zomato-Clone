// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Placeholder text animation
    const input = document.querySelector("input");

    const placeholders = [
        "Search for restaurant, cuisine or a dish",
        "Search for burgers or pizza",
        "Find the best food in your city",
        "Explore cuisines around you"
    ];

    let i = 0;

    function changePlaceholder() {
        input.setAttribute("placeholder", placeholders[i]);
        i = (i + 1) % placeholders.length; // Cycle through the placeholders
    }

    // Change placeholder every 3 seconds
    setInterval(changePlaceholder, 3000);

    // Fade in effect for the main content
    const mainContent = document.querySelector("main section");
    mainContent.style.opacity = 0;

    setTimeout(function () {
        mainContent.style.transition = "opacity 1.5s ease-in-out";
        mainContent.style.opacity = 1;
    }, 100);

    // Navbar links hover animation (scale effect)
    const navLinks = document.querySelectorAll("header ul li a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.1)";
        });

        link.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });
});
// JavaScript to add scroll-based animation

document.addEventListener("DOMContentLoaded", function () {
    // Placeholder text animation (already present)
    const input = document.querySelector("input");
    const placeholders = [
        "Search for restaurant, cuisine or a dish",
        "Search for burgers or pizza",
        "Find the best food in your city",
        "Explore cuisines around you"
    ];
    let i = 0;

    function changePlaceholder() {
        input.setAttribute("placeholder", placeholders[i]);
        i = (i + 1) % placeholders.length;
    }

    setInterval(changePlaceholder, 3000);

    // Scroll-based animation for review cards
    const reviewCards = document.querySelectorAll(".review-card");

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
    }

    function handleScroll() {
        reviewCards.forEach(card => {
            if (isInViewport(card)) {
                card.style.opacity = 1;
                card.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener('scroll', handleScroll);

    // Initial animation state for review cards
    reviewCards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = "translateY(50px)";
        card.style.transition = "all 0.5s ease";
    });

    // Trigger the animation on page load
    handleScroll();
});
