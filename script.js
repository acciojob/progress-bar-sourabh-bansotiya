//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.circle');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');
    let currentActive = 0;

    updateButtons();

    nextBtn.addEventListener('click', () => {
        currentActive++;

        if (currentActive > circles.length - 1) {
            currentActive = circles.length - 1;
        }

        updateProgress();
        updateButtons();
    });

    prevBtn.addEventListener('click', () => {
        currentActive--;

        if (currentActive < 0) {
            currentActive = 0;
        }

        updateProgress();
        updateButtons();
    });

    function updateProgress() {
        circles.forEach((circle, idx) => {
            if (idx <= currentActive) {
                circle.classList.add('active');
            } else {
                circle.classList.remove('active');
            }
        });
    }

    function updateButtons() {
        if (currentActive === 0) {
            prevBtn.disabled = true;
        } else {
            prevBtn.disabled = false;
        }

        if (currentActive === circles.length - 1) {
            nextBtn.disabled = true;
        } else {
            nextBtn.disabled = false;
        }
    }
});
