import Paddle from "/src/paddle";
import InputHandler from "/src/input";
import Ball from "/src/ball";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;

const GAME_HEIGHT = 600;

/**
 *ctx.fillStyle = "#f00";
 ctx.fillRect(20, 20, 100, 100);

ctx.fillStyle = "#00f";
ctx.fillRect(370, 260, 50, 50);
 * 
 */

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

let ball = new Ball(GAME_WIDTH, GAME_HEIGHT);

new InputHandler(paddle);

let lastTime = 0;

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  paddle.update(deltaTime);
  paddle.draw(ctx);

  ball.update(deltaTime);
  ball.draw(ctx);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
