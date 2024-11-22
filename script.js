
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".interest-btn");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const interest = button.getAttribute("data-interest");
            const chatLink = generateChatLink(interest);
            alert(`Redirecting to chat for: ${interest}`);
            window.location.href = chatLink;
        });
    });
});

function generateChatLink(interest) {
    // Replace with actual chat links
    const links = {
        music: "https://example.com/chat/music",
        movies: "https://example.com/chat/movies",
        sports: "https://example.com/chat/sports",
        tech: "https://example.com/chat/tech",
        dating: "https://example.com/chat/dating"
    };
    return links[interest] || "https://example.com/chat";
}
