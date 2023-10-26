let counter = document.getElementById("counter");
let count = 0;

let plusButton = document.getElementById("plus");
let minusButton = document.getElementById("minus");

let heartButton = document.getElementById("heart");
let likes = document.getElementsByClassName("likes");
let likeTracker = {};

let pauseButton = document.getElementById("pause");

function countIncrease() {
    count += 1,
    counter.textContent = count 
    if (!(count in likeTracker)) {
        likeTracker[count] = 0;
        el = document.createElement('li');
        likes.appendChild(el);
    }
}

function countDecrease() {
    count -=1;
    counter.textContent = count
}

document.addEventListener("DOMContentLoaded", () => {
    isRunning = setInterval(() => {
        countIncrease() 
    }, 1000);

    plusButton.addEventListener('click', () => {
        if (isRunning) {
            countIncrease();
        }
    });

    minusButton.addEventListener('click', () => {
        if (isRunning) {
            countDecrease();
        }
    });

    heartButton.addEventListener('click', () => {
        if (isRunning) {
            likeTracker[count] += 1;
            console.log(likeTracker[count]);

        }
    });



    pauseButton.addEventListener('click', () => {
        if (!isRunning) {
            isRunning = setInterval(() => {count += 1, counter.textContent = count}, 1000);
            pauseButton.textContent = 'pause';
        } else {
            clearInterval(isRunning);
            isRunning = null;
            pauseButton.textContent = 'resume';
        }
    });
    
})