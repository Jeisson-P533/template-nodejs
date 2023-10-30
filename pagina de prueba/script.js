
const checkboxes = document.querySelectorAll(".task-checkbox");
const fill = document.querySelector(".fill");
const progressText = document.getElementById("progress-text");

let completedTasks = 0;

checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            completedTasks++;
        } else {
            completedTasks--;
        }

        const progress = (completedTasks / checkboxes.length) * 100;
        fill.style.width = `${progress}%`;
        progressText.textContent = `Progreso: ${progress.toFixed(0)}%`;
    });

});
   

