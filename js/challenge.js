let counter = document.getElementById("counter");
let count = 0;

let plusButton = document.getElementById("plus");
let minusButton = document.getElementById("minus");

let heartButton = document.getElementById("heart");
let likes = document.getElementsByClassName("likes");
let likeTracker = {};

commentForm = document.getElementById("comment-form");
comments = document.getElementById("list");

let pauseButton = document.getElementById("pause");

function countIncrease() {
    count += 1,
    counter.textContent = count;
}

function countDecrease() {
    count -=1;
    counter.textContent = count;
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
            if (!(count in likeTracker)) {
                likeTracker[count] = 1;
                let para = document.createElement('p');
                para.id = count;
                likes[0].appendChild(para);
                document.getElementById(count).innerHTML = `${count} received ${likeTracker[count]} likes!`;
            } else {
                likeTracker[count] += 1;
                document.getElementById(count).innerHTML = `${count} received ${likeTracker[count]} likes!`;
            }
        }
    });

    commentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let p = document.createElement('p');
        p.textContent = `${count}: ${event.target.comment.value}`;
        comments.appendChild(p);
        commentForm.reset();
    })

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