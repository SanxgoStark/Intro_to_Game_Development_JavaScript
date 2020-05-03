// Handling keyboard Input

export default class InputHandler {
  constructor(paddle) {
    document.addEventListener("keydown", event => {
      alert(event.keyCode);

      switch (event.keyCode) {
        case 37:
          paddle.moveLeft();
          break;

        case 39:
          paddle.moveRight();
          break;
      }
    });
  }
}
