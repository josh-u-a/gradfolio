document.addEventListener("DOMContentLoaded", function () {
    const timelineItems = document.querySelectorAll(".timeline-item");
    
    timelineItems.forEach(item => {
        const year = item.getAttribute("data-year");
        const tooltip = document.createElement("div");
        tooltip.className = "tooltip";
        tooltip.textContent = year;
        item.appendChild(tooltip);
    });
});
