// Wait for the page to fully load
window.addEventListener("load", () => {
    // Hide the loading screen and show the main content after loading
    const loadingScreen = document.getElementById("loading-screen");
    const mainContent = document.getElementById("main-content");

    setTimeout(() => {
        loadingScreen.style.display = "none";
        mainContent.style.display = "block";
    }, 2500); // Adjust time as needed
});
