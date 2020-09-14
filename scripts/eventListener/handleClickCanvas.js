import { renderCircle } from "../renderUIElements/renderCircle.js";

export function handleClickCanvas(objectCanvas, event) {
  const canvas = objectCanvas.canvas;
  const elemLeft = canvas.offsetLeft + canvas.clientLeft;
  const elemTop = canvas.offsetTop + canvas.clientTop;
  const x = event.pageX - elemLeft;
  const y = event.pageY - elemTop;
  const ctx = canvas.getContext("2d");
  const elements = objectCanvas.elements;

  // Collision detection between clicked offset and element.
  elements.forEach((element) => {
    if (
      y > element.y - element.radius &&
      y < element.y + element.radius &&
      x > element.x - element.radius &&
      x < element.x + element.radius
    ) {
      if (!element.filled) {
        renderCircle(ctx, element, false);

        element.filled = true;
      } else {
        renderCircle(ctx, element, true);
        element.filled = false;
      }
    }
  });
}
