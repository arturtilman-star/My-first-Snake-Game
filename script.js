const canvas = document.getElementById("game");

const ctx = canvas.getContext("2d");

const box = 25;

let snake = [
    { x: 10, y: 10 },
    { x: 9, y: 10 },
    { x: 8, y: 10 }
];

let direction = "right";

let food = {
    x: 15,
    y: 10
};

let score = 0;function drawGame() {

    ctx.fillStyle = "#222";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    // Makanan

    ctx.fillStyle = "lime";

    ctx.fillRect(
        food.x * box,
        food.y * box,
        box,
        box
    );


    // Ular

    ctx.fillStyle = "white";

    snake.forEach(function(part) {

        ctx.fillRect(
            part.x * box,
            part.y * box,
            box,
            box
        );

    });
}function moveSnake() {

    let head = {
        x: snake[0].x,
        y: snake[0].y
    };


    if (direction === "right") {
        head.x++;
    }

    if (direction === "left") {
        head.x--;
    }

    if (direction === "up") {
        head.y--;
    }

    if (direction === "down") {
        head.y++;
    }


    snake.unshift(head);

    snake.pop();
}document.addEventListener("keydown", function(event) {

    if (event.key === "ArrowUp") {
        direction = "up";
    }

    if (event.key === "ArrowDown") {
        direction = "down";
    }

    if (event.key === "ArrowLeft") {
        direction = "left";
    }

    if (event.key === "ArrowRight") {
        direction = "right";
    }

});function gameLoop() {

    moveSnake();

    drawGame();

}

setInterval(gameLoop, 150);
function changeDirection(newDirection) {

    if (newDirection === "up" && direction !== "down") {
        direction = "up";
    }

    if (newDirection === "down" && direction !== "up") {
        direction = "down";
    }

    if (newDirection === "left" && direction !== "right") {
        direction = "left";
    }

    if (newDirection === "right" && direction !== "left") {
        direction = "right";
    }
document.getElementById("up").addEventListener("click", function() {
    changeDirection("up");
});

document.getElementById("down").addEventListener("click", function() {
    changeDirection("down");
});

document.getElementById("left").addEventListener("click", function() {
    changeDirection("left");
});

document.getElementById("right").addEventListener("click", function() {
    changeDirection("right");
});
}
// TOMBOL HP

document.getElementById("up").addEventListener("click", function() {
    changeDirection("up");
});

document.getElementById("down").addEventListener("click", function() {
    changeDirection("down");
});

document.getElementById("left").addEventListener("click", function() {
    changeDirection("left");
});

document.getElementById("right").addEventListener("click", function() {
    changeDirection("right");
});