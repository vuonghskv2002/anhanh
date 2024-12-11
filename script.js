// Nút "Có" hiển thị modal yêu thương
document.getElementById("yesButton").addEventListener("click", () => {
    document.getElementById("loveModal").classList.remove("hidden");
});

// Nút "Không" di chuyển đến vị trí ngẫu nhiên
document.getElementById("noButton").addEventListener("mouseover", () => {
    const noButton = document.getElementById("noButton");
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});

// Đóng modal khi bấm nút đóng
document.querySelectorAll(".close").forEach(closeBtn => {
    closeBtn.addEventListener("click", (event) => {
        const modal = event.target.closest(".modal");
        modal.classList.add("hidden");
    });
});

// Đóng modal khi nhấn ngoài modal
window.addEventListener("click", (event) => {
    if (event.target.classList.contains("modal")) {
        event.target.classList.add("hidden");
    }
});
