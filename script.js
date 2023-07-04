// 1. Declare this variable
const nextEl = document.getElementById("next");
const prevEl = document.getElementById("prev");
const stepsEl = document.querySelectorAll(".step");
const progressEl = document.querySelector(".progress-bar-front");

// 3. Declared this variable
let currentChecked = 1;

// 2. Add this Event listener for the next button
nextEl.addEventListener("click", () => {
    currentChecked++;

    if (currentChecked > stepsEl.length) {
        currentChecked = stepsEl.length;
    }

    updateStepProgress();
});

// 6. Add this Event listener for the prev button
prevEl.addEventListener("click", () => {
    currentChecked--;

    if (currentChecked < 1) {
        currentChecked = 1;
    }

    updateStepProgress();
});


// 4. Create this function
function updateStepProgress() {
    // 5. add this logic if 
    stepsEl.forEach((stepEl, index) => {
        if (index < currentChecked) {
            stepEl.classList.add("checked");
            stepEl.innerHTML = `<i class="fa-solid fa-check"></i> <small>${index === 0 ? "Start" : index === stepsEl.length - 1 ? "Final" : "Step" + index}</small>`;
        } else { // 7. add this else logic
            stepEl.classList.remove("checked");
            stepEl.innerHTML = `<i class="fa-solid fa-xmark"></i>`
        }
    });

    // 8. create this variable 
    const checkedNumber = document.querySelectorAll(".checked");

    // 9. create this style for the progress front bar (green line)
    progressEl.style.width = ((checkedNumber.length - 1) / (stepsEl.length - 1)) * 100 + "%";

    // 10. create this logic for the button disabled
    if (currentChecked === 1) {
        prevEl.disabled = true;
    } else if (currentChecked === stepsEl.length) {
        nextEl.disabled = true;
    } else {
        prevEl.disabled = false;
        nextEl.disabled = false;
    }
}